// Strumenti di supporto (schede guida). Tutto funziona nel browser, senza internet.

// ---------- Lente per i file: legge i metadati EXIF di una foto JPEG ----------
function exifParse(buf){
  var v=new DataView(buf);
  if(v.getUint16(0)!==0xFFD8)throw new Error("Non è un file JPEG");
  var off=2,tiff=-1;
  while(off<v.byteLength-4){
    var mk=v.getUint16(off),len=v.getUint16(off+2);
    if(mk===0xFFE1&&v.getUint32(off+4)===0x45786966){tiff=off+10;break;}
    if((mk&0xFF00)!==0xFF00)break;
    off+=2+len;
  }
  if(tiff<0)return null;
  var le=v.getUint16(tiff)===0x4949;
  var u16=function(o){return v.getUint16(o,le);},u32=function(o){return v.getUint32(o,le);};
  var SIZE={1:1,2:1,3:2,4:4,5:8,7:1};
  function readIFD(ioff){
    var n=u16(tiff+ioff),out={};
    for(var i=0;i<n;i++){
      var e=tiff+ioff+2+i*12,tag=u16(e),type=u16(e+2),cnt=u32(e+4);
      var size=(SIZE[type]||1)*cnt,vo=size<=4?e+8:tiff+u32(e+8),val;
      if(type===2){var s="";for(var k=0;k<cnt-1;k++)s+=String.fromCharCode(v.getUint8(vo+k));val=s;}
      else if(type===1||type===7){val=[];for(var k2=0;k2<cnt;k2++)val.push(v.getUint8(vo+k2));}
      else if(type===3){val=[];for(var k3=0;k3<cnt;k3++)val.push(u16(vo+k3*2));if(cnt===1)val=val[0];}
      else if(type===4){val=[];for(var k4=0;k4<cnt;k4++)val.push(u32(vo+k4*4));if(cnt===1)val=val[0];}
      else if(type===5){val=[];for(var k5=0;k5<cnt;k5++)val.push(u32(vo+k5*8)/u32(vo+k5*8+4));}
      out[tag]=val;
    }
    return out;
  }
  var ifd0=readIFD(u32(tiff+4));
  var gps=ifd0[0x8825]!==undefined?readIFD(ifd0[0x8825]):null;
  return {ifd0:ifd0,gps:gps};
}
function utf16(bytes){var s="";for(var i=0;i+1<bytes.length;i+=2){var c=bytes[i]|(bytes[i+1]<<8);if(c===0)break;s+=String.fromCharCode(c);}return s;}
function dms(r,ref){return r[0]+"° "+r[1]+"′ "+r[2]+"″ "+ref;}
function dec(r,ref){var d=r[0]+r[1]/60+r[2]/3600;return (ref==="S"||ref==="W")?-d:d;}
function lenteShow(buf){
  var out=document.getElementById("lente-out"),x;
  try{x=exifParse(buf);}catch(e){out.innerHTML='<p class="err">'+esc(e.message)+'</p>';return;}
  if(!x){out.innerHTML='<p class="ok" style="font-weight:400">Questo file non contiene metadati (qualcuno li ha tolti, oppure la foto è stata ricompressa da un’app).</p>';return;}
  var t=x.ifd0,rows=[];
  if(t[272]||t[271])rows.push(["Scattata con",[t[271],t[272]].filter(Boolean).join(" ")]);
  if(t[315])rows.push(["Autore",t[315]]);
  if(t[40091])rows.push(["Titolo",utf16(t[40091])]);
  if(t[270])rows.push(["Descrizione",t[270]]);
  if(t[40092])rows.push(["Commento",utf16(t[40092])]);
  if(x.gps&&x.gps[2]&&x.gps[4]){
    var la=dec(x.gps[2],x.gps[1]),lo=dec(x.gps[4],x.gps[3]);
    rows.push(["Posizione GPS",dms(x.gps[2],x.gps[1])+" , "+dms(x.gps[4],x.gps[3])+' &nbsp;<a href="https://www.openstreetmap.org/?mlat='+la.toFixed(5)+'&mlon='+lo.toFixed(5)+'#map=14/'+la.toFixed(5)+'/'+lo.toFixed(5)+'" target="_blank" rel="noopener">vedi su una mappa</a>']);
  }
  out.innerHTML='<table class="data">'+rows.map(function(r){return "<tr><th>"+r[0]+"</th><td>"+(r[0]==="Posizione GPS"?r[1]:esc(r[1]))+"</td></tr>";}).join("")+"</table>";
}
function lenteSito(){
  var out=document.getElementById("lente-out");out.innerHTML='<p class="muted">Leggo la foto…</p>';
  fetch("img/team.jpg").then(function(r){if(!r.ok)throw 0;return r.arrayBuffer();}).then(lenteShow).catch(function(){
    out.innerHTML='<p class="err">Il browser non permette di leggere la foto direttamente (succede quando il sito è aperto dal disco e non da internet). Salvate la foto da “Chi siamo” e sceglietela qui sotto.</p>';
  });
}
function lenteFile(inp){
  var f=inp.files&&inp.files[0];if(!f)return;
  var r=new FileReader();r.onload=function(){lenteShow(r.result);};r.readAsArrayBuffer(f);
}

// ---------- Disco di Cesare ----------
function cesare(t,k){
  return t.replace(/[A-Za-z]/g,function(c){
    var b=c<="Z"?65:97;return String.fromCharCode((c.charCodeAt(0)-b+k+260)%26+b);
  });
}
function discoAggiorna(){
  var k=parseInt(document.getElementById("shift").value,10)||0;
  var dir=document.getElementById("dir").value==="dec"?-1:1;
  var A="ABCDEFGHIJKLMNOPQRSTUVWXYZ",B=cesare(A,dir*k);
  document.getElementById("rowA").textContent=A.split("").join(" ");
  document.getElementById("rowB").textContent=B.split("").join(" ");
  document.getElementById("disco-out").textContent=cesare(document.getElementById("disco-in").value,dir*k);
}
function discoPiu(d){var s=document.getElementById("shift");s.value=((parseInt(s.value,10)||0)+d+26)%26;discoAggiorna();}

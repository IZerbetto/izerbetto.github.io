// Sottosopra Crew - sito didattico. Tutti i dati sono inventati.
// h() non e' crittografia: serve solo a non scrivere le risposte in chiaro.
function h(s){var a=0xdeadbeef,b=0x41c6ce57;for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677);}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return (4294967296*(2097151&b)+(a>>>0)).toString(16);}
var HASH={"login": "1a7d46cffe9b51", "rec": "1bda3a463e84c0", "foto": "811c07605ce86", "posta": "846f6b13db01", "ufficio": "1edcd183b44354", "domande": "1d6c8977027d5f", "password": "13a05c1b82320d", "pagina": "13fc566e4c9cbd", "clienti": "11230cba8d5ace", "cifrato": "e3b538298e8bb", "file": "1e4f449662b8b6", "wifi": "1cff864ae9205c", "notizia": "1713184727ccf6", "profilo": "1a3a8edc195317", "profcfg": "1c162f466c0be3"};
function norm(s){return (s||"").trim().toLowerCase();}
// nz: minuscolo, senza accenti, senza spazi/segni (cosi' "Zevio", " zevio " e "ZEVIO" valgono uguale)
function nz(s){return (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"");}
function d64(s){return decodeURIComponent(escape(atob(s)));}
function store(k,v){try{if(v===undefined){return JSON.parse(localStorage.getItem(k)||"null");}localStorage.setItem(k,JSON.stringify(v));}catch(e){return null;}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function pickOk(list,pre){var ok=true;list.forEach(function(m,i){if(document.getElementById(pre+i).checked!==m.p)ok=false;});return ok;}
function codeBox(b64){return ' <span class="code">'+d64(b64)+'</span>';}

// ---- Area riservata ----
function intranetLogin(ev){
  ev.preventDefault();
  var u=norm(document.getElementById("u").value),p=norm(document.getElementById("p").value);
  var m=document.getElementById("m");
  if(h(u+":"+p)===HASH.login){document.getElementById("loginbox").style.display="none";var bb=document.getElementById("bacheca");bb.innerHTML=d64("PGgyPkJhY2hlY2EgaW50ZXJuYTwvaDI+CjxkaXYgY2xhc3M9ImNhcmQiPjxoMz5BdnZpc28gYSB0dXR0byBpbCBjcmV3PC9oMz48cD5SaWNvcmRhdGV2aSBkaSBhZ2dpb3JuYXJlIGxlIGxpc3RlIGRlaSBmYW4gZW50cm8gdmVuZXJkw6wuIEFjY2Vzc28gYWwgc2VydmVyIGRlaSBmaWxlIGUgYWxsbyBzaG9wOiBzdGVzc2EgcGFzc3dvcmQgZGkgc2VtcHJlLjwvcD48cCBzdHlsZT0ibWFyZ2luLXRvcDoxNHB4Ij5Db2RpY2UgaW50ZXJubzogPHNwYW4gY2xhc3M9ImNvZGUiPkNISUFWRS01ODwvc3Bhbj48L3A+PC9kaXY+CjxkaXYgY2xhc3M9ImNhcmQiIHN0eWxlPSJtYXJnaW4tdG9wOjIycHgiPjxoMz5NZXNzYWdnaW8gZGkgTGVvIChjaWZyYXRvKTwvaDM+PHA+TG8gbGFzY2lvIHF1aSBjaWZyYXRvLCBjb21lIGZhY2V2YW1vIGFsbGUgbWVkaWUgY29uIGlsIGNpZnJhcmlvIGRpIENlc2FyZTogc3Bvc3RhbWVudG8gMy48L3A+PHAgc3R5bGU9Im1hcmdpbi10b3A6MTJweDtmb250LWZhbWlseTpDb25zb2xhcyxNZW5sbyxtb25vc3BhY2U7Zm9udC1zaXplOjE4cHgiPkZSR0xGSCBWTFNEVUxSIFdVRFdXTFFSIFFSWURRV0Q8L3A+PC9kaXY+");bb.style.display="block";}
  else{m.className="msg err";m.textContent="Credenziali non valide. Riprova.";}
  return false;
}
function recupero(ev){
  ev.preventDefault();
  var a=[1,2,3].map(function(i){return nz(document.getElementById("q"+i).value);}).join("|");
  var m=document.getElementById("rm");
  if(h(a)===HASH.rec){m.className="msg ok";m.innerHTML='Risposte corrette. Ti abbiamo inviato una mail di conferma. (Demo: codice di conferma'+codeBox("U0VHUkVUTy00NA==")+')';}
  else{m.className="msg err";m.textContent="Una o più risposte non sono corrette.";}
  return false;
}

// ---- Ordini dello shop (area "Il tuo ordine") ----
var ORDINI={
 "100":{nome:"Archivio interno ordini",mail:"dario.sala@sottosopracrew.example",prod:"Tutti gli ordini e i contatti dei fan",stato:"Riservato",tot:"-",note:"Cartella interna visibile per errore dal link dell'ordine. Codice archivio: "+d64("T1JESU5FLTE0")},
 "101":{nome:"Giada Rizzi",mail:"giada.rizzi@posta.example",prod:"Felpa Sottosopra M + adesivi",stato:"Spedito",tot:"38 euro",note:"Spedizione: via Mazzini 4, Zevio. Carta salvata per errore: 0000 0000 0000 0000 (numero inventato)."},
 "102":{nome:"Tommaso Bellini",mail:"tommaso.b@posta.example",prod:"Maglietta nera L",stato:"In preparazione",tot:"20 euro",note:"Ha 15 anni: paga la mamma. Nel file c'è anche il numero di telefono della mamma."},
 "103":{nome:"Sofia Moretti",mail:"sofia.moretti@posta.example",prod:"Biglietto Fest + spilla",stato:"Pagato",tot:"15 euro",note:"Elenco partecipanti con classe e scuola usato per un gruppo WhatsApp (nessuno ha dato il permesso)."},
 "104":{nome:"Elisa Fabbri",mail:"elisa.fabbri@posta.example",prod:"Felpa Sottosopra S",stato:"In corso",tot:"35 euro",note:"Il codice sconto amici è scritto nelle note di Leo, nella cartella condivisa."},
 "105":{nome:"Matteo Zanini",mail:"matteo.zanini@posta.example",prod:"Poster firmato",stato:"Spedito",tot:"12 euro",note:"Foto del pacco con indirizzo e posizione GPS già pubblicata nelle storie."},
 "106":{nome:"Chiara Fontana",mail:"chiara.f@posta.example",prod:"Pacchetto 5 adesivi",stato:"Bozza",tot:"15 euro",note:"Elenco dei soci del fan club (nomi e compleanni) nella cartella condivisa."},
 "107":{nome:"Pietro Gatti",mail:"pietro.gatti@posta.example",prod:"Cappellino",stato:"In corso",tot:"18 euro",note:"Password dello shop: la stessa di sempre."},
 "108":{nome:"Anna Pellegrini",mail:"anna.p@posta.example",prod:"Tote bag",stato:"Spedito",tot:"14 euro",note:"-"},
 "109":{nome:"Federico Villa",mail:"federico.villa@posta.example",prod:"Felpa Sottosopra XL",stato:"Sospeso",tot:"40 euro",note:"Dati della carta MAI salvati qui (da verificare)."},
 "110":{nome:"Lucia Ferrante",mail:"lucia.f@posta.example",prod:"Vinile edizione limitata",stato:"In corso",tot:"25 euro",note:"-"},
 "111":{nome:"Davide Costa",mail:"davide.costa@posta.example",prod:"Spilla",stato:"Spedito",tot:"4 euro",note:"-"},
 "112":{nome:"Elena Bruni",mail:"elena.bruni@posta.example",prod:"Felpa + abbonamento newsletter",stato:"In corso",tot:"41 euro",note:"Volontaria del Fest: ha la password dei profili social del gruppo."}
};
function showOrdine(){
  var id=(new URLSearchParams(location.search)).get("id");
  var box=document.getElementById("ord");var c=ORDINI[id];
  if(!c){box.innerHTML='<p class="err">Ordine non trovato.</p>';return;}
  var rows=[["Ordine di",c.nome],["Email",c.mail],["Prodotto",c.prod],["Stato",c.stato],["Totale",c.tot],["Note interne",c.note]];
  box.innerHTML='<p class="muted">Ordine n. '+esc(id)+'</p><table class="data">'+rows.map(function(r){return "<tr><th>"+r[0]+"</th><td>"+esc(r[1])+"</td></tr>";}).join("")+"</table>";
}

// ---- Webmail (enigma messaggi sospetti) ----
var MAILS=[
 {f:"Sala Civica Isola <prenotazioni@salacivica-isola.example>",s:"Conferma prenotazione sala per sabato",b:"Ciao Marta, la sala è prenotata per sabato dalle 15 alle 23. Il signor Bianchi ti aspetta alle 14 per le chiavi. Grazie!",p:false},
 {f:"Supporto Profili <assistenza@profilo-sicuro.example>",s:"URGENTE: il tuo profilo verrà eliminato oggi!",b:"Abbiamo ricevuto una segnalazione sul tuo profilo @sottosopra.crew. Hai due ore per verificare l'account, poi verrà eliminato: accedi subito da http://verifica-profilo.example/login e inserisci la password.",p:true},
 {f:"Leo Ferri <leo.ferri@sottosopracrew.example>",s:"Prove di giovedì",b:"Ciao Marta, giovedì alle 17 prove in sala per la scaletta del Fest. Porta i testi stampati e il cavo lungo. Leo",p:false},
 {f:"Premi Fortunati <vinci@mega-premio.example>",s:"Hai vinto 2 biglietti VIP e 500 euro!",b:"Complimenti! Per ritirare il premio rispondi con nome, cognome e il numero della tua carta.",p:true},
 {f:"Leo Ferri <leo.ferri@s0ttosopracrew.example>",s:"Aiuto, mandami il codice che ti arriva",b:"Marta, ho perso il telefono e sono bloccato fuori dall'account della band. Ora ti arriva un codice per SMS: scrivimelo subito qui, devo rientrare prima del live e non dirlo agli altri! Leo",p:true}
];
function mailInit(){
  var box=document.getElementById("mails");
  box.innerHTML=MAILS.map(function(m,i){return '<div class="card mailc"><label class="pick"><input type="checkbox" id="mc'+i+'"><span><b>'+(i+1)+' · '+esc(m.s)+'</b></span></label><p class="from">Da: '+esc(m.f)+'</p><p class="body">'+esc(m.b)+'</p></div>';}).join("");
}
function mailSend(){
  var out=document.getElementById("mm");
  if(pickOk(MAILS,"mc")){out.className="msg ok";out.innerHTML='Segnalazione ricevuta: erano proprio tentativi di truffa. Grazie!'+codeBox("RklMVFJPLTIx");}
  else{out.className="msg err";out.textContent="Dario risponde: “Controllati, qualcosa non torna.” (Una scelta è sbagliata o manca.)";}
}

// ---- Chat del crew (enigma file pericolosi) ----
var FILES=[
 {u:"Ilaria Neri",c:"#FF5D73",t:"16:02",b:"Ecco la copertina del merch, fatemi sapere!",f:"copertina-merch-v3.png",s:"2,4 MB",i:"🖼️",p:false},
 {u:"Leo Ferri",c:"#5B8DEF",t:"16:10",b:"La scaletta aggiornata per sabato.",f:"scaletta-fest.pdf",s:"180 KB",i:"📄",p:false},
 {u:"beat_gratis_ok",c:"#9A91BC",t:"16:15",nu:true,b:"Ciao a tutti! Vi regalo 500 beat gratis per i vostri video, scaricate e aprite subito!",f:"gratis-beat-pack.zip",s:"48 MB",i:"🗜️",p:true},
 {u:"Dario Sala",c:"#4FD1A5",t:"16:21",b:"Il videoclip è finito, guardatelo!!",f:"videoclip-finale.mp4.exe",s:"1,1 MB",i:"🎬",p:true},
 {u:"Marta Corsi",c:"#FFB020",t:"16:30",b:"I testi delle canzoni per sabato.",f:"testi-fest.docx",s:"35 KB",i:"📝",p:false},
 {u:"vedi_chi_ti_guarda",c:"#9A91BC",t:"16:42",nu:true,b:"Installa questa app per vedere chi guarda le tue storie!",f:"storie-spia-1.2.apk",s:"6 MB",i:"📱",p:true}
];
function chatInit(){
  document.getElementById("chat").innerHTML=FILES.map(function(m,i){
    return '<div class="msgrow"><span class="av" style="background:'+m.c+'">'+esc(m.u.charAt(0).toUpperCase())+'</span><div class="bubble"><div class="who"><b>'+esc(m.u)+'</b> <small>'+m.t+(m.nu?' · <span class="newu">nuovo utente</span>':'')+'</small></div><p>'+esc(m.b)+'</p><label class="file pick"><input type="checkbox" id="fc'+i+'"><span class="ficon">'+m.i+'</span><span><b>'+(i+1)+' · '+esc(m.f)+'</b><br><small>'+m.s+' · non aprirei questo file</small></span></label></div></div>';
  }).join("");
}
function chatSend(){
  var out=document.getElementById("cm");
  if(pickOk(FILES,"fc")){out.className="msg ok";out.innerHTML='Perfetto: nessuno dei tre file è stato aperto.'+codeBox("QUxMRUdBVE8tNzI=");}
  else{out.className="msg err";out.textContent="Leo risponde: “Guardate meglio nomi e mittenti: qualcosa non torna.” (Una scelta è sbagliata o manca.)";}
}

// ---- Wi-Fi del Fest ----
var NETS=[
 {n:"Sottosopra_Fest",lock:false,sig:4,msg:"Attenzione: ha lo stesso nome ma è aperta, senza password. È una rete-trappola: chi la gestisce potrebbe vedere tutto quello che fai."},
 {n:"Sottosopra_Fest",lock:true,sig:3,ok:true,msg:"Collegati! Nome giusto e rete protetta da password."},
 {n:"WiFi_GRATIS_Fest",lock:false,sig:3,msg:"Rete aperta con un nome allettante: non è una rete ufficiale del Fest."},
 {n:"SottosopraFest",lock:true,sig:3,msg:"Il nome non è esattamente quello ufficiale: non è la rete del Fest."},
 {n:"Sala_Civica_Uffici",lock:true,sig:2,msg:"È la rete degli uffici del Comune, non quella per il pubblico."},
 {n:"sottosopra-ospiti-26",lock:true,sig:1,msg:"È la rete della sala prove del crew: è lontana da qui."},
 {n:"Hotspot_Matteo",lock:true,sig:1,msg:"È il telefono di qualcuno: non è la rete del Fest."}
];
function wifiInit(){
  document.getElementById("nets").innerHTML=NETS.map(function(n,i){
    return '<div class="net"><span class="bars b'+n.sig+'" title="segnale"><i></i><i></i><i></i><i></i></span><b class="nname">'+esc(n.n)+'</b><span class="lk">'+(n.lock?'🔒 protetta':'🔓 aperta')+'</span><button class="ghost" onclick="wifiGo('+i+')">Collegati</button></div>';
  }).join("");
}
function wifiGo(i){
  var n=NETS[i],o=document.getElementById("wm");
  o.className=n.ok?"msg ok":"msg err";
  o.innerHTML=esc(n.msg)+(n.ok?codeBox("U0VHTkFMRS0zNg=="):"");
}

// ---- Rassegna social (enigma notizia falsa) ----
var VOCI=[
 {a:"@sottosopracrew",c:"#5B8DEF",d:"2 nov",b:"Sabato si suona! Porte aperte alle 18. Tutte le informazioni su sottosopracrew.example/festival",s:"Account creato a marzo 2022 · 4.300 follower · Il link porta al sito ufficiale · Non chiede nulla a nessuno",p:false},
 {a:"@fest.sottosopra.news",c:"#9A91BC",d:"2 nov",b:"ULTIM'ORA!!! SOTTOSOPRA FEST ANNULLATO!!! CONDIVIDETE SUBITO A TUTTI I VOSTRI AMICI!!!",s:"Account creato ieri · 12 follower · Nessun link · Nessuna fonte · Nessun altro post",p:true},
 {a:"@radiocampus",c:"#FFB020",d:"1 nov",b:"Sabato in diretta dal Sottosopra Fest: alle 20 la nostra session con il crew.",s:"Radio universitaria, account dal 2019 · 12.000 follower · Il link porta al programma della radio",p:false},
 {a:"@gossip.veronese",c:"#9A91BC",d:"2 nov",b:"Ho sentito che dopo il Fest il gruppo si scioglie, me l'ha detto un amico di un amico.",s:"Account anonimo · 800 follower · Pubblica tante voci, spesso smentite · Nessuna fonte",p:true},
 {a:"@sala.civica.isola",c:"#4FD1A5",d:"1 nov",b:"Sabato la Sala Civica apre alle 15 per l'allestimento del Sottosopra Fest.",s:"Account del Comune, attivo dal 2020 · Il link porta al calendario ufficiale degli eventi",p:false},
 {a:"@sottosopra.vip.tickets",c:"#9A91BC",d:"2 nov",b:"Biglietti VIP scontati del 70%! Scrivimi in privato e paga con una ricarica prepagata, solo oggi.",s:"Account creato 3 giorni fa · 40 follower · Chiede pagamenti in privato · I biglietti veri si comprano solo dallo shop del crew",p:true}
];
function vociInit(){
  document.getElementById("voci").innerHTML=VOCI.map(function(m,i){
    return '<div class="card vocec"><div class="msgrow"><span class="av" style="background:'+m.c+'">'+esc(m.a.charAt(1).toUpperCase())+'</span><div class="bubble"><div class="who"><b>'+esc(m.a)+'</b> <small>'+m.d+'</small></div><p>'+esc(m.b)+'</p><details><summary>Scheda account</summary><p class="scheda">'+esc(m.s)+'</p></details><label class="pick"><input type="checkbox" id="vc'+i+'"><span><b>'+(i+1)+' · Segnalo come falso o inaffidabile</b></span></label></div></div></div>';
  }).join("");
}
function vociSend(){
  var out=document.getElementById("vm");
  if(pickOk(VOCI,"vc")){out.className="msg ok";out.innerHTML='Segnalazioni giuste: la voce era falsa e il Fest si fa.'+codeBox("Rk9OVEUtMjk=");}
  else{out.className="msg err";out.textContent="Marta risponde: “Aprite bene le schede account: una scelta è sbagliata o manca.”";}
}

// ---- Profilo di Marta (enigma privacy) ----
var PROF=[
 {k:"priv",t:"Account privato",d:"Solo chi approvi può vedere foto e storie",v:0,w:1},
 {k:"pos",t:"Posizione in tempo reale",d:"Gli altri vedono dove sei sulla mappa",v:1,w:0},
 {k:"tag",t:"Approvo i tag prima che compaiano",d:"Le foto in cui ti taggano appaiono solo dopo il tuo sì",v:0,w:1},
 {k:"dm",t:"Chiunque può scrivermi in privato",d:"Anche chi non conosci",v:1,w:0},
 {k:"contact",t:"Mostra email e telefono sul profilo",d:"Visibili a chi apre la pagina",v:1,w:0},
 {k:"twofa",t:"Verifica in due passaggi",d:"Per entrare serve anche un codice sul telefono",v:1,w:1},
 {k:"notif",t:"Notifiche per i nuovi follower",d:"Un avviso a ogni nuovo follower",v:1,w:null}
];
function profInit(){
  document.getElementById("toggles").innerHTML=PROF.map(function(p,i){
    return '<label class="tg"><span class="tgt"><b>'+esc(p.t)+'</b><small>'+esc(p.d)+'</small></span><input type="checkbox" id="pf'+i+'"'+(p.v?" checked":"")+' onchange="profUpdate()"><span class="sw"></span></label>';
  }).join("");
  profUpdate();
}
function profVal(k){for(var i=0;i<PROF.length;i++)if(PROF[i].k===k)return document.getElementById("pf"+i).checked?1:0;}
function profUpdate(){
  var L=[];
  L.push(profVal("priv")?"🔒 Profilo privato: un estraneo non vede foto né storie.":"🌍 Foto e storie visibili a chiunque, anche agli sconosciuti.");
  L.push(profVal("pos")?"📍 Ora è a Isola della Scala, vicino alla Sala Civica (aggiornato 2 minuti fa).":"📍 Posizione non visibile.");
  L.push(profVal("tag")?"🏷️ I tag compaiono solo dopo la sua approvazione.":"🏷️ Chiunque può taggarla e la foto compare subito sul suo profilo.");
  L.push(profVal("dm")?"✉️ Può scriverle chiunque, anche chi non conosce.":"✉️ Possono scriverle solo le persone che segue.");
  L.push(profVal("contact")?"📞 Email e telefono visibili: marta.corsi@sottosopracrew.example · 333 000 0000":"📞 Email e telefono nascosti.");
  L.push(profVal("twofa")?"🔐 Per entrare nell'account serve password più un codice sul telefono.":"🔐 Basta la password per entrare nell'account.");
  document.getElementById("prev").innerHTML=L.map(function(x){return "<li>"+x+"</li>";}).join("");
}
function profSave(){
  var ks=["priv","pos","tag","dm","contact","twofa"],st=ks.map(profVal).join("|"),o=document.getElementById("pm");
  if(h(st)===HASH.profcfg){o.className="msg ok";o.innerHTML='Impostazioni salvate: ora Marta è molto più al sicuro.'+codeBox("UFJPRklMTy04Mw==");}
  else{var bad=0,want=[1,0,1,0,0,1];ks.forEach(function(k,i){if(profVal(k)!==want[i])bad++;});o.className="msg err";o.textContent="Ci sono ancora "+bad+" impostazioni da sistemare. Guardate l'anteprima: cosa non vorreste far vedere a un estraneo?";}
}

// ---- Quaderno della missione ----
var PIANI=[["Piano 1","Riscaldamento"],["Piano 2","Occhio ai dettagli"],["Piano 3","Indagine"],["Piano 4","Finale"]];
var ENIGMI=[
 {id:"ufficio",pi:0,t:"La regia live",x:"Guardate bene le foto del collettivo. Contano i dettagli piccoli.",hs:[
   "Cercate nei social del collettivo.",
   "C’è una foto della regia live, pubblicata il 20 aprile.",
   "Ingrandite l’immagine: qualcosa è attaccato al monitor."]},
 {id:"posta",pi:0,t:"I messaggi sospetti",x:"Marta ha cinque messaggi nella casella del collettivo. Quali non dovrebbe aprire?",hs:[
   "La casella si chiama “Webmail”: la trovate in fondo a ogni pagina del sito. Leggete bene i mittenti, non solo i nomi.",
   "Fretta, premi, richieste di soldi, di codici o di password: sono segnali di allarme. Controllate anche le lettere dell’indirizzo (una “o” può essere uno zero!).",
   "Sono tre su cinque: i messaggi 2, 4 e 5, contando dall’alto."]},
 {id:"file",pi:0,t:"Il file strano",x:"Nella chat del crew girano dei file. Quali non bisognerebbe mai aprire?",hs:[
   "La chat del crew si trova in fondo a ogni pagina del sito. Guardate il nome intero di ogni file, fino all’ultimo punto.",
   "Le lettere dopo l’ultimo punto dicono che tipo di file è: un video non finisce mai in .exe. Contano anche chi lo manda e cosa promette.",
   "Sono tre su sei: i file 3, 4 e 6, contando dall’alto."]},
 {id:"foto",pi:1,t:"La foto del gruppo",x:"La foto di gruppo nella pagina “Chi siamo” sembra innocente. Ma cosa porta con sé il file?",hs:[
   "Una foto è più di quello che si vede: dentro il file ci sono anche delle informazioni nascoste.",
   "Servono i “dettagli” del file. Su PC: tasto destro sul file salvato &gt; Proprietà &gt; Dettagli. Su tablet o se non riuscite: aprite la <a href=\"strumenti.html#lente\" target=\"_blank\">Lente per i file</a> (scheda guida, passo-passo).",
   "Nei dettagli cercate il commento: contiene una parola in maiuscolo con un numero. Quello è il codice."]},
 {id:"wifi",pi:1,t:"Il Wi-Fi del Fest",x:"Al Fest c’è il Wi-Fi per il pubblico. Ma a quale rete bisogna collegarsi?",hs:[
   "Nel menu del sito c’è la pagina del Fest, con tutte le informazioni per il pubblico.",
   "Leggete come si chiama la rete ufficiale e com’è protetta. Il nome da solo non basta: guardate anche il lucchetto.",
   "La rete giusta si chiama esattamente Sottosopra_Fest ed è protetta da password. Quella con lo stesso nome ma senza lucchetto è una trappola."]},
 {id:"notizia",pi:1,t:"La notizia falsa",x:"Sui social gira la voce che il Fest sia annullato. Quali post sono inaffidabili?",hs:[
   "Nella pagina News c’è il link alla rassegna dei social sul Fest. Ogni post ha una scheda account da aprire.",
   "Segnali di allarme: urgenza, maiuscole, “condividete subito”, “me l’ha detto un amico”, soldi chiesti in privato. Segnali buoni: account vecchio, link a una fonte vera.",
   "Sono tre su sei: i post 2, 4 e 6, contando dall’alto."]},
 {id:"domande",pi:2,t:"Le domande segrete",x:"Il recupero password fa delle domande. Le risposte, forse, sono già pubbliche.",hs:[
   "Le risposte sono nel sito, non servono tentativi a caso. Il recupero password si trova nella pagina “Area riservata”.",
   "Leggete le schede del collettivo e i post social: sono tre risposte, una per persona.",
   "Marta: post dell’8 giugno. Leo: la sua scheda in “Chi siamo”. Dario: post del 3 luglio."]},
 {id:"password",pi:2,t:"La password",x:"L’area riservata è protetta da utente e password. Quanto è forte, davvero?",hs:[
   "Servono utente e password: cominciate dall’utente. Il recupero password dell’enigma 7 dice di chi è l’account.",
   "Le email del collettivo hanno un formato preciso (nome.cognome). E chi viene sempre alle prove con Leo?",
   "Utente: nome.cognome di Leo. Password: nome del suo cane + anno di nascita, tutto minuscolo e attaccato."]},
 {id:"profilo",pi:2,t:"Il profilo pubblico",x:"Il profilo social di Marta dice troppo di lei a chiunque. Sistemate le impostazioni.",hs:[
   "Il profilo di Marta si apre dal pulsante nella sua scheda, in “Chi siamo”. Guardate l’anteprima: è ciò che vede un estraneo.",
   "Per ogni voce chiedetevi: serve davvero a tutti sapere questo di Marta? Alcune voci vanno spente, altre accese. Una va lasciata com’è.",
   "Account privato: acceso. Posizione in tempo reale: spenta. Approvazione dei tag: accesa. Messaggi da chiunque: spenti. Email e telefono visibili: spenti. Verifica in due passaggi: resta accesa."]},
 {id:"pagina",pi:3,t:"Il tuo ordine",x:"Ogni fan può seguire il suo ordine online. Ma vede solo il suo?",hs:[
   "Guardate l’indirizzo nella barra mentre aprite “Il tuo ordine”: c’è un numero alla fine.",
   "Cosa succede se cambiate quel numero? Se serve, leggete la <a href=\"strumenti.html#indirizzo\" target=\"_blank\">scheda guida sugli indirizzi web</a>.",
   "Provate numeri vicini, anche più bassi, fino a trovare un archivio interno."]},
 {id:"clienti",pi:3,t:"La cartella condivisa",x:"La newsletter promette locandina e scaletta. Cos’altro c’è nella cartella?",hs:[
   "Dove un gruppo “regala” materiali ai fan?",
   "Nelle news c’è una newsletter con il link a una cartella: apritela.",
   "Nella cartella non ci sono solo materiali pubblici: guardate le voci “interno”."]},
 {id:"cifrato",pi:3,t:"Il messaggio cifrato",x:"Leo ha lasciato un messaggio in un posto riservato. Per leggerlo serve ricordarsi di Cesare.",hs:[
   "Il messaggio sta in un’area protetta: serve il lavoro dell’enigma 8.",
   "Dopo l’accesso all’area riservata, cercate il messaggio cifrato. Per decifrarlo c’è il <a href=\"strumenti.html#cesare\" target=\"_blank\">Disco di Cesare</a> (scheda guida).",
   "Cifrario di Cesare, spostamento 3: ogni lettera torna indietro di 3. Il codice finale è PAROLA-numero."]}
];
var TOT=ENIGMI.length,PT_OK=2,PT_HINT=0.5;
function fmt(n){return (n<0?"−":"")+String(Math.abs(n)).replace(".",",");}
function qState(){return {c:store("ss_codes")||{},h:store("ss_hints")||{}};}
function quadernoRender(){
  var st=qState(),box=document.getElementById("piani"),html="",nC=0,nH=0;
  ENIGMI.forEach(function(e){if(st.c[e.id])nC++;nH+=st.h[e.id]||0;});
  for(var p=0;p<PIANI.length;p++){
    html+='<h2 class="piano p'+(p+1)+'"><span class="chip">'+PIANI[p][0]+'</span> '+PIANI[p][1]+'</h2>';
    ENIGMI.forEach(function(e,idx){
      if(e.pi!==p)return;
      var done=!!st.c[e.id],lv=st.h[e.id]||0;
      html+='<div class="en p'+(p+1)+(done?' done':'')+'"><span class="num">'+(idx+1)+'</span><div class="enb"><h3>'+e.t+'</h3><p>'+e.x+'</p>';
      if(!done)html+='<div class="row"><input type="text" id="in_'+e.id+'" placeholder="CODICE-00" autocomplete="off" onkeydown="if(event.key===\'Enter\'){quadernoCheck(\''+e.id+'\')}"><button onclick="quadernoCheck(\''+e.id+'\')">Controlla</button>'+(lv<3?'<button class="ghost" onclick="quadernoHint(\''+e.id+'\')">Serve un aiuto (−0,5 punti)</button>':'')+'</div><p class="msg" id="ms_'+e.id+'" style="margin:8px 0 0"></p>';
      for(var i=0;i<lv;i++)html+='<div class="hint"><b>Aiuto '+(i+1)+'</b> '+e.hs[i]+'</div>';
      html+='</div>'+(done?'<span class="stamp">risolto</span>':'')+'</div>';
    });
  }
  box.innerHTML=html;
  var pts=nC*PT_OK-nH*PT_HINT;
  document.getElementById("sc").textContent=nC;document.getElementById("sa").textContent=nH;document.getElementById("sp").textContent=fmt(pts);
  var pb=document.getElementById("pb");if(pb)pb.style.width=(nC/TOT*100)+"%";
  document.getElementById("finale").style.display=nC===TOT?"block":"none";
}
function quadernoInit(){quadernoRender();}
function quadernoCheck(id){
  var v=nz(document.getElementById("in_"+id).value);
  var m=document.getElementById("ms_"+id);
  if(h(v)===HASH[id]){var s=qState();s.c[id]=true;store("ss_codes",s.c);quadernoRender();}
  else{m.className="msg err";m.textContent="Non è il codice giusto. Riprovate.";}
}
function quadernoHint(id){
  var s=qState();s.h[id]=Math.min(3,(s.h[id]||0)+1);store("ss_hints",s.h);quadernoRender();
}
function quadernoReset(){if(confirm("Cancellare i progressi di questo browser?")){store("ss_codes",{});store("ss_hints",{});quadernoRender();}}

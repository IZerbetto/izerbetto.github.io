// Studio Bussola - sito didattico. Tutti i dati sono inventati.
// h() non e' crittografia: serve solo a non scrivere le risposte in chiaro.
function h(s){var a=0xdeadbeef,b=0x41c6ce57;for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677);}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return (4294967296*(2097151&b)+(a>>>0)).toString(16);}
var HASH={login:"16389b4c353f7b",rec:"27d602bd2d955",foto:"fe4683b166a93",posta:"3d7e7a5eeb634",ufficio:"784598c0f8477",domande:"15048c06e92106",password:"13a8138a6572be",pagina:"1170031d8db7e7",clienti:"1804361e412501",cartella:"3bdd416796a5d",cifrato:"13fecfc419a823"};
function norm(s){return (s||"").trim().toLowerCase();}
function store(k,v){try{if(v===undefined){return JSON.parse(localStorage.getItem(k)||"null");}localStorage.setItem(k,JSON.stringify(v));}catch(e){return null;}}

// ---- Area riservata ----
function intranetLogin(ev){
  ev.preventDefault();
  var u=norm(document.getElementById("u").value),p=norm(document.getElementById("p").value);
  var m=document.getElementById("m");
  if(h(u+":"+p)===HASH.login){document.getElementById("loginbox").style.display="none";var bb=document.getElementById("bacheca");bb.innerHTML=atob("PGgyPkJhY2hlY2EgaW50ZXJuYTwvaDI+CjxkaXYgY2xhc3M9ImNhcmQiPjxoMz5BdnZpc28gYSB0dXR0byBpbCB0ZWFtPC9oMz48cD5SaWNvcmRhdGV2aSBkaSBhZ2dpb3JuYXJlIGkgbGlzdGluaSBkZWkgY2xpZW50aSBlbnRybyB2ZW5lcmQmIzIzNjsuIEFjY2Vzc28gYWwgc2VydmVyIGZpbGU6IHN0ZXNzYSBwYXNzd29yZCBkaSBzZW1wcmUuPC9wPjxwIHN0eWxlPSJtYXJnaW4tdG9wOjE0cHgiPkNvZGljZSBpbnRlcm5vOiA8c3BhbiBjbGFzcz0iY29kZSI+UkVURS01ODwvc3Bhbj48L3A+PC9kaXY+CjxkaXYgY2xhc3M9ImNhcmQiIHN0eWxlPSJtYXJnaW4tdG9wOjE2cHgiPjxoMz5NZXNzYWdnaW8gZGVsIHRpdG9sYXJlIChjaWZyYXRvKTwvaDM+PHA+TG8gbGFzY2lvIHF1aSBjaWZyYXRvLCBjb21lIGZhY2V2YW1vIGEgbGV6aW9uZTogY2lmcmFyaW8gZGkgQ2VzYXJlLCBzcG9zdGFtZW50byAzLjwvcD48cCBzdHlsZT0ibWFyZ2luLXRvcDoxMnB4O2ZvbnQtZmFtaWx5OkNvbnNvbGFzLE1lbmxvLG1vbm9zcGFjZTtmb250LXNpemU6MThweCI+RlJHTEZIIElMUURPSCBQRFNTRCBXVURXV0xRUiBSV1dEUVdEPC9wPjwvZGl2Pg==");bb.style.display="block";}
  else{m.className="msg err";m.textContent="Credenziali non valide. Riprova.";}
  return false;
}
function recupero(ev){
  ev.preventDefault();
  var a=[1,2,3].map(function(i){return norm(document.getElementById("q"+i).value);}).join("|");
  var m=document.getElementById("rm");
  if(h(a)===HASH.rec){m.className="msg ok";m.innerHTML='Risposte corrette. Ti abbiamo inviato un’email di conferma. (Demo: codice di conferma <span class="code">'+atob("UklDT1JETy0xOQ==")+'</span>)';}
  else{m.className="msg err";m.textContent="Una o più risposte non sono corrette.";}
  return false;
}

// ---- Area clienti ----
var CLIENTI={
 "100":{azienda:"Studio Bussola (archivio interno)",ref:"Luca Ferrandi",mail:"luca.ferrandi@studiobussola.example",prog:"Contratti e accessi dei clienti",stato:"Riservato",bud:"-",note:"Cartella interna visibile per errore dal link progetto. Codice archivio: "+atob("VkVMQS0xNA==")},
 "101":{azienda:"Panificio Il Fornaio Blu",ref:"Anna Rizzi",mail:"anna.rizzi@fornaioblu.example",prog:"Restyling logo e vetrina",stato:"Consegnato",bud:"4.200 euro",note:"Fattura saldata. Banca: IT00 X000 0000 0000 0000 0000 000"},
 "102":{azienda:"Officine Tessari",ref:"Marco Tessari",mail:"marco@officinetessari.example",prog:"Sito vetrina e catalogo",stato:"In corso",bud:"7.800 euro",note:"Il cliente vuole il listino prezzi nascosto ai concorrenti."},
 "103":{azienda:"Studio Dentistico Moro",ref:"Dott.ssa Elisa Moro",mail:"studio@dentistamoro.example",prog:"Campagna social di apertura",stato:"In corso",bud:"3.500 euro",note:"Elenco pazienti usato per newsletter (da verificare consenso)."},
 "104":{azienda:"Cantine Valmora",ref:"Paolo Valmora",mail:"paolo@cantinevalmora.example",prog:"Etichette e campagna vendemmia 2026",stato:"In corso",bud:"12.000 euro",note:"Il listino riservato ai ristoratori e' nel brief allegato."},
 "105":{azienda:"Trattoria da Nino",ref:"Nino Bertoldi",mail:"nino@trattoriadanino.example",prog:"Menu e foto piatti",stato:"In corso",bud:"2.900 euro",note:"Foto con posizione GPS gia' caricate sul sito del cliente."},
 "106":{azienda:"Palestra Energia 24",ref:"Chiara Fontana",mail:"chiara@energia24.example",prog:"Video promo",stato:"Bozza",bud:"6.400 euro",note:"Contratti con dati dei soci in cartella condivisa."},
 "107":{azienda:"Libreria Cartaviva",ref:"Giorgio Sala",mail:"giorgio@cartaviva.example",prog:"Newsletter mensile",stato:"In corso",bud:"1.800 euro",note:"Password del gestionale: la stessa dell'altra volta."},
 "108":{azienda:"Autofficina Rossi",ref:"Davide Rossi",mail:"davide@autorossi.example",prog:"Volantini e insegna",stato:"Consegnato",bud:"2.100 euro",note:"-"},
 "109":{azienda:"Hotel Belvedere",ref:"Francesca Lombardi",mail:"booking@belvedere.example",prog:"Sito prenotazioni",stato:"Sospeso",bud:"15.500 euro",note:"Dati carte clienti MAI salvati qui (verificare)."},
 "110":{azienda:"Cooperativa Orto Vivo",ref:"Silvia Neri",mail:"silvia@ortovivo.example",prog:"Packaging",stato:"In corso",bud:"5.300 euro",note:"-"},
 "111":{azienda:"Scuola di Musica Armonia",ref:"Matteo Conti",mail:"info@armoniamusica.example",prog:"Locandine concerto",stato:"Consegnato",bud:"900 euro",note:"-"},
 "112":{azienda:"Gelateria Polare",ref:"Luisa Gatti",mail:"luisa@gelateriapolare.example",prog:"Social stagionale",stato:"In corso",bud:"3.100 euro",note:"Dipendente stagionale con accesso ai profili del cliente."}
};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function showProgetto(){
  var id=(new URLSearchParams(location.search)).get("id");
  var box=document.getElementById("prog");var c=CLIENTI[id];
  if(!c){box.innerHTML='<p class="err">Progetto non trovato.</p>';return;}
  var rows=[["Cliente",c.azienda],["Referente",c.ref],["Email",c.mail],["Progetto",c.prog],["Stato",c.stato],["Budget",c.bud],["Note interne",c.note]];
  box.innerHTML='<p class="muted">Progetto n. '+esc(id)+'</p><table class="data">'+rows.map(function(r){return "<tr><th>"+r[0]+"</th><td>"+esc(r[1])+"</td></tr>";}).join("")+"</table>";
}

// ---- Webmail (enigma posta) ----
var MAILS=[
 {f:"Amministrazione Valmora <amministrazione@cantinevalmora.example>",s:"Fattura n. 2026/118",b:"Buongiorno Sara, in allegato la fattura per le etichette di settembre. Grazie e a presto.",p:false},
 {f:"Supporto Bussola <supporto@studiobussola-sicurezza.example>",s:"URGENTE: il tuo account scade oggi!",b:"Il tuo account verra' chiuso entro due ore. Per mantenerlo attivo accedi subito: http://accedi-subito.example/login e conferma la password.",p:true},
 {f:"Luca Ferrandi <luca.ferrandi@studiobussola.example>",s:"Riunione di giovedi'",b:"Ciao Sara, giovedi' alle 10 riunione per il piano editoriale. Porta le bozze dei post. Luca",p:false},
 {f:"Premi Fortunati <premi@promo-fortunato.example>",s:"Hai vinto un buono da 500 euro!",b:"Complimenti! Per ritirare il premio rispondi con nome, cognome e il numero della tua carta di credito.",p:true},
 {f:"Luca Ferrandi <luca.ferrandi@studiobussoIa.example>",s:"Cambio IBAN fornitore, fai subito il bonifico",b:"Sara, il fornitore ha cambiato IBAN. Fai oggi un bonifico da 3.400 euro al nuovo conto IT00 Y000 0000 0000 0000 0000 000 e non parlarne con nessuno, sono in riunione. Luca",p:true}
];
function mailInit(){
  var box=document.getElementById("mails");
  box.innerHTML=MAILS.map(function(m,i){return '<div class="card" style="margin-bottom:12px"><label style="margin:0 0 6px"><input type="checkbox" id="mc'+i+'"> <b>'+esc(m.s)+'</b></label><p style="font-size:14px">Da: '+esc(m.f)+'</p><p style="margin-top:6px;color:#0E1324">'+esc(m.b)+'</p></div>';}).join("");
}
function mailSend(){
  var ok=true;MAILS.forEach(function(m,i){if(document.getElementById("mc"+i).checked!==m.p)ok=false;});
  var out=document.getElementById("mm");
  if(ok){out.className="msg ok";out.innerHTML='Segnalazione ricevuta: erano proprio tentativi di phishing. Grazie! <span class="code">'+atob("UE9TVEEtMjE=")+'</span>';}
  else{out.className="msg err";out.textContent="Giulio risponde: “Controllati, qualcosa non torna.” (Una scelta è sbagliata o manca.)";}
}

// ---- Quaderno della missione ----
var PIANI=["Piano 1 · Riscaldamento","Piano 2 · Indagine","Piano 3 · Finale"];
var ENIGMI=[
 {id:"foto",pi:0,t:"1 · La foto del team",x:"Una foto pubblica racconta più di quanto sembra. Cosa porta con sé il file?",hs:["Una foto è più di quello che si vede.","Salvate il file originale dal sito: tasto destro, salva immagine con nome.","Proprietà > Dettagli (Windows) oppure Anteprima > Inspector (Mac): leggete autore, posizione e commenti."]},
 {id:"posta",pi:0,t:"2 · La posta sospetta",x:"Sara ha cinque email nella casella. Quali non dovrebbe aprire?",hs:["Guardate l’indirizzo del mittente, non solo il nome.","Fretta, premi, richieste di soldi o password: sono segnali. Controllate anche le lettere dei domini.","Sono tre su cinque: i messaggi 2, 4 e 5, contando dall’alto."]},
 {id:"ufficio",pi:0,t:"3 · L’ufficio nuovo",x:"Guardate bene le foto dell’agenzia. Contano i dettagli piccoli.",hs:["Cercate nei social dell’agenzia.","C’è una fotografia di una scrivania.","Ingrandite l’immagine: qualcosa è attaccato al monitor."]},
 {id:"domande",pi:0,t:"4 · Le domande segrete",x:"Il recupero password fa domande. Le risposte, forse, sono già pubbliche.",hs:["Le risposte sono nel sito, non servono tentativi a caso.","Leggete le schede del team e i post social.","Sara: post dell’8 giugno. Luca: la sua scheda. Giulio: post del 3 luglio."]},
 {id:"password",pi:1,t:"5 · La password",x:"L’area riservata è protetta. Quanto è forte, davvero?",hs:["Servono utente e password: cominciate dall’utente.","Le email del team hanno un formato preciso. E chi c’è sempre in ufficio con il titolare?","Utente nome.cognome del titolare; password: nome del suo cane e anno di nascita, minuscolo e attaccato."]},
 {id:"pagina",pi:1,t:"6 · Dietro la pagina",x:"Il sito ha una faccia che vedi e una che no.",hs:["Il sito ha una faccia che vedi e una che non vedi.","Ctrl+U (o F12) apre il codice di una pagina.","Cercate un commento nel codice del portfolio: indica un’altra pagina."]},
 {id:"clienti",pi:1,t:"7 · L’area clienti",x:"Ogni cliente vede il suo progetto. Solo il suo?",hs:["Guardate l’indirizzo nella barra mentre aprite l’area clienti.","Cosa succede se cambiate il numero finale?","Provate numeri vicini, anche più bassi, fino a trovare una cartella interna."]},
 {id:"cartella",pi:1,t:"8 · La cartella condivisa",x:"La newsletter promette una brochure. Cos’altro c’è?",hs:["Dove una agenzia “regala” materiali ai clienti?","Nelle news c’è una newsletter con una cartella.","Nella cartella non ci sono solo materiali pubblici: guardate le voci “interno”."]},
 {id:"cifrato",pi:2,t:"9 · Il messaggio cifrato",x:"Il titolare ha lasciato un messaggio in un posto riservato. Serve ricordarsi di Cesare.",hs:["Il messaggio sta in un’area protetta.","Dopo l’accesso all’area riservata, cercate il messaggio cifrato.","Cifrario di Cesare, spostamento 3: ogni lettera torna indietro di 3. Il codice finale è PAROLA-numero."]}
];
function qState(){return {c:store("sb_codes")||{},h:store("sb_hints")||{}};}
function quadernoRender(){
  var st=qState(),box=document.getElementById("piani"),html="",nC=0,nH=0;
  for(var p=0;p<3;p++){
    html+='<h2 class="piano">'+PIANI[p]+'</h2>';
    ENIGMI.filter(function(e){return e.pi===p;}).forEach(function(e){
      var done=!!st.c[e.id];if(done)nC++;
      var lv=st.h[e.id]||0;nH+=lv;
      html+='<div class="en'+(done?' done':'')+'"><h3>'+e.t+(done?' · risolto':'')+'</h3><p>'+e.x+'</p>';
      if(!done)html+='<div class="row"><input type="text" id="in_'+e.id+'" placeholder="CODICE-00" autocomplete="off"><button onclick="quadernoCheck(\''+e.id+'\')">Controlla</button>'+(lv<3?'<button class="ghost" onclick="quadernoHint(\''+e.id+'\')">Serve un aiuto (−1 punto)</button>':'')+'</div><p class="msg" id="ms_'+e.id+'" style="margin:8px 0 0"></p>';
      for(var i=0;i<lv;i++)html+='<div class="hint">Aiuto '+(i+1)+': '+e.hs[i]+'</div>';
      html+='</div>';
    });
  }
  box.innerHTML=html;
  document.getElementById("sc").textContent=nC;document.getElementById("sa").textContent=nH;document.getElementById("sp").textContent=Math.max(0,nC-nH);
  document.getElementById("finale").style.display=nC===9?"block":"none";
}
function quadernoInit(){quadernoRender();}
function quadernoCheck(id){
  var v=norm(document.getElementById("in_"+id).value).replace(/\s/g,"");
  var m=document.getElementById("ms_"+id);
  if(h(v)===HASH[id]){var s=qState();s.c[id]=true;store("sb_codes",s.c);quadernoRender();}
  else{m.className="msg err";m.textContent="Non è il codice giusto. Riprovate.";}
}
function quadernoHint(id){
  var s=qState();s.h[id]=Math.min(3,(s.h[id]||0)+1);store("sb_hints",s.h);quadernoRender();
}
function quadernoReset(){if(confirm("Cancellare i progressi di questo browser?")){store("sb_codes",{});store("sb_hints",{});quadernoRender();}}

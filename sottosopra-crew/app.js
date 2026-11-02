// Sottosopra Crew - sito didattico. Tutti i dati sono inventati.
// h() non e' crittografia: serve solo a non scrivere le risposte in chiaro.
function h(s){var a=0xdeadbeef,b=0x41c6ce57;for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677);}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return (4294967296*(2097151&b)+(a>>>0)).toString(16);}
var HASH={"login": "1a7d46cffe9b51", "rec": "1bda3a463e84c0", "foto": "811c07605ce86", "posta": "846f6b13db01", "ufficio": "1edcd183b44354", "domande": "1d6c8977027d5f", "password": "13a05c1b82320d", "pagina": "13fc566e4c9cbd", "clienti": "11230cba8d5ace", "cifrato": "e3b538298e8bb"};
function norm(s){return (s||"").trim().toLowerCase();}
// nz: minuscolo, senza accenti, senza spazi/segni (cosi' "Zevio", " zevio " e "ZEVIO" valgono uguale)
function nz(s){return (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"");}
function d64(s){return decodeURIComponent(escape(atob(s)));}
function store(k,v){try{if(v===undefined){return JSON.parse(localStorage.getItem(k)||"null");}localStorage.setItem(k,JSON.stringify(v));}catch(e){return null;}}

// ---- Area riservata ----
function intranetLogin(ev){
  ev.preventDefault();
  var u=norm(document.getElementById("u").value),p=norm(document.getElementById("p").value);
  var m=document.getElementById("m");
  if(h(u+":"+p)===HASH.login){document.getElementById("loginbox").style.display="none";var bb=document.getElementById("bacheca");bb.innerHTML=d64("PGgyPkJhY2hlY2EgaW50ZXJuYTwvaDI+CjxkaXYgY2xhc3M9ImNhcmQiPjxoMz5BdnZpc28gYSB0dXR0byBpbCBjcmV3PC9oMz48cD5SaWNvcmRhdGV2aSBkaSBhZ2dpb3JuYXJlIGxlIGxpc3RlIGRlaSBmYW4gZW50cm8gdmVuZXJkw6wuIEFjY2Vzc28gYWwgc2VydmVyIGRlaSBmaWxlIGUgYWxsbyBzaG9wOiBzdGVzc2EgcGFzc3dvcmQgZGkgc2VtcHJlLjwvcD48cCBzdHlsZT0ibWFyZ2luLXRvcDoxNHB4Ij5Db2RpY2UgaW50ZXJubzogPHNwYW4gY2xhc3M9ImNvZGUiPkNISUFWRS01ODwvc3Bhbj48L3A+PC9kaXY+CjxkaXYgY2xhc3M9ImNhcmQiIHN0eWxlPSJtYXJnaW4tdG9wOjE2cHgiPjxoMz5NZXNzYWdnaW8gZGkgTGVvIChjaWZyYXRvKTwvaDM+PHA+TG8gbGFzY2lvIHF1aSBjaWZyYXRvLCBjb21lIGZhY2V2YW1vIGFsbGUgbWVkaWUgY29uIGlsIGNpZnJhcmlvIGRpIENlc2FyZTogc3Bvc3RhbWVudG8gMy48L3A+PHAgc3R5bGU9Im1hcmdpbi10b3A6MTJweDtmb250LWZhbWlseTpDb25zb2xhcyxNZW5sbyxtb25vc3BhY2U7Zm9udC1zaXplOjE4cHgiPkZSR0xGSCBWTFNEVUxSIFdVRFdXTFFSIFFSWURRV0Q8L3A+PC9kaXY+");bb.style.display="block";}
  else{m.className="msg err";m.textContent="Credenziali non valide. Riprova.";}
  return false;
}
function recupero(ev){
  ev.preventDefault();
  var a=[1,2,3].map(function(i){return nz(document.getElementById("q"+i).value);}).join("|");
  var m=document.getElementById("rm");
  if(h(a)===HASH.rec){m.className="msg ok";m.innerHTML='Risposte corrette. Ti abbiamo inviato una mail di conferma. (Demo: codice di conferma <span class="code">'+d64("U0VHUkVUTy00NA==")+'</span>)';}
  else{m.className="msg err";m.textContent="Una o più risposte non sono corrette.";}
  return false;
}

// ---- Ordini dello shop (area "Il tuo ordine") ----
var ORDINI={
 "100":{nome:"Archivio interno ordini",mail:"dario.sala@sottosopracrew.example",prod:"Tutti gli ordini e i contatti dei fan",stato:"Riservato",tot:"-",note:"Cartella interna visibile per errore dal link dell'ordine. Codice archivio: "+d64("T1JESU5FLTE0")},
 "101":{nome:"Giada Rizzi",mail:"giada.rizzi@posta.example",prod:"Felpa Sottosopra M + adesivi",stato:"Spedito",tot:"38 euro",note:"Spedizione: via Mazzini 4, Zevio. Carta salvata per errore: 0000 0000 0000 0000 (numero inventato)."},
 "102":{nome:"Tommaso Bellini",mail:"tommaso.b@posta.example",prod:"Maglietta nera L",stato:"In preparazione",tot:"20 euro",note:"Ha 15 anni: paga la mamma, nel file c'è anche il numero di telefono della mamma."},
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
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
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
  box.innerHTML=MAILS.map(function(m,i){return '<div class="card" style="margin-bottom:12px"><label style="margin:0 0 6px"><input type="checkbox" id="mc'+i+'"> <b>'+(i+1)+' · '+esc(m.s)+'</b></label><p style="font-size:14px">Da: '+esc(m.f)+'</p><p style="margin-top:6px;color:#1A1033">'+esc(m.b)+'</p></div>';}).join("");
}
function mailSend(){
  var ok=true;MAILS.forEach(function(m,i){if(document.getElementById("mc"+i).checked!==m.p)ok=false;});
  var out=document.getElementById("mm");
  if(ok){out.className="msg ok";out.innerHTML='Segnalazione ricevuta: erano proprio tentativi di truffa. Grazie! <span class="code">'+d64("RklMVFJPLTIx")+'</span>';}
  else{out.className="msg err";out.textContent="Dario risponde: “Controllati, qualcosa non torna.” (Una scelta è sbagliata o manca.)";}
}

// ---- Quaderno della missione ----
var PIANI=["Piano 1 · Riscaldamento","Piano 2 · Indagine","Piano 3 · Finale"];
var ENIGMI=[
 {id:"foto",pi:0,t:"1 · La foto del gruppo",x:"La foto di gruppo nella pagina “Chi siamo” sembra innocente. Ma cosa porta con sé il file?",hs:[
   "Una foto è più di quello che si vede: dentro il file ci sono anche delle informazioni nascoste.",
   "Servono i “dettagli” del file. Su PC: tasto destro sul file salvato &gt; Proprietà &gt; Dettagli. Su tablet o se non riuscite: aprite la <a href=\"strumenti.html#lente\" target=\"_blank\">Lente per i file</a> (scheda guida, passo-passo).",
   "Nei dettagli cercate il commento: contiene una parola in maiuscolo con un numero. Quello è il codice."]},
 {id:"posta",pi:0,t:"2 · I messaggi sospetti",x:"Marta ha cinque messaggi nella casella del collettivo. Quali non dovrebbe aprire?",hs:[
   "La casella si chiama “Webmail”: la trovate in fondo a ogni pagina del sito. Leggete bene i mittenti, non solo i nomi.",
   "Fretta, premi, richieste di soldi, di codici o di password: sono segnali di allarme. Controllate anche le lettere dell’indirizzo (una “o” può essere uno zero!).",
   "Sono tre su cinque: i messaggi 2, 4 e 5, contando dall’alto."]},
 {id:"ufficio",pi:0,t:"3 · La regia live",x:"Guardate bene le foto del collettivo. Contano i dettagli piccoli.",hs:[
   "Cercate nei social del collettivo.",
   "C’è una foto della regia live, pubblicata il 20 aprile.",
   "Ingrandite l’immagine: qualcosa è attaccato al monitor."]},
 {id:"domande",pi:1,t:"4 · Le domande segrete",x:"Il recupero password fa delle domande. Le risposte, forse, sono già pubbliche.",hs:[
   "Le risposte sono nel sito, non servono tentativi a caso. Il recupero password si trova nella pagina “Area riservata”.",
   "Leggete le schede del collettivo e i post social: sono tre risposte, una per persona.",
   "Marta: post dell’8 giugno. Leo: la sua scheda in “Chi siamo”. Dario: post del 3 luglio."]},
 {id:"password",pi:1,t:"5 · La password",x:"L’area riservata è protetta da utente e password. Quanto è forte, davvero?",hs:[
   "Servono utente e password: cominciate dall’utente. Il recupero password dell’enigma 4 dice di chi è l’account.",
   "Le email del collettivo hanno un formato preciso (nome.cognome). E chi viene sempre alle prove con Leo?",
   "Utente: nome.cognome di Leo. Password: nome del suo cane + anno di nascita, tutto minuscolo e attaccato."]},
 {id:"pagina",pi:1,t:"6 · Il tuo ordine",x:"Ogni fan può seguire il suo ordine online. Ma vede solo il suo?",hs:[
   "Guardate l’indirizzo nella barra mentre aprite “Il tuo ordine”: c’è un numero alla fine.",
   "Cosa succede se cambiate quel numero? Se serve, leggete la <a href=\"strumenti.html#indirizzo\" target=\"_blank\">scheda guida sugli indirizzi web</a>.",
   "Provate numeri vicini, anche più bassi, fino a trovare un archivio interno."]},
 {id:"clienti",pi:2,t:"7 · La cartella condivisa",x:"La newsletter promette locandina e scaletta. Cos’altro c’è nella cartella?",hs:[
   "Dove un gruppo “regala” materiali ai fan?",
   "Nelle news c’è una newsletter con il link a una cartella: apritela.",
   "Nella cartella non ci sono solo materiali pubblici: guardate le voci “interno”."]},
 {id:"cifrato",pi:2,t:"8 · Il messaggio cifrato",x:"Leo ha lasciato un messaggio in un posto riservato. Per leggerlo serve ricordarsi di Cesare.",hs:[
   "Il messaggio sta in un’area protetta: serve il lavoro dell’enigma 5.",
   "Dopo l’accesso all’area riservata, cercate il messaggio cifrato. Per decifrarlo c’è il <a href=\"strumenti.html#cesare\" target=\"_blank\">Disco di Cesare</a> (scheda guida).",
   "Cifrario di Cesare, spostamento 3: ogni lettera torna indietro di 3. Il codice finale è PAROLA-numero."]}
];
var TOT=ENIGMI.length;
function qState(){return {c:store("ss_codes")||{},h:store("ss_hints")||{}};}
function quadernoRender(){
  var st=qState(),box=document.getElementById("piani"),html="",nC=0,nH=0;
  for(var p=0;p<3;p++){
    html+='<h2 class="piano">'+PIANI[p]+'</h2>';
    ENIGMI.filter(function(e){return e.pi===p;}).forEach(function(e){
      var done=!!st.c[e.id];if(done)nC++;
      var lv=st.h[e.id]||0;nH+=lv;
      html+='<div class="en'+(done?' done':'')+'"><h3>'+e.t+(done?' · risolto':'')+'</h3><p>'+e.x+'</p>';
      if(!done)html+='<div class="row"><input type="text" id="in_'+e.id+'" placeholder="CODICE-00" autocomplete="off" onkeydown="if(event.key===\'Enter\'){quadernoCheck(\''+e.id+'\')}"><button onclick="quadernoCheck(\''+e.id+'\')">Controlla</button>'+(lv<3?'<button class="ghost" onclick="quadernoHint(\''+e.id+'\')">Serve un aiuto (−1 punto)</button>':'')+'</div><p class="msg" id="ms_'+e.id+'" style="margin:8px 0 0"></p>';
      for(var i=0;i<lv;i++)html+='<div class="hint">Aiuto '+(i+1)+': '+e.hs[i]+'</div>';
      html+='</div>';
    });
  }
  box.innerHTML=html;
  document.getElementById("sc").textContent=nC;document.getElementById("sa").textContent=nH;document.getElementById("sp").textContent=Math.max(0,nC-nH);
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

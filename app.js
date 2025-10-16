// ========== UTILS ==========
function shuffle(a){ for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a; }
function rand(n){ return Math.floor(Math.random()*n); }

// Toast
function getToastHost(){ let host=document.getElementById("toast"); if(!host){ host=document.createElement("div"); host.id="toast"; document.body.appendChild(host);} return host; }
function showToast(message, variant="info", ttlMs=2600){
  const host=getToastHost(); const icons={info:"ℹ️",warn:"⚠️",ok:"✅"};
  const el=document.createElement("div");
  el.className=`toast ${variant}`;
  el.innerHTML=`<span class="icon">${icons[variant]||"ℹ️"}</span><span>${message}</span>`;
  host.appendChild(el); setTimeout(()=>el.remove(), ttlMs+320);
}
function on(id, event, handler){ const el=document.getElementById(id); if(el) el.addEventListener(event,(e)=>{ handler(e); e.target.blur(); }); }

// ========== TEMA ACESSÍVEL ==========
const ACCESSIBLE_KEY = "theme_accessible";
let accessibleLinkEl = null;

function ensureAccessibleCSS(){
  if (accessibleLinkEl) return;
  accessibleLinkEl = document.createElement("link");
  accessibleLinkEl.rel = "stylesheet";
  accessibleLinkEl.href = "style.accessible.css";
  document.head.appendChild(accessibleLinkEl);
}
function applyAccessibleTheme(on){
  if (on) ensureAccessibleCSS();
  document.documentElement.classList.toggle("accessible", !!on);
  localStorage.setItem(ACCESSIBLE_KEY, on ? "1" : "0");
  const btn = document.getElementById("btn-toggle-theme");
  if (btn){
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.innerHTML = on
      ? `<span class="pill">⬛</span>Desativar tema acessível`
      : `<span class="pill">🟣</span>Ativar tema acessível`;
  }
}
applyAccessibleTheme(localStorage.getItem(ACCESSIBLE_KEY) === "1");

// ========== FILA ATIVIDADES ==========
let filaAtividades = [];
function buildFilaAtividades(){
  filaAtividades = Array.isArray(atividadesEI) && atividadesEI.length ? shuffle([...atividadesEI]) : [];
}
function nextAtividade(){ return filaAtividades.length ? filaAtividades.pop() : null; }
function restoreAtividade(item){
  if (!filaAtividades.some(x => x.nome === item.nome)) {
    const pos = rand(filaAtividades.length + 1);
    filaAtividades.splice(pos, 0, item);
  }
}

// ========== FILAS OBJETIVOS ==========
let filasCampo; let filaGlobal;
function buildFilasCampo(){ filasCampo = camposExperiencia.map(c => shuffle([...c.objetivos])); }
function buildFilaGlobal(){ const todos=[]; camposExperiencia.forEach((c,campoIndex)=>{ c.objetivos.forEach(obj=>todos.push({campoIndex,codigo:obj.codigo,objetivo:obj})) }); filaGlobal = shuffle(todos); }
function removeFromFilaGlobal(codigo){ const i=filaGlobal.findIndex(x=>x.codigo===codigo); if(i>=0) filaGlobal.splice(i,1); }
function removeFromFilaCampo(i,codigo){ const f=filasCampo[i]; const p=f.findIndex(x=>x.codigo===codigo); if(p>=0) f.splice(p,1); }
function insertRandomInFilaGlobal(item){ if(filaGlobal.some(x=>x.codigo===item.codigo)) return; const pos=rand(filaGlobal.length+1); filaGlobal.splice(pos,0,item); }
function insertRandomInFilaCampo(i,objetivo){ if(filasCampo[i].some(x=>x.codigo===objetivo.codigo)) return; const pos=rand(filasCampo[i].length+1); filasCampo[i].splice(pos,0,objetivo); }
function nextDoCampo(i){ if(filasCampo[i].length===0) return null; const objetivo=filasCampo[i].pop(); removeFromFilaGlobal(objetivo.codigo); return objetivo; }
function nextDoGlobal(){ if(filaGlobal.length===0) return null; const item=filaGlobal.pop(); removeFromFilaCampo(item.campoIndex,item.codigo); return {campoIndex:item.campoIndex,objetivo:item.objetivo}; }

// ========== FILAS RC (Princípios / Habilidades) ==========
let filaRC=[]; function buildFilaRC(){ filaRC = Array.isArray(rcPrincipios)&&rcPrincipios.length ? shuffle([...rcPrincipios]) : []; }
function nextRC(){ return filaRC.length ? filaRC.pop() : null; }
function restoreRC(item){ if(!filaRC.some(x=>x.nome===item.nome)){ const pos=rand(filaRC.length+1); filaRC.splice(pos,0,item); } }

let filaRCHab=[]; function buildFilaRCHab(){ filaRCHab = Array.isArray(rcHabilidades)&&rcHabilidades.length ? shuffle([...rcHabilidades]) : []; }
function nextRCHab(){ return filaRCHab.length ? filaRCHab.pop() : null; }
function restoreRCHab(item){ if(!filaRCHab.some(x=>x.nome===item.nome)){ const pos=rand(filaRCHab.length+1); filaRCHab.splice(pos,0,item); } }

// ========== RENDER ==========
const resultsAtvEl   = document.getElementById("results-atividades");
const resultsEl      = document.getElementById("results");
const resultsRcEl    = document.getElementById("results-rc");
const resultsRCHabEl = document.getElementById("results-rc-hab");

function renderResultadoAtividade(atividade){
  const card=document.createElement("article");
  card.className="card";
  card.style.color = getComputedStyle(document.documentElement).getPropertyValue("--cor-ativ").trim();
  card.dataset.type="ativ";
  card.dataset.nome=atividade.nome;
  card.innerHTML = `
    <button class="close" aria-label="Remover">×</button>
    <div class="campo"><span class="pill ativ">ATV</span> Atividade — ${atividade.nome}</div>
    <div class="codigo">—</div>
    <div class="desc">${atividade.descricao}</div>`;
  resultsAtvEl.prepend(card);
}

function renderResultado(campo, objetivo){
  const card=document.createElement("article");
  card.className="card"; card.style.color=campo.cor;
  card.dataset.type="obj"; card.dataset.campoIndex=String(camposExperiencia.indexOf(campo)); card.dataset.codigo=objetivo.codigo;
  card.innerHTML = `
    <button class="close" aria-label="Remover">×</button>
    <div class="campo"><span class="pill ${campo.classePill}">${campo.abreviacao}</span> ${campo.nome}</div>
    <div class="codigo">${objetivo.codigo}</div>
    <div class="desc">${objetivo.descricao}</div>`;
  resultsEl.prepend(card);
}
function renderResultadoRC(principio){
  const card=document.createElement("article");
  card.className="card"; card.style.color=getComputedStyle(document.documentElement).getPropertyValue("--cor-rc").trim();
  card.dataset.type="rcp"; card.dataset.nome=principio.nome;
  card.innerHTML = `
    <button class="close" aria-label="Remover">×</button>
    <div class="campo"><span class="pill rc">RC</span> Princípio — ${principio.nome}</div>
    <div class="codigo">—</div>
    <div class="desc">${principio.definicao}</div>`;
  resultsRcEl.prepend(card);
}
function renderResultadoRCHab(hab){
  const card=document.createElement("article");
  card.className="card"; card.style.color=getComputedStyle(document.documentElement).getPropertyValue("--cor-rc-hab").trim();
  card.dataset.type="rch"; card.dataset.nome=hab.nome;
  card.innerHTML = `
    <button class="close" aria-label="Remover">×</button>
    <div class="campo"><span class="pill rch">RC</span> Habilidade — ${hab.nome}</div>
    <div class="codigo">—</div>
    <div class="desc">${hab.definicao}</div>`;
  resultsRCHabEl.prepend(card);
}

// ========== AÇÕES (SORTEIOS) ==========
function sortearAtividade(){
  const it = nextAtividade();
  if(!it){ showToast("Todas as atividades já foram sorteadas.","warn"); return; }
  renderResultadoAtividade(it);
}
function sortearDeCampo(i){
  const campo=camposExperiencia[i]; const objetivo=nextDoCampo(i);
  if(!objetivo){ showToast(`Sem objetivos restantes em “${campo.nome}”.`,"warn"); return; }
  renderResultado(campo,objetivo);
}
function sortearDeQualquerCampo(){
  const item=nextDoGlobal();
  if(!item){ showToast("Todos os objetivos de todos os campos já foram sorteados.","warn"); return; }
  const campo=camposExperiencia[item.campoIndex]; renderResultado(campo,item.objetivo);
}
function sortearPrincipioRC(){
  const it=nextRC(); if(!it){ showToast("Todos os princípios do RC já foram sorteados.","warn"); return; }
  renderResultadoRC(it);
}
function sortearHabilidadeRC(){
  const it=nextRCHab(); if(!it){ showToast("Todas as habilidades do RC já foram sorteadas.","warn"); return; }
  renderResultadoRCHab(it);
}

// ========== FECHAR (X) => DEVOLVER À FILA ==========
function restoreFromCard(card){
  const type=card.dataset.type;
  if (type==="ativ"){
    const nome=card.dataset.nome;
    const item=atividadesEI.find(a=>a.nome===nome);
    if(item){ restoreAtividade(item); showToast(`Atividade “${nome}” devolvida à fila.`,"ok",1600); }
  } else if (type==="obj"){
    const campoIndex=parseInt(card.dataset.campoIndex,10);
    const codigo=card.dataset.codigo;
    const campo=camposExperiencia[campoIndex];
    const objetivo=campo.objetivos.find(o=>o.codigo===codigo);
    if (objetivo){
      insertRandomInFilaCampo(campoIndex, objetivo);
      insertRandomInFilaGlobal({campoIndex, codigo:objetivo.codigo, objetivo});
      showToast(`Objetivo ${codigo} devolvido à fila.`,"ok",1600);
    }
  } else if (type==="rcp"){
    const nome=card.dataset.nome;
    const item=rcPrincipios.find(p=>p.nome===nome);
    if (item){ restoreRC(item); showToast(`Princípio “${nome}” devolvido à fila.`,"ok",1600); }
  } else if (type==="rch"){
    const nome=card.dataset.nome;
    const item=rcHabilidades.find(h=>h.nome===nome);
    if (item){ restoreRCHab(item); showToast(`Habilidade “${nome}” devolvida à fila.`,"ok",1600); }
  }
}
[resultsAtvEl, resultsEl, resultsRcEl, resultsRCHabEl].forEach(container=>{
  container.addEventListener("click", (e)=>{
    const btn=e.target.closest(".close"); if(!btn) return;
    const card=btn.closest(".card"); restoreFromCard(card); card.remove();
  });
});

// ========== CONTROLES ==========
on("btn-atividade-any","click",()=>{ sortearAtividade(); });
on("btn-atividade-reset","click",()=>{ buildFilaAtividades(); resultsAtvEl.innerHTML=""; showToast("Atividades reiniciadas.","ok",1600); });

on("btn-any","click",()=>{ sortearDeQualquerCampo(); });
document.querySelectorAll("button[data-campo]").forEach(btn=>{
  btn.addEventListener("click",()=>{ const idx=parseInt(btn.getAttribute("data-campo"),10); sortearDeCampo(idx); btn.blur(); });
});
on("btn-clear","click",()=>{ resultsEl.innerHTML=""; buildFilasCampo(); buildFilaGlobal(); showToast("Objetivos reiniciados.","ok",1600); });

on("btn-rc-any","click",()=>{ sortearPrincipioRC(); });
on("btn-rc-reset","click",()=>{ buildFilaRC(); resultsRcEl.innerHTML=""; showToast("Princípios (RC) reiniciados.","ok",1600); });

on("btn-rc-hab-any","click",()=>{ sortearHabilidadeRC(); });
on("btn-rc-hab-reset","click",()=>{ buildFilaRCHab(); resultsRCHabEl.innerHTML=""; showToast("Habilidades (RC) reiniciadas.","ok",1600); });

// ===== AÇÕES GERAIS =====
function coletarResultadosComoTexto(){
  const blocos=[];

  // Atividades
  const atvCards=[...resultsAtvEl.querySelectorAll(".card")].reverse();
  if(atvCards.length){
    blocos.push("=== ATIVIDADES ===");
    atvCards.forEach(c=>{
      const titulo=c.querySelector(".campo")?.textContent.trim()??"—";
      const desc=c.querySelector(".desc")?.textContent.trim()??"—";
      blocos.push(`${titulo}\n— ${desc}`);
    });
  }

  // Objetivos
  const objCards=[...resultsEl.querySelectorAll(".card")].reverse();
  if(objCards.length){
    blocos.push("\n=== OBJETIVOS BNCC ===");
    objCards.forEach(c=>{
      const campo=c.querySelector(".campo")?.textContent.trim()??"—";
      const cod=c.querySelector(".codigo")?.textContent.trim()??"—";
      const desc=c.querySelector(".desc")?.textContent.trim()??"—";
      blocos.push(`${campo}\n${cod} — ${desc}`);
    });
  }

  // Princípios RC
  const rcCards=[...resultsRcEl.querySelectorAll(".card")].reverse();
  if(rcCards.length){
    blocos.push("\n=== PRINCÍPIOS RC ===");
    rcCards.forEach(c=>{
      const t=c.querySelector(".campo")?.textContent.trim()??"—";
      const d=c.querySelector(".desc")?.textContent.trim()??"—";
      blocos.push(`${t}\n— ${d}`);
    });
  }

  // Habilidades RC
  const habCards=[...resultsRCHabEl.querySelectorAll(".card")].reverse();
  if(habCards.length){
    blocos.push("\n=== HABILIDADES RC ===");
    habCards.forEach(c=>{
      const t=c.querySelector(".campo")?.textContent.trim()??"—";
      const d=c.querySelector(".desc")?.textContent.trim()??"—";
      blocos.push(`${t}\n— ${d}`);
    });
  }

  return blocos.join("\n\n").trim() || "Nenhum resultado.";
}

// Abrir resultados (mesmo tema)
on("btn-open-results","click",()=>{
  function sectionHTML(container){
    const clone=container.cloneNode(true); clone.querySelectorAll(".close").forEach(b=>b.remove());
    return `<section class="panel" style="margin-top:18px"><div class="controls" aria-hidden="true" style="display:none"></div><section class="results">${clone.innerHTML}</section></section>`;
  }
  const htmlAtv=document.getElementById("results-atividades");
  const htmlObj=document.getElementById("results");
  const htmlRC=document.getElementById("results-rc");
  const htmlRH=document.getElementById("results-rc-hab");

  const baseCSS = new URL("style.css", location.href).href;
  const accCSS  = new URL("style.accessible.css", location.href).href;
  const isAccessible = document.documentElement.classList.contains("accessible");

  const w=window.open("","_blank");
  if(w){
    w.document.write(`<!doctype html>
<html lang="pt-BR" class="${isAccessible ? "accessible" : ""}">
<head>
  <meta charset="utf-8">
  <title>Resultados</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="${baseCSS}">
  ${isAccessible ? `<link rel="stylesheet" href="${accCSS}">` : ""}
  <style>
    header{padding:28px 20px 8px;text-align:center}
    header h1{margin:0 0 6px;font-size:clamp(1.2rem,2.5vw,1.6rem);font-weight:700;letter-spacing:.2px}
    header p{margin:0;color:var(--muted);font-size:.95rem}
    .wrap{max-width:1050px;margin:18px auto 28px;padding:0 16px 24px}
    .panel .controls{display:none!important}
    .card .close{display:none!important}
  </style>
</head>
<body>
  <header>
    <h1>Resultados</h1>
    <p>Exportados desta sessão</p>
  </header>
  <div class="wrap">
    ${sectionHTML(htmlAtv)}
    ${sectionHTML(htmlObj)}
    ${sectionHTML(htmlRC)}
    ${sectionHTML(htmlRH)}
  </div>
</body>
</html>`);
    w.document.close();
  }
});

// Baixar tudo .txt
on("btn-download-all","click",()=>{
  const texto=coletarResultadosComoTexto();
  const blob=new Blob([texto],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob); const a=document.createElement("a");
  a.href=url; a.download="resultados_atividades_bncc_rc.txt"; a.click(); URL.revokeObjectURL(url);
  showToast("Arquivo com todos os resultados baixado.","ok",1800);
});

// Reset geral
on("btn-reset-all","click",()=>{
  resultsAtvEl.innerHTML=""; resultsEl.innerHTML=""; resultsRcEl.innerHTML=""; resultsRCHabEl.innerHTML="";
  buildFilaAtividades(); buildFilasCampo(); buildFilaGlobal(); buildFilaRC(); buildFilaRCHab();
  showToast("Tudo resetado: atividades, objetivos, princípios e habilidades.","ok",2000);
});

// Alternar tema acessível
on("btn-toggle-theme","click",()=>{
  const isOn = !document.documentElement.classList.contains("accessible");
  applyAccessibleTheme(isOn);
  showToast(isOn ? "Tema acessível ativado." : "Tema acessível desativado.","ok",1600);
});

// ========== INICIALIZAÇÃO ==========
buildFilaAtividades();
buildFilasCampo(); buildFilaGlobal();
buildFilaRC(); buildFilaRCHab();

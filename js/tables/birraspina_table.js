
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.birraSpinaData;
  let table = document.getElementById("birraSpinaTable")
  let innerHtml='<th class="th_nome">BIRRA</th><th class="th_prezzo">Alla Spina</th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome">${data[i].Nome}</td>`
    innerHtml+=`<td class="td_prezzo">${data[i].Prezzo}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

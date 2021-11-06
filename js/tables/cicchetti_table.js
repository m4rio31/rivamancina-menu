
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.cicchettiData;
  let table = document.getElementById("cicchettiTable")
  let innerHtml='<th class="th_nome">CICCHETTI</th><th class="th_prezzo"></th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome">${data[i].Nome}</td>`
    innerHtml+=`<td class="td_prezzo">${data[i].Prezzo}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

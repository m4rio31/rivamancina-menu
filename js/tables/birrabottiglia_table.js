
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.birraBottigliaData;
  let table = document.getElementById("birraBottigliaTable")
  let innerHtml='<th class="th_nome">BIRRA</th><th class="th_prezzo">In Bottiglia</th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome">${data[i].Nome}</td>`
    innerHtml+=`<td class="td_prezzo">${data[i].Prezzo}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

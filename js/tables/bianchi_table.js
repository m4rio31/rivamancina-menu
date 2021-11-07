
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.bianchiData;
  let table = document.getElementById("bianchiTable")
  let innerHtml='<th class="th_nome">BIANCHI</th><th class="th_prezzo">Al Calice</th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome"><div class="td_up">${data[i].Nome}</div><div class="td_down">${data[i].Descrizione}</div></td>`
    innerHtml+=`<td class="td_prezzo">${data[i].Prezzo}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

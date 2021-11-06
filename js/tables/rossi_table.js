
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.rossiData;
  let table = document.getElementById("rossiTable")
  let innerHtml='<th class="th_nome">ROSSI</th><th class="th_prezzo">Al Calice</th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome">${data[i].Nome}</td>`
    innerHtml+=`<td class="td_prezzo">${data[i].Prezzo}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

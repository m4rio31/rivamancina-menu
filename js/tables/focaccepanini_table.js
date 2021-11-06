
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.focaccePaniniData;
  let table = document.getElementById("focaccePaniniTable")
  let innerHtml='<th class="th_nome">FOCACCE E PANINI</th><th class="th_prezzo"></th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome">${data[i].Nome}</td>`
    innerHtml+=`<td class="td_prezzo">${data[i].Prezzo}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})


document.addEventListener("DOMContentLoaded",()=>{
  let data=window.focaccePaniniData;
  let table = document.getElementById("focaccePaniniTable")
  let innerHtml='<th class="th_nome">FOCACCE E PANINI</th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome">${data[i].Nome}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

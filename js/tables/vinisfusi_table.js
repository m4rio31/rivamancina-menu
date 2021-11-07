
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.viniSfusiData;
  let table = document.getElementById("viniSfusiTable")
  let innerHtml='<th class="th_nome">VINI SFUSI</th><th class="th_prezzo"></th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome"><div class="td_up">${data[i].Nome}</div><div class="td_down">${data[i].Descrizione}</div></td>`
    innerHtml+=`<td class="td_prezzo"><div class="td_var">${data[i].Bicchiere}</div><div class="td_var">${data[i].MezzoLitro}</div><div class="td_var">${data[i].Litro}</div></td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

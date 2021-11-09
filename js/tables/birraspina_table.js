
document.addEventListener("DOMContentLoaded",()=>{
  let data=window.birraSpinaData;
  let table = document.getElementById("birraSpinaTable")
  let innerHtml='<th class="th_nome">BIRRA</th><th class="th_prezzo">Alla Spina</th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome"><div class="td_up">${data[i].Nome}</div><div class="td_down">${data[i].Descrizione}</div></td>`
    innerHtml+=`<td class="td_prezzo"><div class="td_var">${data[i].Piccola}</div><div class="td_var">${data[i].Media}</div></td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

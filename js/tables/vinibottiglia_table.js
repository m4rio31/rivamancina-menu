document.addEventListener("DOMContentLoaded",()=>{
  let data=window.viniBottigliaData;
  let table = document.getElementById("viniBottigliaTable")
  let innerHtml='<th class="th_nome">VINI</th><th class="th_prezzo">In Bottiglia</th>'
  for(let i=0;i<data.length;i++){
    innerHtml+="<tr>"
    innerHtml+=`<td class="td_nome"><div class="td_up">${data[i].Nome}</div><div class="td_down">${data[i].Descrizione}</div></td>`    
    innerHtml+=`<td class="td_prezzo">${data[i].Prezzo}</td>`
    innerHtml+="</tr>"
  }
  table.innerHTML=innerHtml
})

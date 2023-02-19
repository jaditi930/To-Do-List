let newtask=document.getElementById("title")
let newdesc=document.getElementById("desc")
let submit_btn=document.getElementById("submit")
submit_btn.addEventListener("click",()=>{
    if(newtask.value=="")
    return;
let li=document.getElementById("tbody");
let row=document.createElement("tr")
let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")
let td4=document.createElement("td")
let remove_btn=document.createElement("i")
remove_btn.classList.add("fa")
remove_btn.classList.add("fa-times")

remove_btn.classList.add("delete")
remove_btn.addEventListener("click",removeItem);
remove_btn.classList.add("btn-class")
td4.appendChild(remove_btn);
let cbx=document.createElement("input")
cbx.type="checkbox"
cbx.addEventListener("click",strikeText)
td3.appendChild(cbx);
td2.innerText=newdesc.value;
td1.innerText=newtask.value;
row.appendChild(td3);
row.appendChild(td1);
row.appendChild(td2);
row.appendChild(td4);

console.log(cbx.value)
li.appendChild(row);
newtask.value="";
})
function reset_list(e)
{
    document.getElementById("tbody").innerHTML=""
}
function removeItem(e)
{
    e.target.parentElement.parentElement.style.display="none"
}
function strikeText(e)
{   
    if(e.target.checked)
    console.log("crossed")
    let childNodes=e.target.parentElement.parentElement.children;
    for(let i=1;i<childNodes.length-1;i++)
    {
        let text=childNodes[i].innerText;
        childNodes[i].innerHTML=`<s>${text}</s>`
    }
    childNodes[0].removeEventListener("click",strikeText)
    childNodes[0].firstChild.disabled=true;
}
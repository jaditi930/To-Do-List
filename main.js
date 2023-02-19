let submit_btn=document.getElementById("submit")
let sno=1;
submit_btn.addEventListener("click",(e)=>{
e.preventDefault();
let newtask=document.getElementById("title")
let newdesc=document.getElementById("desc")

let li=document.getElementById("tbody");
li.innerHTML+=`<tr>
<td id="${sno}">${sno}.</td>
<td><input type="checkbox" id="c-${sno}" onclick="strikeText(${sno})"></td>
<td id="task-${sno}">${newtask.value}</td>
<td id="desc-${sno}">${newdesc.value}</td>
<td><button class="btn btn-primary" id="b-${sno}" onclick="removeItem(${sno})">Delete item</button></td>
</tr>`
document.getElementById("title").value=""
document.getElementById("desc").value=""
sno++;

})
document.getElementById("reset").addEventListener("click",reset_list);
function reset_list()
{
    sno=1;
    document.getElementById("tbody").innerHTML="";
}
function removeItem(t_id)
{
    let btn = document.getElementById("b-"+t_id)
    btn.parentElement.parentElement.remove();
    
}

function strikeText(t_id)
{   let box = document.getElementById("c-"+t_id)
    document.getElementById("c-"+t_id).disabled=true;
    console.log(box.value)
    if(box.value=="on")
    {
        let temp = document.getElementById(t_id).innerHTML
        document.getElementById(t_id).innerHTML = `<s>${temp}</s>`;
        temp = document.getElementById("task-"+t_id).innerHTML
        document.getElementById("task-"+t_id).innerHTML = `<s>${temp}</s>`;
        temp = document.getElementById("desc-"+t_id).innerHTML
        document.getElementById("desc-"+t_id).innerHTML = `<s>${temp}</s>`;   
    }
}
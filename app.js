var lst=document.getElementById('list')


function addtask()
{
    var task=document.getElementById('todo');
    //appendlist
    var li=document.createElement('li');
    var litxt=document.createTextNode(task.value);
    li.setAttribute('class','lines')
    li.appendChild(litxt);
    //Delbtn
    var btn=document.createElement('button');
    var dbtxt=document.createTextNode('X');
    btn.appendChild(dbtxt);
    btn.setAttribute('class','dbtn')
    btn.setAttribute('onclick','Del(this)')
    //edit
    var btn1=document.createElement('button');
    var etxt=document.createTextNode('Edit');
    btn1.appendChild(etxt);
    btn1.setAttribute('class','ebtn')
    btn1.setAttribute('onclick','Edit(this)')


    li.appendChild(btn);
    li.appendChild(btn1)
    lst.appendChild(li)
    
    task.value="";
    console.log(li)
   
}
function Del(e)
{
    e.parentNode.remove()
}
function Delall()
{
    lst.innerHTML=""
}
function Edit(e)
{
    var val=e.parentNode.firstChild.nodeValue;
    var evalue=prompt("Enter Edit value", val)
    e.parentNode.firstChild.nodeValue=evalue
    //console.log(e.parentNode.firstChild)
}
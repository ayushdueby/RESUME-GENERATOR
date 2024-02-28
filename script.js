function addNewWeField()
{
    let node=document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('wefield');
    node.classList.add('my-3');
    node.setAttribute('placeholder','enter here');
    let weob=document.getElementById('we');
    let weADDBUTTONob=document.getElementById('weADDBUTTON');
    weob.insertBefore(node,weADDBUTTONob);
}
function addNewaqField()
{
    let node=document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('aqfield');
    node.classList.add('my-3');
    node.setAttribute('placeholder','enter here');
    let aqob=document.getElementById('aq');
    let aqADDBUTTONob=document.getElementById('aqADDBUTTON');
    aqob.insertBefore(node,aqADDBUTTONob);
}

function generatecv()
{
    let namenode=document.getElementById("namefield").value;
    let namenodeT=document.getElementById("nameT1");
    namenodeT.innerHTML=namenode;
    document.getElementById("nameT2").innerHTML=namenode;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;
    document.getElementById("igT").innerHTML=document.getElementById("igfield").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;
    document.getElementById("linkT").innerHTML=document.getElementById("linkfield").value;
    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
    nameT1.classList.add('text');
    nameT2.classList.add('text');
    objectiveT.classList.add('text');
    igT.classList.add('text');
    fbT.classList.add('text');
    linkT.classList.add('text');
    contactT.classList.add('text');
    addressT.classList.add('text');


    let wes=document.getElementsByClassName("wefield");
    
    let str='';
    for(let e of wes)
    {
        str+=`<li>${e.value}</li>`
    }
    document.getElementById("wt").innerHTML=str;
    wt.classList.add('text');

    let aqs=document.getElementsByClassName("aqfield");
    
    let str1='';
    for(let e of aqs)
    {
        str1+=`<li>${e.value}</li>`
    }
    document.getElementById("aqT").innerHTML=str1;
    aqT.classList.add('text');
    document.getElementById("cvform").style.display="none";
    document.getElementById("cvtemplate").style.display="block";
}
function printcv()
{
    window.print();
}
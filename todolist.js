var input=document.getElementById("in");
var listelement=document.getElementById("tasks");
function addtask(){
    if(input.value=="")
        return
    var inval=input.value;

    var taskelement=document.createElement("div");
    taskelement.className="task";

    var contentelement=document.createElement("div");
    contentelement.className="content";
    
    var inputtask=document.createElement("textarea");
    inputtask.className="text";
    inputtask.type="text";
    inputtask.readOnly = true;
    inputtask.value=inval;

    contentelement.append(inputtask);  
    input.value='';
    
    var actionelement=document.createElement("div");
    actionelement.className="actions";

    var editbutton=document.createElement("button");
    editbutton.className="Edit";
    editbutton.innerText="EDIT";
    editbutton.onclick=function(){
        if(editbutton.innerText=="EDIT"){
            editbutton.innerText="SAVE";
            inputtask.focus();
            inputtask.readOnly=false;
        }
        else{
            editbutton.innerText="EDIT";
            inputtask.readOnly=true;
        }
    }
    actionelement.append(editbutton);

    var deletebutton=document.createElement("button");
    deletebutton.className="Delete";
    deletebutton.innerText="COMPLETED";
    
    deletebutton.onclick=function(){
        listelement.removeChild(taskelement);
    }
    actionelement.append(deletebutton);

    taskelement.append(contentelement);
    taskelement.append(actionelement);

    listelement.append(taskelement);

}

function clearalltask(){
    while(listelement.firstChild)
        listelement.removeChild(listelement.firstChild)
}
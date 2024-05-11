/*console.log("Ashley")*/
function registered(){
    let answer=document.getElementById("option").value
    console.log(answer)
    if (answer=="Yes")
    {
         document.querySelector(".hide1").style.display="flex";
         document.querySelector(".hide2").style.display="none";
         document.querySelector(".hide3").style.display="none";
         document.querySelector(".hide4").style.display="none";
    }
    else if(answer=="No")
    {   
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="flex";
        document.querySelector(".hide3").style.display="flex";
        document.querySelector(".hide4").style.display="flex";
        
    }if(answer=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        document.querySelector(".hide3").style.display="none";
        document.querySelector(".hide4").style.display="none";
    }
}

/*function process1()
{
 
 location.href="app2.html";  
 

}*/

//Checks if whether the checkbox is checked/NOT
//EMBARCADERO C++
/*if(btn1->checked==true)
{

}*/
function Check() {
    let checkAns=document.getElementById("check");
    if (checkAns.checked == true){
        location.href="app2.html";
      
    } else {
       
        alert("Please Accept Terms and Conditions");
        return false;
    }
    
}













/*function Check() {
    let checkBox=document.getElementById("check")
if (checkBox.checked!=true) {
    swal("Error","PleaseAccept Terms and Conditions","error");  
}else{
    return true;
}
}*/
/*console.log("Ashley")*/
function registered(){
    let answer=document.getElementById("pcOpt").value
    console.log(answer)
    if (answer=="Yes")
    {
         document.querySelector(".hide1").style.display="none";
         document.querySelector(".hide1-1").style.display="none";
         document.querySelector(".hide2").style.display="none";
         document.querySelector(".hide3").style.display="none";
         document.querySelector(".hide4").style.display="none";
        document.querySelector(".hide5").style.display="none";  
    }
    else if(answer=="No")
    {   
        document.querySelector(".hide1").style.display="flex";
        document.querySelector(".hide1-1").style.display="flex";
        document.querySelector(".hide2").style.display="flex";
        document.querySelector(".hide3").style.display="flex";
        document.querySelector(".hide4").style.display="flex";
        document.querySelector(".hide5").style.display="flex";
        
        
        
    }if(answer=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide1-1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        document.querySelector(".hide3").style.display="none";  
        document.querySelector(".hide4").style.display="none";  
        document.querySelector(".hide5").style.display="none";  
        
    }
}
//Leads to the page that has a pdf
function Back()
{
 
    location.href="app3.html";    
 

}
//Leads to the page containing Contact Details
function Next() {
    //location.href="app5.html"; 
    let name=document.getElementById("nams").value;
    let relation=document.getElementById("relOption").value;
    let email=document.getElementById("myEmail").value;
    let phoneNumber=document.getElementById("PhoneN").value;
    let add1=document.getElementById("address1").value;
    let add2=document.getElementById("address2").value;
    let add3=document.getElementById("address3").value;
    let pCode=document.getElementById("code").value;
    let pOpt=document.getElementById("pcOpt").value;

    let surburb=document.getElementById("sub").value;
   let box=document.getElementById("pBox").value;
    let poCode=document.getElementById("pc2").value;

    let items=[{Names:name,Relationship:relation,Email:email,Phone:phoneNumber,Add1:add1,Add2:add2,Add3:add3,PCode:pCode,
    POct:pOpt,Surburb:surburb,Box:box,PostCode:poCode}]
    
    if (name==""||relation==""||email==""||phoneNumber==""||add1==""||add2==""||add3==""||pCode==""||pOpt==""  ) {
        alert("Please enter all your details");
        return false;
    } else {
        localStorage.setItem("NextOfKin",JSON.stringify(items));
        location.href="app5.html"; 
        
    }

}

function displayNextOfKin() {
    let storage= localStorage.getItem("NextOfKin");
    let data=JSON.parse(storage);

    if (data[0].POct=="Yes")
    {
         document.querySelector(".hide1").style.display="none";
         document.querySelector(".hide1-1").style.display="none";
         document.querySelector(".hide2").style.display="none";
         document.querySelector(".hide3").style.display="none";
         document.querySelector(".hide4").style.display="none";
        document.querySelector(".hide5").style.display="none";  
    }
    else if(data[0].POct=="No")
    {   
        document.querySelector(".hide1").style.display="flex";
        document.querySelector(".hide1-1").style.display="flex";
        document.querySelector(".hide2").style.display="flex";
        document.querySelector(".hide3").style.display="flex";
        document.querySelector(".hide4").style.display="flex";
        document.querySelector(".hide5").style.display="flex";
        
        
        
    }if(data[0].POct=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide1-1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        document.querySelector(".hide3").style.display="none";  
        document.querySelector(".hide4").style.display="none";  
        document.querySelector(".hide5").style.display="none";  
        
    }
    document.getElementById("nams").value=data[0].Names;
    document.getElementById("relOption").value=data[0].Relationship;
    document.getElementById("myEmail").value=data[0].Email;
    document.getElementById("PhoneN").value=data[0].Phone;
    document.getElementById("address1").value=data[0].Add1;
  document.getElementById("address2").value=data[0].Add2;
    document.getElementById("address3").value=data[0].Add3;
   document.getElementById("code").value=data[0].PCode;
   document.getElementById("pcOpt").value=data[0].POct;
document.getElementById("sub").value=data[0].Surburb;
   document.getElementById("pBox").value=data[0].Box;
    document.getElementById("pc2").value=data[0].PostCode;

}



















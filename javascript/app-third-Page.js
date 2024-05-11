

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
function Back()
{

    location.href="app2.html";    
 
}
function Next() {

    let email=document.getElementById("myEmail").value;
    let confirmEmail=document.getElementById("cEmail").value;
    let phoneNumber=document.getElementById("PhoneN").value;
    let confirmNumber=document.getElementById("cPhoneNum").value;
    let add1=document.getElementById("address1").value;
    let add2=document.getElementById("address2").value;
    let add3=document.getElementById("address3").value;
    let pCode=document.getElementById("poCode").value;
    let pOpt=document.getElementById("pcOpt").value;

   // let box=document.getElementById("pBox").value;
  
    let surburb2=document.getElementById("sub2").value;
   let box2=document.getElementById("pBox2").value;
    let poCode2=document.getElementById("pc2").value;

    let items=[{Email:email,CEmail:confirmEmail,Phone:phoneNumber,CPhone:confirmNumber,Add1:add1,Add2:add2,Add3:add3,
    PostCode:pCode,PostOpt:pOpt,PostCode2:poCode2,Sub2:surburb2,Box2:box2}]
    //localStorage.setItem("Contact",JSON.stringify(items));
    if (email==""||confirmEmail==""||phoneNumber==""||confirmNumber==""||add1==""||add2==""||add3==""||pCode==""||pOpt=="")
    //||box==""||surburb=="") 
    {
        alert("Please enter all your details");
        return false;
        /*if (email != confirmEmail) {
            alert("Email addresses do not match");
            return false;
        };
        if ( phoneNumber != confirmNumber) {
            alert("Phone Numbers do not match");
            return false;  
        }*/ 
       
    } else {
        localStorage.setItem("Contact",JSON.stringify(items));
        location.href="app4.html";    
    }
         
}

function displayContact(){ 
    let storage= localStorage.getItem("Contact");
    let data=JSON.parse(storage);
    if (data[0].PostOpt=="Yes")
    {
         document.querySelector(".hide1").style.display="none";
         document.querySelector(".hide1-1").style.display="none";
         document.querySelector(".hide2").style.display="none";
         document.querySelector(".hide3").style.display="none";
         document.querySelector(".hide4").style.display="none";
        document.querySelector(".hide5").style.display="none";  
    }
    else if(data[0].PostOpt=="No")
    {   
        document.querySelector(".hide1").style.display="flex";
        document.querySelector(".hide1-1").style.display="flex";
        document.querySelector(".hide2").style.display="flex";
        document.querySelector(".hide3").style.display="flex";
        document.querySelector(".hide4").style.display="flex";
        document.querySelector(".hide5").style.display="flex";
        
        
        
    }else if(data[0].PostOpt=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide1-1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        document.querySelector(".hide3").style.display="none";  
        document.querySelector(".hide4").style.display="none";  
        document.querySelector(".hide5").style.display="none";  
        
    }
    document.getElementById("myEmail").value=data[0].Email;
    document.getElementById("cEmail").value=data[0].CEmail;
    document.getElementById("PhoneN").value=data[0].Phone;
    document.getElementById("cPhoneNum").value=data[0].CPhone;
    document.getElementById("address1").value=data[0].Add1;
    document.getElementById("address2").value=data[0].Add2;
    document.getElementById("address3").value=data[0].Add3;
   document.getElementById("poCode").value=data[0].PostCode;
   document.getElementById("pcOpt").value=data[0].PostOpt;
   

   document.getElementById("sub2").value=data[0].Sub2;
   document.getElementById("pBox2").value=data[0].Box2;
 document.getElementById("pc2").value=data[0].PostCode2;
  

    
}
function Confirm() {

    let email=document.getElementById("myEmail").value;
    let confirmEmail=document.getElementById("cEmail").value;
    if (confirmEmail!=email) {
        alert("Emails does not match")
        return false;
    }    
}
function ConfirmCell(){

    let phone=document.getElementById("PhoneN").value;
    let conPhone=document.getElementById("cPhoneNum").value;
    if (phone!=conPhone) {
        alert("Cellphone numbers does not match")
        return false;
    }   
}
/*console.log("Ashley")*/
function registered(){
    let answer=document.getElementById("citizenOpt").value
    console.log(answer)
    if (answer=="Yes")
    {
         document.querySelector(".hide1").style.display="flex";
         document.querySelector(".hide2").style.display="none";
        
    }
    else if(answer=="No")
    {   
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="flex";
        
        
    }else if(answer=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        
    }
}
//Leads to the page that has a pdf
function Back()
{
 
    location.href="app1.html";    
 

}
//Leads to the page containing Contact Details
function Next() {


    let Names=document.getElementById("names").value;
    let citizen=document.getElementById("citizenOpt").value;
    let idNum=document.getElementById("idNo").value;
let dob=document.getElementById("birthDate").value;
let Surname=document.getElementById("surname").value;
let initials=document.getElementById("initials").value;
let gender=document.getElementById("genderOpt").value;
let language=document.getElementById("languageOpt").value;
let race=document.getElementById("raceOpt").value;
let title=document.getElementById("titleOpt").value;
let passport=document.getElementById("passP").value;

//LOCAL STORAGE
console.log(localStorage)

let items=[{southAfrican:citizen,ID:idNum,PassPort:passport,dateOfBirth:dob,Naams:Names,Surnaam:Surname,
      Initials:initials,Gender:gender,Lang:language,Race:race,Title:title}];

//adding to local storage and display them
//NB:JSON.stringify():converts to plain English(string)
//Personal:Collection Name
//localStorage.setItem("Personal",JSON.stringify(items));

//to retrieve data,use getItem() method
//localStorage.getItem()
   if (citizen==""||dob==""||Names==""||Surname==""||initials==""||race==""||language==""||title==""||gender=="") {
        alert("Please enter all your details");
        return false;
        
    } else {
        localStorage.setItem("Personal",JSON.stringify(items));
        location.href="app3.html";    
    }
    
}


function displayPersonal()
{
    //to retrieve data,use getItem() method
    //localStorage.getItem("Personal");
    //Personal:Collection Name
    let storage= localStorage.getItem("Personal");
    //JSON.parse(storage):converts data into an object/Array
let data=JSON.parse(storage);

if (data[0].southAfrican=="Yes")
    {
         document.querySelector(".hide1").style.display="flex";
         document.querySelector(".hide2").style.display="none";
        
    }
    else if(data[0].southAfrican=="No")
    {   
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="flex";
        
        
    }else if(data[0].southAfrican=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        
    }
document.getElementById("citizenOpt").value=data[0].southAfrican;
document.getElementById("idNo").value=data[0].ID;
document.getElementById("birthDate").value=data[0].dateOfBirth;
document.getElementById("names").value=data[0].Naams;
document.getElementById("surname").value=data[0].Surnaam;
document.getElementById("initials").value=data[0].Initials;
document.getElementById("genderOpt").value=data[0].Gender;
document.getElementById("raceOpt").value=data[0].Race;
document.getElementById("languageOpt").value=data[0].Lang;
document.getElementById("titleOpt").value=data[0].Title;
document.getElementById("passP").value=data[0].PassPort

}


function dateChange() {
    let dat=document.getElementById("idNo").value;
   let num=dat[6]
    if (num>=5) {
        document.getElementById("genderOpt").value="Male";
    } else  if(num<5){
        document.getElementById("genderOpt").value="Female";
    }
    //console.log(num)
    
}

function init() 
{
 
    let names = document.getElementById("names").value
    arrayName = names.split(" ")
    for (let i = 0; i < names.length; i++) {
      
        if (names[i]==" ") {
           firstIni=arrayName[0][0];
           secInit=arrayName[1][0];
           let initials=firstIni+secInit;
           document.getElementById("initials").value=initials;
           return false;
        }else
        {
            let one=arrayName[0][0];
            document.getElementById("initials").value=one;
        }
        
    }
    /*let names = document.getElementById("names").value
    arrayName = names.split(" ")
    //TO GET THE FIRST LETTER OF THE NAME
    let arrayName=fullNames.split(""); 
 //FIND THE POSITION OF SPACE SEPARATING THE NAMESS
  
   let secNaam=fullNames.split(" ")
    let delNam=secNaam.pop();//Name after the space
   // console.log(delNam)
 
 document.getElementById("initials").value=arrayName[0]+delNam[0];
/*
 arrayName = names.split(" ")


 for (let i = 0; i < names.length; i++) {
 

     if (names[i] == " ") {

         firstIni = arrayName[0][0]
         secondInit = arrayName[1][0]

         let initials = firstIni + " " + secondInit

         //document.querySelector(".short-input").value = initials
         document.getElementById("initials").value = initials
         
         return false;
     }
     else{
         let one = arrayName[0][0]
         document.getElementById("initials").value = one
         
     }
 }*/


}



/*let fullNames= document.getElementById("names").value;
let arrName=fullNames.split("  ")
console.log(arrName)*/
















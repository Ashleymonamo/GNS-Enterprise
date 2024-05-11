
function registered(){
    let answer=document.getElementById("facultyOpt").value
    console.log(answer)
    if (answer=="ICT")
    {
         document.querySelector(".hide1").style.display="flex";
         document.querySelector(".hide2").style.display="flex";
         document.querySelector(".hide3").style.display="none";
         document.querySelector(".hide4").style.display="flex"; 
         document.querySelector(".hide5").style.display="none"; 
         
    }
    // else if(answer=="Engineering")
    // {   
    //     document.querySelector(".hide1").style.display="flex";
    //     document.querySelector(".hide2").style.display="none";
    //     document.querySelector(".hide3").style.display="flex";
    //     document.querySelector(".hide4").style.display="none"; 
    //     document.querySelector(".hide5").style.display="flex"; 
       
        
        
    // }
    else if(answer=="")
    {
        document.querySelector(".hide1").style.display="none"; 
        document.querySelector(".hide2").style.display="none"; 
        document.querySelector(".hide3").style.display="none"; 
        document.querySelector(".hide4").style.display="none"; 
        document.querySelector(".hide5").style.display="none"; 
      
        
    }
    
}
function courseCodes() {
    let answ=document.getElementById("cName").value;
    if (answ=="End User Computing") {
        document.querySelector(".hide4-1").style.display="flex"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="none";
        document.querySelector(".hide4-4").style.display="none";  
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="none";
        
        
    }else if (answ=="Technical Support") {
        document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="flex"; 
        document.querySelector(".hide4-3").style.display="none";  
        document.querySelector(".hide4-4").style.display="none";  
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="none";
       

    } else if (answ=="System Dev Level 4") {
        document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="flex";
        document.querySelector(".hide4-4").style.display="none";  
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="none";
        
    }
    
    else if (answ=="System Dev Level 5") {
        document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="none"; 
        document.querySelector(".hide4-4").style.display="flex"; 
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="none";

    } else if (answ=="System Support") {

      document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="none"; 
        document.querySelector(".hide4-4").style.display="none"; 
        document.querySelector(".hide4-5").style.display="flex";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="none";  
    }
    else if(answ=="Advertising")
    {
        document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="none"; 
        document.querySelector(".hide4-4").style.display="none"; 
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="flex";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="none"; 
    }
    else if(answ=="ICT: Software Testing")
    {
        document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="none"; 
        document.querySelector(".hide4-4").style.display="none"; 
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="flex";
        document.querySelector(".hide4-8").style.display="none"; 
    }
    else if(answ=="System Analysis Support Practice")
    {
        document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="none"; 
        document.querySelector(".hide4-4").style.display="none"; 
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="flex"; 
        
    }
    else if (answ=="") {
        document.querySelector(".hide4-1").style.display="none"; 
        document.querySelector(".hide4-2").style.display="none"; 
        document.querySelector(".hide4-3").style.display="none"; 
        document.querySelector(".hide4-4").style.display="none"; 
        document.querySelector(".hide4-5").style.display="none";
        document.querySelector(".hide4-6").style.display="none";
        document.querySelector(".hide4-7").style.display="none";
        document.querySelector(".hide4-8").style.display="none";  
    }
} 
   
/*function courseElect() {
    //WORKS IF I CAN CHANGE THE ID -> cName
    let anse=document.getElementById("cName").value;
    if (anse=="Electrical Engineering") {
        document.querySelector(".hide5-1").style.display="flex"; 
        document.querySelector(".hide5-2").style.display="none"; 
        document.querySelector(".hide5-3").style.display="none";
        
    }else
    if (anse=="Mechanical Engineering") {
        document.querySelector(".hide5-1").style.display="none"; 
        document.querySelector(".hide5-2").style.display="flex"; 
        document.querySelector(".hide5-3").style.display="none";    
    }
    else if (anse=="Chemical Engineering") {
        document.querySelector(".hide5-1").style.display="none"; 
        document.querySelector(".hide5-2").style.display="none"; 
        document.querySelector(".hide5-3").style.display="flex"; 
    }
    else if (anse=="") {
        document.querySelector(".hide5-1").style.display="none"; 
        document.querySelector(".hide5-2").style.display="none"; 
        document.querySelector(".hide5-3").style.display="none"; 
    }

    
}*/

/*console.log("Ashley")*/
function storage() {
   // let courses=[{no,courseName,code}]
    const localstore=localStorage.getItem("Courses");
    let data=JSON.parse(localstore);
    data.forEach(course => {
        //console.log(book)
copyToHtml(course) 

        
    });
    
} 

//let div = '';  
let html = '';
function copyToHtml(course)
{
   
    let courseDiv=document.getElementById("cou")
    let tr=document.createElement("tr");
    tr.innerHTML=
    `
    <tr>
    <td>${course.no}</td>
    <td>${course.courseName}</td>
    <td>${course.code}</td>
    <td>
    <button class="del" onclick="Delete2('${course.courseName}')">Remove</button></td>
   </tr>
    `
   
    courseDiv.appendChild(tr); 
    
    
}



let numCourses=1;

let arraySub=[];
let storag=localStorage.getItem("Courses");
let data=JSON.parse(storag);

if (data!==null)
{
 arraySub=data;   
}
function addCourses()
{

  let courseNam=document.getElementById("cName").value;
let cCode=document.getElementById("cCode").value;
let course={no:numCourses,courseName:courseNam,code:cCode};
arraySub.push(course);
localStorage.setItem("Courses",JSON.stringify(arraySub))
copyToHtml(course) 

 
  numCourses++;
 /* document.getElementById("facultyOpt").value="";
  document.getElementById("cName").value="";
  document.getElementById("cCode").value="";*/
 

}

function Delete2(sublect) {
    console.log(sublect)
    let storag=localStorage.getItem("Courses");
    let data=JSON.parse(storag);
    
let newArray=data.filter((sub)=> sub.courseName !== sublect )
localStorage.setItem("Courses",JSON.stringify(newArray))
    
}
 
let cDiv=document.getElementById("sec")
cDiv.addEventListener('click',(event)=>{
    Delete(event.target) 
})
function Delete(element) 
{
    if (element.classList.contains("del")) 
{
  element.parentElement.parentElement.remove();
    
   swal("Success","Successfully deleted","success")
   
}
}
function Back()
{
 
    location.href="app6.html";    
 

}
//Leads to the NEXT page 
function Next() {
  //  location.href="app8.html";   
  let faculty=document.getElementById("facultyOpt").value;
  let courseName=document.getElementById("cName").value;
 let courseCode=document.getElementById("cCode").value;
  
  let items=[{Faculty:faculty,CourseName:courseName,CourseCode:courseCode}]
  if (faculty==""||courseName==""||courseCode=="") {
    alert("Please enter all your details");
    return false;
  } else {
    localStorage.setItem("Courses",JSON.stringify(items));
        location.href="app8.html"; 
    
  }
}
function displayCourses() {
    let storage= localStorage.getItem("Courses");
   
let data=JSON.parse(storage); 
if (data[0].Faculty=="ICT")
{
     document.querySelector(".hide1").style.display="flex";
     document.querySelector(".hide2").style.display="flex";
     document.querySelector(".hide3").style.display="none";
     document.querySelector(".hide4").style.display="flex"; 
     document.querySelector(".hide5").style.display="none"; 
     
}
else if(data[0].Faculty=="Engineering")
{   
    document.querySelector(".hide1").style.display="flex";
    document.querySelector(".hide2").style.display="none";
    document.querySelector(".hide3").style.display="flex";
    document.querySelector(".hide4").style.display="none"; 
    document.querySelector(".hide5").style.display="flex"; 
   
    
    
}else if(data[0].Faculty=="")
{
    document.querySelector(".hide1").style.display="none"; 
    document.querySelector(".hide2").style.display="none"; 
    document.querySelector(".hide3").style.display="none"; 
    document.querySelector(".hide4").style.display="none"; 
    document.querySelector(".hide5").style.display="none"; 
  
    
}

if (data[0].CourseName=="Computer Science") {
    document.querySelector(".hide4-1").style.display="flex"; 
    document.querySelector(".hide4-2").style.display="none"; 
    document.querySelector(".hide4-3").style.display="none";
    
    
}else if (data[0].CourseName=="Software Development") {
    document.querySelector(".hide4-1").style.display="none"; 
    document.querySelector(".hide4-2").style.display="flex"; 
    document.querySelector(".hide4-3").style.display="none";  
   

} else if (data[0].CourseName=="Informatics") {
    document.querySelector(".hide4-1").style.display="none"; 
    document.querySelector(".hide4-2").style.display="none"; 
    document.querySelector(".hide4-3").style.display="flex";
    
}

else if (data[0].CourseName=="") {
    document.querySelector(".hide4-1").style.display="none"; 
    document.querySelector(".hide4-2").style.display="none"; 
    document.querySelector(".hide4-3").style.display="none"; 

} 

document.getElementById("facultyOpt").value=data[0].Faculty;
document.getElementById("cName").value=data[0].CourseName;
document.getElementById("cCode").value=data[0].CourseCode;

}
function registered()
{
    let answer=document.getElementById("matricOpt").value;
    if (answer=="Yes")
    {
         document.querySelector(".hide1").style.display="none";    
    }
    else if(answer=="No")
    {   
        document.querySelector(".hide1").style.display="flex";   
    } 
    if(answer=="")
    {
        document.querySelector(".hide1").style.display="none";    
    }
}

/*console.log("Ashley")
console.log(window)
console.log("Ashley")*/
function storage() {
    //let subjects=[{no,subName,grade,level}]
    const localstore=localStorage.getItem("Subjects");
    let data=JSON.parse(localstore);
    console.log(data)
    
    data.forEach(subject => {
        copyToHtml(subject)   
    });

   /*data.forEach(subject => {
       
copyToHtml(subject) 

        
    });*/
    
    
}

//let div = '';  
let html = '';
function copyToHtml(subject)
{
   
    let subDiv=document.getElementById("sub")
    let tr=document.createElement("tr");
    tr.innerHTML=
    ` 
    
    
    <td>${subject.subName}</td>
    <td>${subject.grade}</td>
    <td id="lv">${subject.marks}</td>
    <td>
    <button class="del" onclick="Delete2('${subject.subName}')">Delete</button></td>
   
    `
    subDiv.appendChild(tr);
    
     
}
let arraySub=[];
function Delete2(sublect) {
    console.log(sublect)
    let storag=localStorage.getItem("Subjects");
    let data=JSON.parse(storag);
    
let newArray=data.filter((sub)=> sub.subName !== sublect )
localStorage.setItem("Subjects",JSON.stringify(newArray))
arraySub=newArray;

numSubjects--;

}

let sDiv=document.getElementById("sec")
sDiv.addEventListener('click',(event)=>{
    Delete(event.target)
})
function Delete(element) 
{
    if (element.classList.contains("del")) 
{
  element.parentElement.parentElement.remove(); 
  
  numSubjects--;
   swal("Success","Successfully deleted","success")
}

}

function sortSubs() {
    arraySub.sort()
    
}

//FUNCTION FOR AUTO-SUGGESTING IF YOU'VE COMPLETED GRADE 12 OR NOT

function suggest() {  
     
    let matricAns=document.getElementById("matricOpt").value;   
    if (matricAns=="Yes") {
        document.getElementById("grade").value="12"; 
        
    }else if (matricAns=="No") {
        document.getElementById("grade").value=""; 
        
    }
}


let numSubjects=1;

let storag=localStorage.getItem("Subjects");
let data=JSON.parse(storag);

if (data!==null)
{
 arraySub=data;   
}

function addSubjects()
{

let nameOfSub=document.getElementById("subName").value;
if (nameOfSub == "") {
    
    alert("Choose Subject")
    return false
}

let gradeOpt=document.getElementById("grade").value;
//let levelOpt=document.getElementById("lv").value;
let mk=determineLevel(gradeOpt)

let subject={no:numSubjects,subName:nameOfSub,grade:gradeOpt,marks:mk};
console.log(mk)

for (let i = 0; i< arraySub.length; i++) {
    if (arraySub[i].subName == subject.subName) {
        alert("Subject already exist")
        return false
    } ;
    
}
arraySub.push(subject);
localStorage.setItem("Subjects",JSON.stringify(arraySub))


copyToHtml(subject);

numSubjects++;
let btn=document.getElementById("addBtn")
if (numSubjects>9){
    alert("8 Subjects already entered,Please check corectly") ;
    //document.getElementById("addBtn").style.display="none"; 
    btn.disabled=true;
    //document.querySelector(".btn").style.display="none";  
    return false;
   }else if(numSubjects<9)
   {btn.disabled=false;
    //document.getElementById("addBtn").style.display="flex"; 
   }

  
  
  //document.getElementById("grade").value="";
  //document.getElementById("subName").value="";
 // document.getElementById("levelOption").value="";

}
 


//INPUT FOR GRADE
/*function schoolResults(){
    let Grade=document.getElementById("grade").value;
    let completedMatric=document.getElementById("option").value;
    
    if (completedMatric=="Yes") {
        Grade="Grade 12"  
    }
    
}*/


function Back()
{
 
    location.href="app4.html";    
 

}
function Next() {
    
    let nameOfSub=document.getElementById("subName").value;
    let gradeOpt=document.getElementById("grade").value;
    let levelOpt=document.getElementById("lv").value;
    let matric=document.getElementById("matricOpt").value;
    let province=document.getElementById("prov").value;
    let schoolName=document.getElementById("scName").value;
    let hGrade=document.getElementById("Goption").value;
  
    let items=[{Matric:matric,SubjectName:nameOfSub,Grade:gradeOpt,marks:levelOpt,Prov:province,School:schoolName/*highestGrade:hGrade*/}]
    if (nameOfSub==""||gradeOpt==""||levelOpt==""||matric==""||province==""||schoolName=="") {
        alert("Please enter all your details");
        return false;
    } else {
        localStorage.setItem("schoolAttended",JSON.stringify(items));
   
        location.href="app6.html";    
        
    }
        
}
function displaySchoolDetails()
{let storage= localStorage.getItem("schoolAttended");

let data=JSON.parse(storage);
if (data[0].Matric=="Yes")
    {
         document.querySelector(".hide1").style.display="none";    
    }
    else if(data[0].Matric=="No")
    {   
        document.querySelector(".hide1").style.display="flex";   
    } 
    if(data[0].Matric=="")
    {
        document.querySelector(".hide1").style.display="none";    
    }

 /*document.getElementById("subName").value=data[0].SubjectName;
  document.getElementById("grade").value=data[0].Grade;*/
  document.getElementById("lv")=data[0].marks;
  document.getElementById("matricOpt").value=data[0].Matric;
  document.getElementById("prov").value=data[0].Prov;
    document.getElementById("scName").value=data[0].School;
    document.getElementById("Goption").value=data[0].highestGrade;
  
    
}

function determineLevel(marks)
{
    //let lev=document.getElementById("levelOption").value;
   // let marks=document.getElementById("grade").value;
    if (marks>=0 && marks<=29) {
        marks="1";  
        
    }else if (marks>=30 && marks<=39) {
        marks="2";  
    } else if(marks>=40 && marks<=49){
        marks="3";   
    }else if(marks>=50 && marks<=59){
        marks="4";   
}else if(marks>=60 && marks<=69){
    marks="5";   
}else if(marks>=70 && marks<=79){
    marks="6";   

}else if(marks>=80 && marks<=100){
    marks="7";   

}

return marks;
}

function subjectNum() {
    
    
}






/*function Check() {
    let checkBox=document.getElementById("check")
if (checkBox.checked!=true) {
    swal("Error","PleaseAccept Terms and Conditions","error");  
}else{
    return true;
}
}*/
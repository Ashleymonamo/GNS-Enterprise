
var sideBarBtn=document.querySelectorAll(".side-bar-list")
console.log(sideBarBtn)

var divContainer=document.querySelectorAll(".dash-right")
console.log(divContainer)

let button1=document.querySelector(".btn1")
let button2=document.querySelector(".btn2")
let button3=document.querySelector(".btn3")
let button4=document.querySelector(".btn4")

button1.addEventListener(("click"),()=>{

  switchBtn(0,0)

})
button2.addEventListener(("click"),()=>{

  switchBtn(1,1)

})
button3.addEventListener(("click"),()=>{

  switchBtn(2,2)

})
button4.addEventListener(("click"),()=>{

  switchBtn(3,3)

})

function switchBtn(divSelected,btnSelected){

  sideBarBtn.forEach(element => {

    element.classList.remove("active")
    
  });
  divContainer.forEach(element => {

    element.classList.remove("active")
    
  });

  sideBarBtn[btnSelected].classList.add("active")
  divContainer[divSelected].classList.add("active")

}


function admin()
{
    let students=[{Name:"Ashley",Surname:"Monamo",PhoneNum:123456789,staus:"Approved"},
                {Name:"Anele",Surname:"Maseko",PhoneNum:123456789,staus:"Approved"},
                {Name:"Samu",Surname:"Dlamini",PhoneNum:123456789,staus:"Not Approved"},
                {Name:"Collen",Surname:"Sibiya",PhoneNum:123456789,staus:"Pending"}
    ]
    
    students.forEach(student => {
        //console.log(book)
        copyToHtml(student)
        
        })



      /*  for (let student = 0; student <=students.length;student++) {
                    const element =students[student];

                

                copyToHtml(element)
            }
*/

}


let div = '';  
let html = '';

function copyToHtml(student) 
{
    let bookDiv=document.getElementById("adm")


    div=
    `
    <tr>
        <td>${student.Name}</td>
        <td>${student.Surname}</td>
        <td>${student.PhoneNum}</td>
        <td>${student.staus}</td>
      </tr>
    `
    html +=div;
    bookDiv.innerHTML=html
}function addModule() {

  const storage = firebase.storage().ref("moduleCover")

  
  let category = document.getElementById("category").value
  let tittle = document.getElementById("tittle").value
  let moduleCover = document.getElementById("image-file").files[0]
  let today = new Date()
  let time = today.getTime()

  let metaData = {
    contentType: moduleCover.type

  }

  let name = time + " " + moduleCover.name

  let task = storage.child(name).put(moduleCover, metaData)

  task.on("state_changed", function progress(snapshot){
      
    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

     document.getElementById("progress-el").value = percentage
     document.getElementById("percentage").innerHTML = "upload " + percentage.toFixed(0) + "%"
  })

  task.then((imageFile) => imageFile.ref.getDownloadURL()).then((url) =>{
   
    db.collection("Modules").add({
      PhotoLink: url,
      Category: category,
      Tittle: tittle
    })
    .then(()=>{
      alert("Successfully added a module.")
    })
  })

}





// let student={id:"96325",name:"ZWELLY",surname:"SITHOLE"};
// student.age=55;
// var parentDiv;

// function getStorage(){

//     let courses=[{id:1,category:"Module",title:"Software Development"},{id:2,category:"Module",title:"Business Development"},{id:3,category:"Module",title:"Management Development"}]

//      courses.forEach(course => {
        
//         addHtml(course);

//      });

// }
// function addHtml(course){

//     parentDiv=document.getElementById("parent-courses");

//     let div=document.createElement("div");
//     div.classList.add()

//     div.innerHTML=`

//     <img src="img/pic/Strong-Colors.jpg" alt="Pictures"  class="landPic">
//     <div class="employee_info">
//     <h1>${course.title}</h1>
//       <a href="#">${course.category}<br></a>
//       <a class="delete" href="#">Delete</a>
//     </div>
//     `
//     parentDiv.appendChild(div)

// }

// let tittle;
// let subTittle;
// let count=4;

// function submitForm(){

 

//   tittle=document.getElementById("tittle").value;
//   subTittle=document.getElementById("subtittle").value;

//   let course={id:count,category:subTittle,title:tittle};

//   addHtml(course);
//   count++;


//   swal("Success", "Successfully Added", "success");

//   document.getElementById("tittle").value=""
//   document.getElementById("subtittle").value=""
// }

// parentDiv=document.getElementById("parent-courses");

// parentDiv.addEventListener('click',(event)=>
// {Delete(event.target)})

// function Delete(clickedElement){

//   if (clickedElement.classList.contains("delete")) {
//     clickedElement.parentElement.parentElement.remove()
//     swal("Success", "Successfully Deleted", "success");
//   }
// }


























































// console.log(student);
// console.log(student.name);




function displayProfile(){

    auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;

          db.collection("users").doc(uid).get()
          .then((userdata)=>
          {
            console.log(userdata.data().Name)

            document.getElementById("surname").innerHTML=userdata.data().Surname

            var fname= userdata.data().Name

            var arrName=fname.split("")

            console.log(arrName)

            var init =arrName[0]
           
            document.getElementById("intial").innerHTML=arrName[0]

          })
          .catch((err)=>{

            alert(err)
          })


        } else {
          
            // location.href="login.html"
          
        }
      });
}


function logout(){

    auth.signOut()
    
    .then(() => {

        location.href="index.html"

    })
    .catch((err) =>{

        alert(err)
    })
    
}


function getStorage(){

  db.collection("Modules").get().then( (courses) =>{

      courses.forEach(course => {
        
         addHtml(course.data());

        console.log(course.data())

     });

    })

 }

 let html=""
 let div=""


function addHtml(course){

  parentDiv=document.getElementById("listm");

  
   div=`

          <img src=${course.PhotoLink} alt="">
          <div class="ccode-one">
            <a href="#">${course.Tittle}</a>
            <p>${course.Category} - 2022 SECOND
            SEMESTER (JUL-DEC)</P>
          </div>
         </div>
         
    `
   html+=div

   parentDiv.innerHTML=html

 }

 function Delete(clickedElement){

  if (clickedElement.classList.contains("delete")) {
    clickedElement.parentElement.parentElement.remove()
    swal("Success", "Successfully Deleted", "success");
   }
}
function startApply(){

  location.href="app1.html"
}

    

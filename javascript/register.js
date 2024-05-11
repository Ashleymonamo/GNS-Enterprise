


function register(){


    let myName = document.getElementById("myName").value;
    if (myName == "") {

        
        return false;
    }
    console.log(myName);  
    
    let surname = document.getElementById("surname").value;
    if (surname == "") {

        
        return false;
    }
    console.log(surname);  
    
    var cell = document.getElementById("cell").value;
    if (cell == "") {

       
       return false; /*Terminating when error*/
    }
    console.log(cell);  
    

    var email = document.getElementById("email").value;
    if (email == "") {

       
        return false;
    }
    console.log(email); 

    var password = document.getElementById("password").value;
    if (password == "") {

       
        return false;
    }
    console.log(password); 

    var password2 = document.getElementById("password2").value;
    if (password !== password2) {

  
        return false;
    }
    console.log(password2); 

    

    // creating new user in database and collecting their information ****************************************


    auth.createUserWithEmailAndPassword(email, password)
    .then((feedback) => {
      // Signed in 
      var user = feedback.user;
      console.log(user)

      db.collection("users").doc(auth.currentUser.uid).set({
        Name:myName,
        Surname:surname,
        CellNo:cell
      })

      swal("Success", " Successfully created account ","success");

    })

    .catch((err) => {
      console.log(err)
      alert(err);
    
    });

    location.href="dashboard.html"

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
        
          location.href="login.html"
        
      }
    });

}
function backHome(){

  location.href="index.html"
}
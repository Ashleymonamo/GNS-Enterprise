
function login(){

    let myEmail = document.getElementById("myEmail").value;
    console.log(myEmail);  
    
    var myPassword = document.getElementById("myPassword").value;
    console.log(myPassword);  


    auth.signInWithEmailAndPassword(myEmail, myPassword)
    .then(() => {

        location.href="dashboard.html"
    
    })
    .catch((error) => {

        alert(error)
    })
    
}

function reset(){

    let myEmail = document.getElementById("reset-password").value;

    auth.sendPasswordResetEmail(myEmail)
    .then((sent) => {

        swal("Success" ,"Link successfully sent to email", "success")

    })
    .catch((err) => {

        alert(err)
    })
}
function backHome(){

    location.href="index.html"
}
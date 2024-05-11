function registered(){

    var answer=document.getElementById("option").value


    if (answer=="Yes") {

        document.querySelector(".hide-one").style.display="block"
        document.querySelector(".hide-two").style.display="none"
        document.querySelector(".hide-three").style.display="none"
        document.querySelector(".hide-four").style.display="none"
    }
    else if (answer=="No") {
        document.querySelector(".hide-two").style.display="block"
        document.querySelector(".hide-three").style.display="block"
        document.querySelector(".hide-four").style.display="block"
        document.querySelector(".hide-one").style.display="none"
    }

}

console.log(localStorage)
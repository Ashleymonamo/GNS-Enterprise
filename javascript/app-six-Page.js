console.log("Ashley")
function registered(){
    let answer=document.getElementById("preOption").value
    //console.log(answer)
    if (answer=="Yes") 
    {
         document.querySelector(".hide1").style.display="flex";
         document.querySelector(".hide2").style.display="flex";
        
    }
    else if(answer=="No")
    {   
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="none";
        
        
    }if(answer=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        
    }
}


function Back()
{
 
    location.href="app5.html";    
 

}


//Leads to the page containing Contact Details
function Next() {
    let prev=document.getElementById("preOption").value
    let vars=document.getElementById("uni").value;
    let curAct=document.getElementById("activityOption").value;
 //let acadeMRec=document.getElementById("acam").file;
 let items=[{PrecOpt:prev,Varsity:vars,Activity:curAct}]
if (prev==""||vars==""||curAct=="") {
    alert("Please enter all your details");
    return false;  
} else {
    localStorage.setItem("PreviousInstituition",JSON.stringify(items));
    location.href="app7.html";     
    
} 

    
}
function displayInstituition() {

    let storage= localStorage.getItem("PreviousInstituition");
   
let data=JSON.parse(storage);


if (data[0].PrecOpt=="Yes")
{
     document.querySelector(".hide1").style.display="flex";
     document.querySelector(".hide2").style.display="none";
    
}
else if(data[0].PrecOpt=="No")
{   
    document.querySelector(".hide1").style.display="none";
    document.querySelector(".hide2").style.display="flex";
    
    
}else if(data[0].PrecOpt=="")
{
    document.querySelector(".hide1").style.display="none";
    document.querySelector(".hide2").style.display="none";  
    
}
    document.getElementById("preOption").value=data[0].PrecOpt;
    document.getElementById("uni").value=data[0].Varsity;
   document.getElementById("activityOption").value=data[0].Activity;

   
}
/*function UploadInstitution() {
    let rResults=document.getElementById("acam").files[0];
    
   /* let today=new Date();
    let time=today.getTime();
    let name=time+" "+ rResults.name;
    let metadata={contentType:rResults.type};
    const storage=firebase.storage().ref("academicResults");
    let task1=storage.child(name).put(rResults,metadata);
   
    task1.on("state_changed",function progress(snapshot) {
      let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;//converts to percentage
      document.getElementById("bar2").value=percentage;
      document.getElementById("percentage").innerHTML="Upload "+percentage.toFixed(0)+"%"
      document.getElementById("bar").style.display="flex";
    
    })
    .then(()=>{
      alert("Successfully uploaded recent results")
   / });
   let academic=[[]]
    
}*/
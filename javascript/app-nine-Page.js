
/*function store() {
    const localstore=localStorage.getItem("Personal");
    let data=JSON.parse(localstore);
    console.log(data)
    
    data.forEach(subject => {
        copyToHtml(subject)   
    });

    
}
 
let html = '';
function displaySchoolDetails(){
let container=document.getElementById("all");
let tr=document.createElement("tr");
    tr.innerHTML=
}
*/





function displayInfo2() {
    let storage= localStorage.getItem("Personal");
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
        
        
    }if(data[0].southAfrican=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
         
    }

    document.getElementById("citizenOpt").value=data[0].southAfrican;
    document.getElementById("surname").value=data[0].Surnaam;
    document.getElementById("idNo").value=data[0].ID;
    document.getElementById("raceOpt").value=data[0].Race;
    document.getElementById("names").value=data[0].Naams;
    document.getElementById("initials").value=data[0].Initials;
    document.getElementById("languageOpt").value=data[0].Lang;
    document.getElementById("titleOpt").value=data[0].Title;
    document.getElementById("genderOpt").value=data[0].Gender;
    document.getElementById("birthDate").value=data[0].dateOfBirth;
}
function displayInfo3()
{
    let storage= localStorage.getItem("Contact"); 
    let data2=JSON.parse(storage);
    document.getElementById("pcOpt").value=data2[0].pOption;

    if (data2[0].pOption=="Yes")
    {
         document.querySelector(".hide1").style.display="none";
         document.querySelector(".hide1-1").style.display="none";
         document.querySelector(".hide2").style.display="none";
         document.querySelector(".hide3").style.display="none";
         document.querySelector(".hide4").style.display="none";
        document.querySelector(".hide5").style.display="none";  
    }
    else if(data2[0].pOption=="No")
    {   
        document.querySelector(".hide1").style.display="flex";
        document.querySelector(".hide1-1").style.display="flex";
        document.querySelector(".hide2").style.display="flex";
        document.querySelector(".hide3").style.display="flex";
        document.querySelector(".hide4").style.display="flex";
        document.querySelector(".hide5").style.display="flex";
        
        
        
    }if(data2[0].pOption=="")
    { 
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide1-1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        document.querySelector(".hide3").style.display="none";  
        document.querySelector(".hide4").style.display="none";  
        document.querySelector(".hide5").style.display="none";  
        
    }

    document.getElementById("myEmail").value=data2[0].Email;
    document.getElementById("cEmail").value=data2[0].CEmail;
    document.getElementById("PhoneN").value=data2[0].Phone;
    document.getElementById("cPhoneNum").value=data2[0].CPhone;
    document.getElementById("address1").value=data2[0].Add1;
    document.getElementById("address2").value=data2[0].Add2;
    document.getElementById("address3").value=data2[0].Add3;
    document.getElementById("poCode").value=data2[0].PostCode;
    
    document.getElementById("pBox").value=data2[0].Box;
    document.getElementById("sub").value=data2[0].Surburb;
    document.getElementById("pc2").value=data2[0].PostCode;
    

}
function displayInfo4() {

     
    let storage= localStorage.getItem("NextOfKin");
    let data3=JSON.parse(storage);

    if (data3[0].POct=="Yes") 
    {
         document.querySelector(".hide1").style.display="none";
         document.querySelector(".hide1-1").style.display="none";
         document.querySelector(".hide2").style.display="none";
         document.querySelector(".hide3").style.display="none";
         document.querySelector(".hide4").style.display="none";
        document.querySelector(".hide5").style.display="none";  
    }
    else if(data3[0].POct=="No")
    {   
        document.querySelector(".hide1").style.display="flex";
        document.querySelector(".hide1-1").style.display="flex";
        document.querySelector(".hide2").style.display="flex";
        document.querySelector(".hide3").style.display="flex";
        document.querySelector(".hide4").style.display="flex";
        document.querySelector(".hide5").style.display="flex";
        
        
        
    }if(data3[0].POct=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide1-1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        document.querySelector(".hide3").style.display="none";  
        document.querySelector(".hide4").style.display="none";  
        document.querySelector(".hide5").style.display="none";  
        
    }
    document.getElementById("nams").value=data3[0].Names;
    document.getElementById("relOption").value=data3[0].Relationship;
    document.getElementById("email").value=data3[0].Email;
    document.getElementById("number").value=data3[0].Phone;
    document.getElementById("add1").value=data3[0].Add1;
  document.getElementById("add2").value=data3[0].Add2;
    document.getElementById("add3").value=data3[0].Add3;
   document.getElementById("pCode").value=data3[0].PCode;
   document.getElementById("pcOpt").value=data3[0].POct;
document.getElementById("sub").value=data3[0].Surburb;
   document.getElementById("pBox").value=data3[0].Box;
    document.getElementById("pc2").value=data3[0].PostCode;
      
}
function displayInfo5()
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
console.log(data)
const subjects=localStorage.getItem("Subjects");
const data1=JSON.parse(subjects);
console.log(data1)
let subDiv=document.getElementById("sub2")
    let tr=""
    let html=""

    data1.forEach(subject => {
        
        tr=
        ` 
        <tr>
        <td>${subject.no}</td>
        <td>${subject.subName}</td>
        <td>${subject.grade}</td>
        <td>${subject.level}</td>
        <td>
        <button class="del" onclick="Delete2('${subject.subName}')">Delete</button></td>
        </tr>
        `
        html=html+tr
        subDiv.innerHTML=html;    
    });
   
    
     
 /*document.getElementById("subName").value=data[0].SubjectName;
  document.getElementById("grade").value=data[0].Grade;
  document.getElementById("levelOption").value=data[0].Level;*/
  document.getElementById("matricOpt").value=data[0].Matric;
  document.getElementById("prov").value=data[0].Prov;
    document.getElementById("scName").value=data[0].School;
    document.getElementById("Goption").value=data[0].highestGrade;
  
    
}
function displayInfo6() {

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
   const subjects=localStorage.getItem("Courses");
const data1=JSON.parse(subjects);
console.log(data1)
let subDiv=document.getElementById("cou")
    let tr=""
    let html=""

    data1.forEach(subject => {
        
        tr=
        ` 
        <tr>
       
        <td>${subject.CourseName}</td>
        <td>${subject.CourseCode}</td>
       
        <td>
        <button class="del" onclick="Delete2('${subject.CourseName}')">Delete</button></td>
        </tr>
        `
        html=html+tr
        subDiv.innerHTML=html;    
    });
   
    


}
function But1() {
    location.href="app2.html";
    
}
function But2() {
    location.href="app3.html";
    
}
function But3() {
    location.href="app4.html";
    
}
function But4() {
    location.href="app5.html";
    
}

/*function showPassword() {
    let var1=document.getElementById("pass1");
    let status=document.getElementById("eye");
    if (var1.type=='password') {
        var1.type=='text' ;
        status.className='fa-solid fa-eye slash';  
        
    }else
    {

        var1.type='password';
        status.className='fa-solid fa-eye';
      }
    
}*/
function viewPassword()
{
  var passwordInput = document.getElementById('password-field');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa-solid fa-eye-slash';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa-solid fa-eye';
  }
}
function Passwords() {
    var passwordInput = document.getElementById("password-field").value;
    var passwordInput2 = document.getElementById("bttn2").value;
    if (passwordInput!=passwordInput2) {
      alert("Passwords do not match")  ;
      return false;
    }
    
}
function verifyChars() {

    var passwordInput = document.getElementById("password-field").value;
    let numLetters=passwordInput.length()
    if (numLetters<8 )
    {
        alert("Enter a valid password");
        return false;
    }
}
function uploadID() {


    let idDoc=document.getElementById("ID").files[0];
      console.log(results);
      let today=new Date();
      let time=today.getTime();
      let name=time+" "+idDoc.name; 
      let metadata={contentType:idDoc.type};
      const storage=firebase.storage().ref("IdentityDocs");
      let task=storage.child(name).put(idDoc,metadata);
     
      task.on("state_changed",function progress(snapshot) {
        let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;//converts to percentage
        document.getElementById("bar").value=percentage;
        document.getElementById("percentage").innerHTML="Upload "+percentage.toFixed(0)+"%"
        document.getElementById("bar").style.display="flex";
       
      
      }) 
      .then(()=>{
        alert("Successfully uploaded an ID")
      });
     
  
      }
      function uploadResults() {
        let rResults=document.getElementById("results").files[0];
        
        let today=new Date();
        let time=today.getTime();
        let name=time+" "+ rResults.name;
        let metadata={contentType:rResults.type};
        const storage=firebase.storage().ref("RecentResults");
        let task1=storage.child(name).put(rResults,metadata);
       
        task1.on("state_changed",function progress(snapshot) {
          let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;//converts to percentage
          document.getElementById("bar2").value=percentage;
          document.getElementById("percentage2").innerHTML="Upload "+percentage.toFixed(0)+"%"
          document.getElementById("bar2").style.display="flex";
        
        })
        .then(()=>{
          alert("Successfully uploaded recent results")
        });
         
    }
    function finalSubmission() {
        let storageP= localStorage.getItem("Personal");
        let dataP=JSON.parse(storageP);

        let storageC= localStorage.getItem("Contact"); 
        let dataC=JSON.parse(storageC);
        let email=dataC[0].Email;

        let storageK= localStorage.getItem("NextOfKin");
        let dataK=JSON.parse(storageK);

        let storageS= localStorage.getItem("schoolAttended");
        let dataS=JSON.parse(storageS);

        let storagePI= localStorage.getItem("PreviousInstituition");
        
        let dataPI=JSON.parse(storagePI);

        const subjectsCO=localStorage.getItem("Courses");
        const dataCO=JSON.parse(subjectsCO);

        const subjectsSB=localStorage.getItem("Subjects");
        const dataSB=JSON.parse(subjectsSB);


        let passWord=document.getElementById("password-field").value
       var passwordInput2 = document.getElementById("bttn2").value;
         if (passWord!=passwordInput2) {
         alert("Passwords do not match")  ;
        return false;
        }
        auth.createUserWithEmailAndPassword(email,passWord) //allows to create accounts in authentication
                .then((feedback) => {
                    // Signed in 
                    var user = feedback.user;
                    console.log(user)

                    //storing data in database
                    //.collection:create a folder named users
                    //.doc:document //Specify what to send to the collection
                    //.set:adding
                    db.collection("studentApplication").doc(auth.currentUser.uid).set({
                        //Name and Surname are "labels"
                        PersonalDetails:dataP,
                        ContactDetails:dataC,
                        NextOfKinDetails:dataK,
                        PreviousSchoolDetails:dataS,
                        PreviousInstituitionDetails:dataPI,
                        SubjectDetails:dataSB,
                        CourseDetails:dataCO
                    }).then(()=>{
                        localStorage.clear();
                        setTimeout(() => {
                            location.href="app9.html"; 
                            window.location.href = "app9.html?User=" + auth.currentUser.uid + "";   
                        }, 2000);
                        
                    })
                   
                   
                    
                    // ...
                })
                .catch((er) => {
                    /*var errorCode = er.code;
                    var errorMessage = er.message;*/
                    // ..
                    //loader.style.display="none";
                    alert(er)
                });

        
    }

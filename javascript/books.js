var parentDiv;

let bookscOMIC=[{id:1,discription:"Spider-Man is a superhero appearing in American comic books published by Marvel Comics.",title:"SPIDER-MAN "},{id:2,discription:"The Hulk is a superhero appearing in publications by the American publisher Marvel Comics.",title:"HULK"},{id:3,discription:"Clark Joseph Kent, best known by his superhero persona Superman, is a fictional character and a superhero",title:"SUPER-MAN"},{id:4,discription:"Batman is a superhero appearing in American comic books published by DC Comics.",title:"BATMAN"},{id:1,discription:"IRON-MAN is a superhero appearing in American comic books published by Marvel Comics.",title:"IRON-MAN "}]

getStorage(bookscOMIC)

function getStorage(){

    let booksFiction=[{id:1,discription:"The Vanishing Half considers the lasting influence of the past as it shapes a person's decisions",title:"The Vanishing Half"}]

    bookscOMIC.forEach(book => {
        
        addHtml(book);

     });
    booksFiction.forEach(book => {
        
      addHtml2(book);

 });

}
function addHtml(book){

    parentDiv=document.getElementById("comic");

    let div=document.createElement("div");
    div.classList.add()


    div.innerHTML=`

    <div class="employee_info">
      <h1>${book.title}</h1>
      <a href="course.html">${book.discription}<br></a>
      <button class="addBook" >ADD to Cart</button>
    </div>
    `
    parentDiv.appendChild(div)

}
function addHtml2(book){

  parentDiv=document.getElementById("fiction");

  let div=document.createElement("div");
  div.classList.add()


  div.innerHTML=`

  <div class="employee_info">
    <h1>${book.title}</h1>
    <a href="course.html">${book.discription}<br></a>
    <button class="addBook" >ADD to Cart</button>
  </div>
  `
  parentDiv.appendChild(div)

}

parentDiv=document.getElementById("comic");

parentDiv=addEventListener('click', ((event)=>{
  addBook(event.target)
}))

function addBook(clickedElement){

  if (clickedElement.classList.contains("addBook")) {

  
  }
}


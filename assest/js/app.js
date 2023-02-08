var cl = console.log;
let baseUrl = `https://jsonplaceholder.typicode.com/posts`;
const postContainer = document.getElementById("postContainer");
//GET  >> to get data from DB
//POST  >> send data in DB
//DELETE >> delete data from DB
//PACTH/PUT >> update data in DB

//myFlipcart.com/api  >>base API Url
//myFlipcart.com/api/products
//myFlipcart.com/api/products/123

const templating = (arr) => {
    let result = '';
    arr.forEach(post => {
        result += `
            <div class="card mb-4">
            <div class="card-header"><h2>${post.title}</h2></div>
            <div class="card-body"><p>${post.body}</p></div>
            <div class="card-footer">
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
            </div>
            </div>
        
        
        `
    });
    postContainer.innerHTML = result;
}

let xhr = new XMLHttpRequest();
xhr.open("GET", baseUrl);
xhr.onload = function () {
   let data= JSON.parse(xhr.response);
   cl(data);
   templating(data);
}
xhr.send();



url = "https://65349b51e1b6f4c59046d2dd.mockapi.io/api/v1/users";
var image = "";
//Write the logic to get the data from API and kept in response variable
async function display() {
    try {
        const data = await fetch(url);
        const response = await data.json();
        return response;
    } catch (err) {
        console.error(err);
    }
}
display();

//write the logic to display data in a DOM
async function displayitems() {
    let items = await display();
    const data = document.getElementsByClassName('main-container')[0];
    items.forEach((item) => {
        data.innerHTML += `
        <div class="container">
        <h3 class="test"><span>PostID:${item.postId}</span></h3>
        <h3 class="test"><span>Id:${item.id}</span></h3>
        <h3 class="test"><span>Name:${item.name}</span></h3>
        <h3 class="test"><span>Email:${item.email}</span></h3>
        <h3 class="test"><span>Body:${item.body}</span></h3>
        <img id='output' class="output">
        <button onClick="EditItem('${item.postId}','${item.id}','${item.name}','${item.email}')">Edit</button>
        <button onClick="DeleteItem('${item.id}')">Delete</button>
        </div>
    `;
    })
}
displayitems();

//Write the logic to show the data for editing
async function EditItem(p_Id, Id, p_Name, p_Email) {
    //setting the value in fields
    document.getElementById("PostId").value = p_Id;
    document.getElementById("Id").value = Id;
    document.getElementById("Name").value = p_Name;
    document.getElementById("Email").value = p_Email;
    //enabling hidden text 
    let element = document.getElementsByClassName("popup");
    for (let i = 0; i < element.length; i++) {
        element[i].removeAttribute('hidden');
    }
}


//Write a logic to write the update in api
async function Updateitems() {
    //Get the data from the input field given by users
    console.log("Submit button called");
    const PostId = document.getElementById('PostId').value;
    const Id = document.getElementById('Id').value;
    const Name = document.getElementById('Name').value;
    const Email = document.getElementById('Email').value;
    console.log(Email);
    // const updateUrl = `${url}/${Id}`;
    try {
        const data = await fetch(`${url}/${Id}`, {
            method: "PUT",
            body: JSON.stringify({
                PostId: PostId,
                id: Id,
                name: Name,
                email: Email
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        displayitems();

    } catch (err) {
        console.error(err);
    }
}

//Write the logic to upload the image data
async function Dataupload(evt) {
    //getting value
    try {
        var files = evt.target.files;

        var file = files[0];
    
        var fileReader = new FileReader();
    
    
        fileReader.onload = function(progressEvent) {
            var url = fileReader.result;
    
            // Something like: data:image/png;base64,iVBORw...Ym57Ad6m6uHj96js
            console.log(url);
            //
            var myImg = document.getElementById("ProfilePic");
            myImg.src= url;
        }
    
    
        // Read file asynchronously.
        fileReader.readAsDataURL(file); // fileReader.result -> UR
    } catch (err) {
        console.log(err);
    }

}
//Write the logic to delete the data
async function DeleteItem(id) {
try{
   const data = fetch(`${url}/${id}`,{
   method: 'DELETE',
   headers: {
    "Content-Type": "application/json"
   }
   })
    displayitems();
}   
catch(err){
   console.log(err);
} 
}


//Note 2issues are there one is display call
// another is photo


url = "https://jsonplaceholder.typicode.com/comments";
var image = "";
//Write the logic to get the data
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

//Write the logic to edit the data
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
        <button onClick="DeleteItem()">Delete</button>
        </div>
    `;
    })
}
displayitems();

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
            method: "GET",
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
        console.log(data.status);
        display();
    } catch (err) {
        console.error(err);
    }
}

//Write the logic to upload the image data
async function Dataupload(event) {
    //getting value
    try {
        image = event.target.files[0];
        console.log(image);
    } catch (err) {
        console.log(err);
    }

}
//Write the logic to delete the data
async function DeleteItem() {

}
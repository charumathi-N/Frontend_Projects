//Asynchronous programming promises
let url="https://65349b51e1b6f4c59046d2dd.mockapi.io/users"

//write the logic to get the data9
async function getUsers(){
    let users;
    try{
    const data = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    users = await data.json();
    
    }
    catch(error){
    console.log(error);
    }
    return users;
}
//Write a function to display the data in DOM
async function displayUsers(){
  let users = await getUsers();
//console.log(users);
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
   users.forEach((user)=>{
        // console.log(user.Name);
        // console.log(user.company);
        userList.innerHTML += `
        <div class ="user-container">
            <div class="cls">
            <div class="user-name" Id="Name">Name:${user.Name}</div>
            <div class="user-company" Id="Company">Company:${user.company}</div>
            </div>
            <button class = "btn btn-primary" onClick="DeleteUser(${user.id})">Delete</button>
            <button class="btn btn-primary" onClick="EditUser('${user.Name}','${user.company}','${user.id}')">Edit</button>
        </div>
        `

   })
}
displayUsers();
async function addUser(){
    //target element
    const userName = document.querySelector('.add-user-name').value;
    const userCompany = document.querySelector('.add-user-company').value;
    // console.log(userName);
    // console.log(userCompany);

    const data = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
            Name:userName,
            company:userCompany
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    displayUsers();
    document.querySelector('.add-user-name').value="";
    document.querySelector('.add-user-company').value="";
}

//Write a logic to delete user data when clicked on Delete button
async function DeleteUser(id){
    try{
    const data = await fetch(`${url}/${id}`,{
        method:"Delete",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const users = await data.json();
    console.log(users);
    displayUsers();
    }
    catch(error){
        console.log(error);
    }
}

//Write a logic to edit the data
function EditUser(name,company,id){
    const userList = document.querySelector(".add-user-name");
    userList.value = name;
    const userCompany = document.querySelector(".add-user-company");
    userCompany.value = company; //success 
    const userid = document.querySelector(".add-user-id");
    userid.value = id; //success 
}

//Write a logic to update the data 
async function Updateuser(){
     const userName = document.querySelector('.add-user-name').value;
     const userCompany = document.querySelector('.add-user-company').value;
     const id = document.querySelector('.add-user-id').value;
     console.log(id);
     const data = await fetch(`${url}/${id}`,{
         method:"PUT",
         body:JSON.stringify({
             Name:userName,
             company:userCompany
         }),
         headers:{
             "content-type":"application/json"
         }
     })
     displayUsers();
 }
//Async programming- Day -4 : Promise fetch - request info & request init
// console.log("hello");
url = "https://65349b51e1b6f4c59046d2dd.mockapi.io/users";
// function getData(){
//     console.log("I'm inside get data");
// fetch(url,{
//     method:"GET",
//     headers:{
//         "Content-Type":"application/json"
//     }
// }).then((res)=>res.json())
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// }

// getData();

//Send the data to Server
//HHTP=>Post
// function sendData(){
//    let data = {
//      Name:"Jenny",
//      place:"Gingee",
//      company:"ABT"
//    };
//    fetch(url, {
//     method:"POST",
//     body:JSON.stringify(data),
// //converts the data into a json string
//      headers:{
//         "Content-Type":"application/json"
//     }
//    }).then((res)=>res.json())
//    .then((data)=>console.log(data))
//    .catch((err)=>console.log(err))  
// }
// sendData();

//3. To update the data on exsisting data
// function UpdateData(){
//    let data = {
//       Name:"charu",
//       place:"TVM",
//       company:"cognizant"
//    };
//    fetch(url+"/2",{
//     method:"PUT",
//     body:JSON.stringify(data),
//     headers:{
//         "Content-Type":"application/json"
//     }
//    }).then((res)=>res.json())
//    .then((data)=>console.log(data))
//    .catch((err)=>console.log(err))
// }
// UpdateData();

//Delete data from url
function DeleteData(){
    fetch(url+"/24",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
}
DeleteData();
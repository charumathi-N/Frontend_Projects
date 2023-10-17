//callback hell
//call back you can able to acheive synchronization but it 
//leds to callback hell
var count =10;
var button_click = document.getElementById("button");
button_click.addEventListener("click",()=>{
if(count>0){
console.log(count);
    setTimeout(()=>{
        document.getElementsByClassName("count")[0].innerHTML = count--;
    setTimeout(()=>{
        document.getElementsByClassName("count")[0].innerHTML = count--;
        setTimeout(()=>{
            document.getElementsByClassName("count")[0].innerHTML = count--;
            setTimeout(()=>{
                document.getElementsByClassName("count")[0].innerHTML = count--;
                setTimeout(()=>{
                    document.getElementsByClassName("count")[0].innerHTML = count--;
                    setTimeout(()=>{
                        document.getElementsByClassName("count")[0].innerHTML = count--;
                        setTimeout(()=>{
                            document.getElementsByClassName("count")[0].innerHTML = count--;
                            setTimeout(()=>{
                                document.getElementsByClassName("count")[0].innerHTML = count--;
                                setTimeout(()=>{
                                    document.getElementsByClassName("count")[0].innerHTML = count--;
                                    setTimeout(()=>{
                                        document.getElementsByClassName("count")[0].innerHTML = count--;
                                        setTimeout(()=>{
                                            $("#myModal").modal('show');
                                        },2000);
                                    },2000);
                                },2000);
                            },2000);     
                        },2000);      
                    },2000);
                },2000);    
            },2000);
        },2000);
    },2000);
},2000);
}
})


const x = document.querySelector(".cont");
const e = document.querySelector("d1");
const y = document.getElementById("i1")

for (const key of Object.keys(localStorage)) { 
    let newTask = document.createElement("li"); 
                newTask.innerHTML = "<p>" + key +"</p>";
                let x = document.createElement("button");
                x.innerHTML = "delete";
                newTask.appendChild(x);
                document.querySelector(".taskside").appendChild(newTask);
                x.addEventListener("click",()=>{
                    newTask.remove();
                    localStorage.removeItem(key)
                });
    }

y.addEventListener("click", () => {
    x.style.display = x.style.display === "block" ? "none" : "block"
})



    document.getElementById("addTask").addEventListener("click", function(event){
            event.preventDefault(); 
            
            let taskName = document.getElementById("text1").value; 
            console.log(document.getElementById("text1").value);
            if(taskName) {
                let newTask = document.createElement("li"); 
                newTask.innerHTML = "<p>" + taskName +"</p>";
                localStorage.setItem(taskName,0)
                let x = document.createElement("button");
                x.innerHTML = "delete";
                newTask.appendChild(x);
                document.querySelector(".taskside").appendChild(newTask);
                x.addEventListener("click",()=>{
                    newTask.remove();
                    localStorage.removeItem(taskName)
                });
            }
        });

        let mot = document.getElementById("motive");
        let messeges = ["If you are working on something that you really care about, you dont have to be pushed. The vision pulls you.","Hard work beats talent when talent doesnt work hard.","Striving for success without hard work is like trying to harvest where you havent planted.","Success is the sum of small efforts, repeated day in and day out."] 
        let index = Math.floor(Math.random()*messeges.length);
        let messege = messeges[index];
        mot.innerText = messege;


let handle = document.querySelector(".page");
let burger = document.getElementById("burgercontent");

handle.addEventListener("click" , ()=>{
    burger.style.transform = burger.style.transform === "scale(1)" ? "scale(0)" : "scale(1)"
})


    
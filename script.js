let input = document.getElementById("input")
let list = document.getElementById("list")
input.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        if ((this.value) != ""){
            addItem(this.value)
        this.value = ""
        }
        
    }
})

let addItem = (input)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${input}<i></i>`;

    listItem.addEventListener("click",function(){
        this.classList.toggle("done")
    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove()
    })

    list.appendChild(listItem)
} 
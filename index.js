//select element from html
const inputtdl = document.querySelector(".textarea")
const buttontdl = document.querySelector(".buttoninput")
const listtdl =document.querySelector(".todolist ")

//define function  to add a new to-do item

buttontdl.addEventListener('click', (e) =>{
    e.preventDefault()
    //console.log("clicked")
    //const item = inputtdl.value
    //if(!item){
      //  alert(" send money")
    //}
    //else{
        //console.log("money sent successfully")
    //}

    const itemall = document.createElement("div")
    itemall.classList.add('itemall') //add item class class to div

    const item = document.createElement ("p") //create a new paragraph for the item text
    item.classList.add('item') //add itemlaa class to p element

    item.innerText = inputtdl.value
    itemall.appendChild(item)

    listtdl.appendChild(itemall)

    //create a trahsh button 
    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = "<i class='fa-solid fa-trash'></i>"
    trashbutton.classList.add('trash-button')
    itemall.appendChild(trashbutton)
    
      const checkbutton = document.createElement("button")
    checkbutton.innerHTML = "<i class='fa-solid fa-check'></i>"
    checkbutton.classList.add('check-button')
    itemall.appendChild(checkbutton)
    inputtdl.value=""
}   
)

listtdl.addEventListener('click', (e)=>{
    const item = e.target



    //if the check icon is clicked
    if(item.classList[0]=== 'check-button'){
        const todolist = item.parentElement
        todolist.classList.toggle("checklist")
    }

    if(item.classList[0]=== 'trash-button'){
        const todolist = item.parentElement
        todolist.remove()
    }
}
)

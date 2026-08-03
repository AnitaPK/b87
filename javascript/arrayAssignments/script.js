// 1. to do list 

let toDos = ["Project 1", "Project 2"]

function renderToDos(){
    document.getElementById("lists").innerHTML = toDos.map((task,i)=>`
                                    <li class="mb-2">
                                        <b>${task}</b>
                                        <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>    
                                    </li>
    `).join("")
}


// renderToDos()

function addNewTask(){
    inputTaskElmt = document.getElementById("inputTask")
    newTask = inputTaskElmt.value
    toDos.push(newTask)
    // console.log(toDos)
    renderToDos()
    inputTaskElmt.value = ''
}

function clearALL(){
    toDos = []
    renderToDos()
}

function deleteTask(index){
    // console.log("*************")
    // console.log(toDos,"Before splice")
    toDos.splice(index, 1)
    // console.log(toDos,"After splice")
    renderToDos()
}

window.addEventListener('load', ()=>{
    renderToDos()
})



// 2. Student Marks Calculator 
// 3. Search 
// 4. Filter odd and Even 
// 5. Sort names alphabetically

let namesArray = []
let sortedNames = []
function addNewName(){
    console.log("********")
    inputNameElmt = document.getElementById("inputName")
    newName = inputNameElmt.value 
    namesArray.push(newName)

    document.getElementById("unSortedName").innerHTML = namesArray.map((name)=>`
        <span>${name}</span>
    `)
    inputNameElmt.value =''
}

function SortArray(){
    sortedNames = namesArray.sort()
    document.getElementById("sortedName").innerHTML = sortedNames.map((name)=>`
    <span>${name}</span>
    `)
}
function clearNames(){
    namesArray = []
    sortedNames = []
    document.getElementById("unSortedName").innerHTML = ''
    document.getElementById("sortedName").innerHTML = ''
}
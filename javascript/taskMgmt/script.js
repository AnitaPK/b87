const tasks = [
    {
        id: 101,
        title: "Study basic of Programming",
        description: "Watch shorts or reels on programming",
        status: "Pending"
    },
    {
        id: 102,
        title: "Study Advanced CSS",
        description: "For interview Preperation",
        status: "Completed"
    }]

const titleElmt = document.getElementById("taskTitleInput")
const descriptionElmt = document.getElementById("taskDescriptionInput")

function renderTasks(ts) {

    document.getElementById("renderTasks").innerHTML = ts.map((tsk, i) => `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${tsk.title}</td>
                                <td>${tsk.description}</td>
                                <td>${tsk.status}</td>
                                <td>
                                <button class="btn btn-success" title="Edit task"
                                onclick="EditTask(${tsk.id})">
                                <i class="fa-solid fa-face-frown"></i>
                                </button>
                                <button class="btn btn-danger" title="Delete Task" 
                                onclick="deleteTask(${tsk.id})">
                                <i class="fa-regular fa-face-angry"></i>
                                </button>

                                </td>
                            </tr>
    `).join('')
}

function addNewTask() {

    titleInput = titleElmt.value
    descriptionInput = descriptionElmt.value

    const newTask = {
        id: Date.now(),
        title: titleInput,
        description: descriptionInput,
        status: "Pending"
    }
    // console.log("newTask", newTask)
    const getFromLocalTasks = getFromLocal()
    getFromLocalTasks.push(newTask)
    saveToLocal(getFromLocalTasks)
    renderTasks(getFromLocalTasks)

    titleElmt.value = ''
    descriptionElmt.value = ''
}

function deleteTask(ID) {
    console.log(ID)
    const getFromLocalTasks = getFromLocal()
    index = getFromLocalTasks.findIndex((t) => t.id == ID)
    console.log(index)
    if (index == -1) {
        alert("Task not found")
    } else {
        getFromLocalTasks.splice(index, 1)
    }
    saveToLocal(getFromLocalTasks)
    renderTasks(getFromLocalTasks)
}


function EditTask(ID) {
    const getFromLocalTasks = getFromLocal()

    index = getFromLocalTasks.findIndex((t) => t.id == ID)
    if (index == -1) {
        alert("Task not found")
    } else {
        if (getFromLocalTasks[index].status == "Pending") {
            getFromLocalTasks[index].status = "Completed"
        } else {
            getFromLocalTasks[index].status = "Pending"
        }
    }
    saveToLocal(getFromLocalTasks)
    renderTasks(getFromLocalTasks)
}


function saveToLocal(ts=tasks){
localStorage.setItem("b87Tasks", JSON.stringify(ts))
}

function getFromLocal(){
 return JSON.parse(localStorage.getItem("b87Tasks"))
}




window.addEventListener('load', () => {
    firstGetFromLocal = getFromLocal()

    if(!firstGetFromLocal){
            saveToLocal()
    }
    console.log(firstGetFromLocal)

    renderTasks(firstGetFromLocal)
})
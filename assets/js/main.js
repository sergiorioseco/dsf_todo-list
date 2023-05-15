let tareas = [
    {id: 234, name: "Correr", chek: false },
    {id: 623, name: "Supermercado", chek: false },
    {id: 398, name: "Estudiar", chek: false },
];

sendTareas()


function sendTareas() {
    let html = "";
    const total = document.querySelector('#total');
    const todoList = document.querySelector('#todoList');
    const realizadas = document.querySelector('#realizadas');
    for (let tarea of tareas) {
        if (tarea.chek == 0){
            html += `
            <li class="tarea" id="tarea${tarea.id}">
            <p class="tareaid">${tarea.id}</p>
            <p class="tareaname">${tarea.name}</p>
            <input type="checkbox" onclick="isChek(${tarea.id})">
            <button onclick="borrar(${tarea.id})"> x </button>
            </li>
            `
        }
        else {
            html += `
            <li class="tarea cheked" id="tarea${tarea.id}">
            <p class="tareaid">${tarea.id}</p>
            <p class="tareaname">${tarea.name}</p>
            <input  type="checkbox" onclick="isChek(${tarea.id})" checked>
            <button onclick="borrar(${tarea.id})"> x </button>
            </li>
            `
        }
        };
    todoList.innerHTML = html;
    total.innerHTML = tareas.length;
    realizadas.innerHTML = tareas.filter( tarea => tarea.chek == 1 ).length
};

const btn = document.querySelector('#btnAdd');
btn.addEventListener("click", () => {
    const nuevaTarea = document.querySelector('#nuevaTarea').value;
    tareas.push({id: Date.now()%1000, name: nuevaTarea, chek: false})
    sendTareas()
    })

function borrar(id){
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas.splice(index, 1)
    sendTareas()
    }

function isChek(id){
    for (let tarea of tareas) {
        if (tarea.id == id){
            tarea.chek = !tarea.chek;
        }
    }
    sendTareas()
}

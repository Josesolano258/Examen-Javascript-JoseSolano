
//Script que me permite ingresar al usuario las tareas con su respectiva descripcion de la tarea :)

document.addEventListener("DOMContentLoaded", () => {
    const addTaskButtons = document.querySelectorAll(".add-task-btn");

    addTaskButtons.forEach(button => {
        button.addEventListener("click", () => {
            const column = button.dataset.column;
            const taskTitle = prompt("Ingrese el título de la tarea:");
            const taskDescription = prompt("Ingrese la descripción de la tarea:");

            if (taskTitle && taskDescription) {
                const task = createTaskElement(taskTitle, taskDescription);
                document.querySelector(`#${column}-tasks .task-list`).appendChild(task);
            } else {
                alert("Debe completar todos los campos.");
            }
        });
    });
});

// Funcion que le permite al usuario visualizar los botones de editar y eliminar 

function createTaskElement(title, description) {
    const task = document.createElement("div");
    task.classList.add("task");

    //Aca se almacen los datos y cuando se edita se reescribe el title y la description
    task.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button class="edit-task-btn">Editar</button>
        <button class="delete-task-btn">Eliminar</button>
    `;

// Parte de la funcion que permite editar el titulo de la tarea y la descripcion de la tarea pssss, con validacion para que los campos esten completos si no termina
// y vuelve a empezar

    task.querySelector(".edit-task-btn").addEventListener("click", () => {
        const newTitle = prompt("Editar título de la tarea:", title);
        const newDescription = prompt("Editar descripción de la tarea:", description);

        if (newTitle && newDescription) {
            task.querySelector("h3").textContent = newTitle;
            task.querySelector("p").textContent = newDescription;
        } else {
            alert("Debe completar todos los campos.");
        }
    });

    task.querySelector(".delete-task-btn").addEventListener("click", () => {
        task.remove();
    });

    return task;
}
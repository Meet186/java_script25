let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector('.addBtn');
let todoContainer = document.querySelector(".todoContainer");
let API = "https://68a9c185b115e67576ec01fa.mockapi.io/api/v1/todos";
addBtn.addEventListener('click', postData);

async function fetchData() {
    let response = await fetch(API);
    let data = await response.json();
    if (data) {
        todoContainer.innerHTML = ``;
    }
    data.forEach(obj => {
        let div = document.createElement('div');
        div.className = "todo";
        div.innerHTML = `<p class='paraText'>${obj.text}</p>
        <input id="editInput" type="text" placeholder="Entre Your Task..!!" value='${obj.text}'>
                <div>
                    <button class='deleteBtn'>Delete</button>
                    <button class='editBtn'>Edit</button>
                    <button class='saveBtn'>Save</button>
                </div>`

        let deleteBtn = div.querySelector('.deleteBtn');
        let editBtn = div.querySelector('.editBtn');
        let paraText = div.querySelector('.paraText');
        let editInput = div.querySelector('#editInput');

        let saveBtn = div.querySelector('.saveBtn');
        deleteBtn.addEventListener("click", (event) => {
            deleteData(obj.id);

        })
        editBtn.addEventListener("click", (event) => {
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline';
            paraText.style.display = 'none';
            editInput.style.display = 'inline';
        })
        saveBtn.addEventListener("click", async (event) => {
            let newTextValue = editInput.value;
            await updateData(obj.id, newTextValue)
            editBtn.style.display = 'inline';
            saveBtn.style.display = 'none';
            paraText.style.display = 'inline';
            editInput.style.display = 'none';
        })
        todoContainer.append(div);
    });
}
async function postData() {
    let value = taskInput.value;
    let objData = {
        text: value.trim()
    }
    let response = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': " application/json",
        },
        body: JSON.stringify(objData)
    });
    if (response.status === 201) {
        fetchData();
        taskInput.value = ''; // clear the input value . 
    }
}
async function updateData(id, value) {
    let objData = {
        text: value.trim()
    }
    let response = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': " application/json",
        },
        body: JSON.stringify(objData)
    });
    if (response.status === 200) {
        fetchData();
        taskInput.value = ''; // clear the input value . 
    }
    // console.log(response);
}
async function deleteData(id) {
    let response = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    });
    if (response.status == 200) {
        fetchData();
    }
}
fetchData();


const userDiv = document.querySelector(".users");
const inputBox = document.getElementById("inputBox");
const userData = [
  {
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    "name": "paul1",
    "email": "paul1@example.com"
  },
  {
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAIUlEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBIgNAC84DSX3OaeXAAAAAElFTkSuQmCC",
    "name": "laura2",
    "email": "laura2@example.com"
  },
  {
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJ0lEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBIgNAIMAAAC2AAGUDoAqAAAAAElFTkSuQmCC",
    "name": "kevin3",
    "email": "kevin3@example.com"
  },
  {
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    "name": "alex4",
    "email": "alex4@example.com"
  },
  {
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAIUlEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBIgNAC84DSX3OaeXAAAAAElFTkSuQmCC",
    "name": "brenda5",
    "email": "brenda5@example.com"
  },
  {
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJ0lEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBIgNAIMAAAC2AAGUDoAqAAAAAElFTkSuQmCC",
    "name": "roger6",
    "email": "roger6@example.com"
  },
  // ...continues to 50 users
];
function showUser(userData) {
    userData.forEach(element => {
        const div = document.createElement("div");
        div.className = `userItem`;
        div.innerHTML = `
                    <img src="${element.url}"
                    alt=" error">
                <div class="userDetails">
                    <h3>${element.name}</h3>
                    <p>${element.email}</p>
                </div>
        `
       userDiv.append(div);
    });
}
 function serchUser(){
    const serchValue = inputBox.value;
    userDiv.innerHTML = ``;
    let filterData = userData.filter((el)=>{
        if(el.name.toLocaleLowerCase().includes(serchValue.toLocaleLowerCase())){
            return el;  
        }
    });
    showUser(filterData)
}
showUser(userData);
inputBox.addEventListener("input", serchUser);
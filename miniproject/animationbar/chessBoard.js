const ROOT_DIV = document.querySelector(".root");


function createBoard() {
    let chessData = [];
    for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            if ((i + j) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }
            row.push(square);
        }

        chessData.push(row);
    }
    return chessData;
}

function initGame(data) {
    data.forEach(element => {
        const row = document.createElement("div");
        row.classList.add("row");
        ROOT_DIV.append(row)
        element.forEach((el) => {
            row.append(el)

        })


    });

}


initGame(createBoard());

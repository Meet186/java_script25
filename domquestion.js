// 1-> create a paragraph with text "me tumse pyar nahi karti hun" add black background colour to black and text cloour to green.
let p = document.createElement('p');
p.innerHTML = "me tumse pyar nahi karti hun";
p.style.background = `rgb(${0}, ${0}, ${0})`;
p.style.color = 'green';
document.body.append(p);

// SELECTION
// let a = document.getElementsByTagName('div');
// let b = document.getElementById("para");
// let c = document.getElementsByClassName("h1");
// let d = document.querySelector('div');
// let e = document.querySelectorAll('.h1');
// MANAPULATION
let heading = document.querySelectorAll('h1')[1];
let name = "Meet";
// console.log(heading.tagName);
// console.log(heading.nodeName);
// console.log(heading.textContent); // give all spaces as like a node also
// console.log(heading.innerText); // give only revelent text
// heading.innerText = `${name}`;
// console.log(heading.firstChild);
// console.log(heading.children);

// INERT  ELEMENT
// let div = document.querySelector('div');
// let el = document.createElement('p');
// el.innerHTML = "new paragraph";
// // div.append(el);
// // div.prepend(el);
// // div.after(el);
// // div.before(el);
// // div.insertAdjacentElement("afterend",el); {cover all 4 method mention above }
// // div.insertAdjacentHTML("beforeend","meet");
// // DELETION OR REMOVE
// let p = div.children[1];
// // p.remove();
// // PARENT NODE 
// // console.log(p.parentElement);
// // console.log(p.parentNode.firstChild);
// // REPLACE CHILD 
// let newEl = document.createElement("h1");
// // div.replaceChild(newEl,p);
// // REMOVE CHILD 
// // div.removeChild(p);
// WORKING ON ATTRIBUTE 
let div = document.querySelector('.p1');
// console.log(div.attributes.class.value);
// console.log(div.getAttribute('class'));
// div.setAttribute('class','meet');
let prevVal = div.getAttribute('class');
// console.log(prevVal);
div.setAttribute('class',`${prevVal} meet`);
// console.log(div);








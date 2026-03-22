import {fruits} from "./fruits.js";
const list = document.getElementById("fruit-list");


    fruits.forEach(fruit => {
        const item = document.createElement("div");
        item.className = "item";
        
        item.innerHTML = `
        
        <li class = "fruit-item">
        <a href="index2.html?fruit=${fruit.name}">
        <img class="imageClass" src=${fruit.image}>
        <h3 class="text">${fruit.name}</h3>
        </a>
        </li>
        `;
        
        list.appendChild(item);
    })

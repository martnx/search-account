const accountList = [
    "martin:martin23", 
    "johndoe:420420", 
    "joshmendoza:mendoza2024", 
    "mark:0942069", 
    "angelo:angelo2002"];

const para = document.querySelector("#para-display");
const input = document.querySelector("input-search");
const btn = document.querySelector("#btn");
const userDisplay = document.querySelector("#user-para");
const passDisplay = document.querySelector("#pass-para");

btn.addEventListener("click", test);

function test(){
    console.log("the button is clicked");
}
//Account data list
const accountList = [
    "user:admin",
    "martin:martin23", 
    "johndoe:420420", 
    "joshmendoza:mendoza2024", 
    "mark:0942069", 
    "angelo:angelo2002"];

const para = document.querySelector("#para-display");
const input = document.querySelector("#input-search");
const btn = document.querySelector("#btn");
const userDisplay = document.querySelector("#user-para");
const passDisplay = document.querySelector("#pass-para");

// Test Code
// for(x of accountList){
//     x = x.split(":");
//     console.log(`Username: ${x[0]} \nPassword: ${x[1]}`);
// }

//This code block activate when the button is clicked
btn.addEventListener("click", () => {
    const searchAccount = input.value.toLowerCase();
    let accountFound = false;
    // console.log(searchAccount);
    input.value = "";
    input.focus();
    para.textContent = "";
    userDisplay.textContent = "";
    passDisplay.textContent = "";

    // for(x of accountList){
    // x = x.split(":");
    // console.log(`Username: ${x[0]} \nPassword: ${x[1]}`);
    // }

    // Checking the condition if account on the list 
    for(splitList of accountList){
        splitList = splitList.split(":");
        console.log(`Username: ${splitList[0]} \nPassword: ${splitList[1]}`);


        if(searchAccount === splitList[0]){
            console.log(`Username: ${splitList[0]} \nPassword: ${splitList[1]}`);
            para.textContent += "Account found!";
            userDisplay.textContent += "Username:  " + splitList[0];
            passDisplay.textContent += "Password: "+ splitList[1];
            accountFound = true;
            break;   
        }
        if(searchAccount == ""){
            para.textContent = "Input valid value only!"
            userDisplay.textContent = "";
            passDisplay.textContent = "";
        }
    }
});

// console.log('hello world');



// const arr = ['mango' , 'orange' , 'watermelon' , 'melon' , 'grapes'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

var input = document.querySelector("#input");

var array = [];

var rendArr = document.querySelector("#renderArr")

function renderArr() {
    rendArr.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        
        rendArr.innerHTML += `<h3>${array[i]}</h3>
        <button onclick="deleteTxt()">Delete</button>
        <button onclick="editTxt()">Edit</button>
        `
    }

    
}

function submit() {
    // console.log("Hello World");
    array.push(input.value)
    
    renderArr()
    input.value = ""   
}

function deleteTxt(index) {
    array.splice(index,1)
    renderArr()
}

function editTxt(index) {
    // console.log("editTxt")  
    var updateVal = prompt("Change your Value!")
    array.splice(index , 1 , updateVal)
    renderArr()      
}

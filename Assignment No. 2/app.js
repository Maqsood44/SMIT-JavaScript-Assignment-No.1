// TASK NO. 1:
// function add(num)
// {
//     return function closureFunction(x)
//     {
//         return x + num
//     }
// }
// let result = add(5)
// console.log(result(45))


// TASK NO. 2:
//  This function search value in array and return true if value found else return false
// function searArray(array, value) {
//     // check whether array is empty or not
//     if (array.length === 0) {
//        return false
//     }
//     // check the first index of array
//     else if (array[0] === value) {
//         return true
//     }
//     else {
//         // function call itself to check for all index in array
//         return searArray(array.slice(1), value)
//     }
// }

// let myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let searchNumbar = 70
// let result = searArray(myArray, searchNumbar)
// console.log(result)


// TASK NO. 3:
// function addParagraphToHtml(text) {
//     // This line create a paragraph element in document window
//     let createel = document.createElement("p")
//     // Insert text in to paragraph element
//     createel.textContent = text
//     // appent paragraph in body
//     document.body.appendChild(createel)
// }

// let paragraphText = "This is a new paragraph"
// addParagraphToHtml(paragraphText)


// TASK NO. 4
// function addNewListItem(text) {
//     const newListItem = document.createElement('li');
//     newListItem.textContent= text;
//     const ul = document.getElementById("list");
//     ul.appendChild(newListItem);
//   }
//   addNewListItem('List item added through javaScript');

// Q No. 5:
// function changeBgColor(el, color)
// {
// change background color
//     el.style.backgroundColor = color
// }
// target the paragraph to change background color
// let targetEl =: document.getElementById("bgchange")
// let bgcolor = "green"
// changeBgColor(targetEl, bgcolor)


// Q No. 6:
// function saveObjToLocalStorage(key, obj) {
// this line push the an object to local storage
//     localStorage.setItem(key, JSON.stringify(obj))
// }

// let studentData = {
//     rollNo : 123,
//     sname : "Maqsood Ahmad",
//     subject: "JavaScript"
// }

// saveObjToLocalStorage("Student Data", studentData)


// Q No. 7: 
// function RDfLFT(key)
// {
//     // retrieve data from local storage.
//     let getData= localStorage.getItem(key)
//     // convert the retrieve data into objec
//     return JSON.parse(getData)
// }

// let  retrieveData =RDfLFT("Student Data")
// console.log(retrieveData);

// Q No. 8:
// function saveObjectPropertiesToLocalStorage(obj) {
//     // Save each property to localStorage
//     Object.entries(obj).forEach(([key, value]) => {
//         localStorage.setItem(key, JSON.stringify(value));
//     });

//     // Retrieve the object from localStorage and return it as a new object
//     const newObj = {};
//     Object.keys(obj).forEach((key) => {
//         const storedValue = localStorage.getItem(key);
//         newObj[key] = JSON.parse(storedValue);
//     });
//     return newObj;
// }
// let studentData = {
//         rollNo : 123,
//         sname : "Maqsood Ahmad",
//         subject: "JavaScript"
//     }
// const newObj = saveObjectPropertiesToLocalStorage(studentData);
// console.log(newObj)


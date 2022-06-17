// 1 - Get the HTML element

let input = document.querySelector('#myInput')
let addBtn = document.querySelector('.addBtn')
let list = document.getElementById('myUL')


// 2 - Create the addTodo function
function addTodo() {
    // 3 - Get the input value
    let text = document.createTextNode(input.value)
    // 4 - Create the li
    let li = document.createElement("li")
    // 5 - add the text to li
    li.appendChild(text)
    // 6 - add the li to ul
    if (input.value) {
        list.appendChild(li)
    }
    else {
        alert('please enter a todo text')
    }
    // 7- Clear the input
    input.value = ''

    // 8 - Create the button remove
    let removeBtn = document.createElement('button')
    // 9 - Add a value to the remove button
    removeBtn.innerHTML = 'X'
    // 10 - add the removeBtn to li 
    li.appendChild(removeBtn)
    // 11 - give the removeBtn button a class
    removeBtn.setAttribute('class', 'removeBtn')
    // 12 - removeBtn event listener
    removeBtn.addEventListener('click', function () {
        removeBtn.parentElement.remove()
    })
    li.addEventListener('mouseover', function () {
        li.style.backgroundColor = 'rgb(173, 173, 173)'
    })
    li.addEventListener('mouseout', function () {
        li.style.backgroundColor = 'lightgray'
    })
    li.addEventListener('click', function () {
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none'
        }
        else {
            li.style.textDecoration = 'line-through'
            li.style.fontWeight='normal'
        }
    })


}





addBtn.addEventListener('click', addTodo)
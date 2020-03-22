const elems = document.getElementsByClassName('color') // returns array of elements.

for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = 'red' // loops through the array and assigns the background color to each element.
}
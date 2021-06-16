// ## 1.  
// * Get the children of the element with id `wrapper` and print them to the console as a list.

const wrapper = document.querySelector("#wrapper")
 console.log("This is the wrapper Id:", wrapper)

 console.log("Here are wrapper's children:", wrapper.children)

//==>> * Iterate over them and print their children to the console, as well as how many they are.
function childrenCensus() {
    const children = document.getElementById("wrapper").childElementCount
    console.log(`There number of child elements in the wrapper Id are: ${children}`)
    
} 
childrenCensus()
//==========================
// 2 ==>> * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.

function childClassCount() {
    let maxClasses = 0
    let maxClassName;
const target = document.getElementById("wrapper")
for (let index = 0; index < target.children.length; index++) {
    const element = target.children[index];
    //console.log(element)
    if (element.classList.length>maxClasses) {
    maxClasses = element.classList.length
    maxClassName= element
     
  }

}
console.log(`The largest child element has ${target.children.length} classes`)
console.log("The child element with largest number of classes:",maxClassName)
}

childClassCount()






let fruits = ["Apples", "Oranges", "Pears", "Bananas"]

for(let i = 0; i <= 3; i++) {
    console.log(fruits[i]);
}

fruits.unshift("Grapes")
console.log(fruits)

fruits.push("Strawberries")
console.log(fruits)

const someFruit = fruits.pop("Oranges")
console.log(fruits)
console.log(someFruit)

for (let fruit of fruits) {
    console.log(fruit)
}

console.log("\n \n \n")

fruits.forEach((fruit) => {
    fruit = fruit + "_fruit"
    console.log(fruit)
})

console.log("\n \n \n")

const todos = [
    {
      id: 1,
      title: "take out the trash",
      completed: true,
    },
    {
      id: 2,
      title: "feed the dogs",
      completed: false,
    },
    {
      id: 3,
      title: "go to the bank",
      completed: true,
    },
  ];
for (let todo of todos) {
    const doneText = todo.completed ? "" : "not";
    console.log(`${todo.title} task is ${doneText} completed`);
}
console.log(todos);

console.log("\n \n \n");

const getCompletedTodos = (ourlist) => {
    return ourlist.filter((todo) => {
        return todo.completed == true
    });
};
console.log(getCompletedTodos(todos));

console.log("\n \n \n");

// if statement are in the same format as is C++

// Switch statments are the same as C++
const num = 10
switch (num) {
    case 1:
        console.log("num is 1")
    case 10:
        console.log("num is 10")
    default:
        console.log("We def got a number")
}

console.log("\n \n \n")

//
//
// working with high order array functions
const array1 = [1,2,3,4,5,6,7,8];

const filteredArray = array1.filter( (x) =>{
    return x % 2 == 0;
});
console.log(filteredArray);
console.log("\n \n \n")

const array2 = [6,3,5,2,7,8,4,9];

const sortedArray = array2.sort( (a,b) => {
    return a-b;
});
console.log(sortedArray)
console.log("\n\n\n")
// 
// 
// working with functions by logging today's date with console
function logDate() {
    console.log(new Date());
}
logDate();
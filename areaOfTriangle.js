// write a funcition that takes in a array of length 3,
// and calculate the area of a triangle.

// area = (b*h)/2

function areaOfTriangle(arr) {
    base = sortedSides[0];
    height = sortedSides[1];
    return base * height * 0.5;
}

let sides = [9,6,3]
// sort the sides to have the two smallest in the front
// those two sides are the height & base, the last one is the hypotenuse
const sortedSides = sides.sort((a,b) => {
    return a-b;
});

console.log(areaOfTriangle(sortedSides))
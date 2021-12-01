//Square

function squarePerimeter(side) {

    return side * 4;

}




function squareArea(side) {

    return side * side;

}

function calculateSquarePerimeter() {
    const input = document.getElementById("SquareInput")
    const value = input.value;

    const perimeter = squarePerimeter(value);

    document.getElementById("squareValue").innerHTML = perimeter + "cm";
}

function calculateSquareArea() {
    const input = document.getElementById("SquareInput")
    const value = input.value;

    const area = squareArea(value);
    document.getElementById("squareValue").innerHTML = area + "cm²";
}

//Square

//Triangle

function trianglePerimeter(sideA, sideB, base) {

    return sideA + sideB + base;

}



function triangleArea(base, height) {

    return (base * height) / 2;

}

function calculatePerimeterTriangle() {
    const input = document.getElementById("TriangleInputPerimeter");

    const inputValue = input.value.split(",")
    const sideA = parseInt(inputValue[0])
    const sideB = parseInt(inputValue[1])
    const base = parseInt(inputValue[2])
    const perimeter = sideA + sideB + base

    document.getElementById("triangleValue").innerHTML = perimeter + "cm";


}


function calculateAreaTriangle() {
    let input = document.getElementById("TriangleInputArea");
    const inputValue = input.value.split(",")
    const base = parseInt(inputValue[0])
    const height = parseInt(inputValue[1])
    const area = triangleArea(base, height)

    document.getElementById("triangleValue").innerHTML = area + "cm²";
}

//triangle

//Circle

function circleDiameter(radius) {
    return radius * 2;
}


const PI = Math.PI;


function circlePerimeter(radius) {
    const diameter = circleDiameter(radius);
    return diameter * PI;
}

function circleArea(radius) {
    return (radius * radius) * PI;
}

function calculateCirclePerimeter() {
    const input = document.getElementById("CircleInput")
    const value = input.value;

    const perimeter = circlePerimeter(value)
    document.getElementById("circleValue").innerHTML = perimeter.toFixed(2) + "cm"
}

function calculateCircleArea() {
    const input = document.getElementById("CircleInput");
    const value = input.value;

    const area = circleArea(value)
    document.getElementById("circleValue").innerHTML = area.toFixed(2) + "cm²"
}

//Circle
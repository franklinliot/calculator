num1 = ""
array = []
occDott = 0
document.getElementById("demo").innerHTML = "0"


function zero() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "0"
    document.getElementById("demo").innerHTML = array.join("") + num1;
}


function one() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "1";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function two() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "2";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function three() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "3";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function four() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "4";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function five() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "5";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function six() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "6";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function seven() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "7";
    if (num1 != 26061997) {
        if (array != "") {
            document.getElementById("demo").innerHTML = array.join("") + num1;
        } else {
            document.getElementById("demo").innerHTML = num1;
        }
    } else {
        document.getElementById("demo").innerHTML = "you smell";
    }
}

function eight() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    num1 += "8";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function nine() {
    if (array.length === 1) {
        num1 = array[0]
        array.pop()
    }
    if (array[1] === "=") {
        console.log("coucou")
    }
    num1 += "9";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function dot() {
    var occDott = Number(num1.search("."));
    console.log(occDott)
    if (occDott === 1) {} else {
        if (array.length === 1) {
            num1 = array[0]
            array.pop()
        }
        num1 += ".";
        if (array != "") {
            document.getElementById("demo").innerHTML = array.join("") + num1;
        } else {
            document.getElementById("demo").innerHTML = num1;
        }
    }
}

function PlusMinus() {
    if (num1 != 0) {
        num1 *= "-1";
        if (array != "") {
            document.getElementById("demo").innerHTML = array.join("") + num1;
        } else {
            document.getElementById("demo").innerHTML = num1;
        }
    }
}

function percentage() {
    if (num1 != 0) {
        clearNum1()
        array[0] /= 100;
        document.getElementById("demo").innerHTML = array.join("");
    } else {
        array[0] *= 0.01;
        document.getElementById("demo").innerHTML = array.join("")
    }
}

function clearNum1() {
    if (num1 != 0) {
        num1 = Number(num1)
        array.push(num1)
        num1 = "";
    }
}

function add() {
    clearNum1()
    if (array[1] === "+") {
        array[0] += array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "-") {
        array[0] -= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "*") {
        array[0] *= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "/") {
        array[0] /= array[2]
        array.pop()
        array.pop()
    }
    document.getElementById("demo").innerHTML = array.join("") + "+";
    array.push("+")
}

function subtract() {
    clearNum1()
    if (array[1] === "+") {
        array[0] += array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "-") {
        array[0] -= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "*") {
        array[0] *= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "/") {
        array[0] /= array[2]
        array.pop()
        array.pop()
    }
    document.getElementById("demo").innerHTML = array.join("");
    array.push("-")
}

function multiply() {
    clearNum1()
    if (array[1] === "+") {
        array[0] += array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "-") {
        array[0] -= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "*") {
        array[0] *= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "/") {
        array[0] /= array[2]
        array.pop()
        array.pop()
    }
    document.getElementById("demo").innerHTML = array.join("");
    array.push("*")
}

function divide() {
    clearNum1()
    if (array[1] === "+") {
        array[0] += array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "-") {
        array[0] -= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "*") {
        array[0] *= array[2]
        array.pop()
        array.pop()
    } else if (array[1] === "/") {
        array[0] /= array[2]
        array.pop()
        array.pop()
    }
    document.getElementById("demo").innerHTML = array.join("");
    array.push("/")
}

function clearArray() {
    array.pop()
    array.pop()
    document.getElementById("demo").innerHTML = "0";
    num1 = "";
}

function result() {
    if (array.length === 0) {
        document.getElementById("demo").innerHTML = num1;
    } else {
        clearNum1()
        if (array[1] === "+") {
            array[0] += array[2]
        } else if (array[1] === "-") {
            array[0] -= array[2]
        } else if (array[1] === "*") {
            array[0] *= array[2]
        } else {
            array[0] /= array[2]
        }
        array.pop()
        array.pop()
        num1 = array[0]
        array.pop()
        document.getElementById("demo").innerHTML = num1
    }
}
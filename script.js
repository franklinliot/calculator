num1 = ""
array = []

function zero() {
    num1 += "0"
    document.getElementById("demo").innerHTML = array.join("") + num1;
}


function one() {

    num1 += "1";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function two() {
    num1 += "2";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function three() {
    num1 += "3";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function four() {
    num1 += "4";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function five() {
    num1 += "5";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function six() {
    num1 += "6";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function seven() {
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
    num1 += "8";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function nine() {
    if (array[1] === "=") {
        console.log ("coucou")
    }
    num1 += "9";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function dot() {
    num1 += ".";
    if (array != "") {
        document.getElementById("demo").innerHTML = array.join("") + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
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
    } else {
        array[0] *= -1;
        document.getElementById("demo").innerHTML = array.join("")
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

function result() {
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
    } else {
        array[0] /= array[2]
        array.pop()
        array.pop()
    }
    document.getElementById("demo").innerHTML = array.join("");
}

function clearArray() {
    array.pop()
    array.pop()
    document.getElementById("demo").innerHTML = "0";
    num1 = "";
}
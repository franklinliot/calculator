num1 = ""
array = []

function zero() {
    num1 += "0"
    document.getElementById("demo").innerHTML = array + num1;
}

function one() {
    num1 += "1";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function two() {
    num1 += "2";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function three() {
    num1 += "3";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function four() {
    num1 += "4";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function five() {
    num1 += "5";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function six() {
    num1 += "6";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function seven() {
    num1 += "7";

    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function eight() {
    num1 += "8";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function nine() {
    num1 += "9";
    if (array != "") {
        document.getElementById("demo").innerHTML = array + num1;
    } else {
        document.getElementById("demo").innerHTML = num1;
    }
}

function clearNum1() {
    num1 = Number(num1)
    array.push(num1)
    num1 = "";
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
    }
    document.getElementById("demo").innerHTML = array + "+";
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
    }
    document.getElementById("demo").innerHTML = array;
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
    }
    document.getElementById("demo").innerHTML = array;
    array.push("*")
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
    } else {
        array[0] *= array[2]
        array.pop()
        array.pop()
    }
    document.getElementById("demo").innerHTML = array;
    num1 = "";
}

function clearArray() {
    array.pop()
    array.pop()
    document.getElementById("demo").innerHTML = "0";
    num1="";
}
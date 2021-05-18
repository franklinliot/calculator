num1 = 0
array = []


function zero() {
    num1 += 0
}

function one() {
    num1 += 1
}

function two() {
    num1 += 2
}

function three() {
    num1 += 3
}

function four() {
    num1 += 4
}

function five() {
    num1 += 5
}

function six() {
    num1 += 6
}

function seven() {
    num1 += 7
}

function eight() {
    num1 += 8
}

function nine() {
    num1 += 9
}

function clearNum1() {
    if (num1 != 0) {
        num1 = Number(num1)
        array.push(num1)
        num1 = 0;
    }
}

function add() {
    clearNum1()
    if (array[1] === "+") {
        array[0] += array[2]
        array.pop()
        array.pop()
    }
    array.push("+")
}

function subtract() {
    clearNum1()
    if (array[1] === "-") {
        array[0] -= array[2]
        array.pop()
        array.pop()
    }
    array.push("-")
}

function multiply() {
    clearNum1()
    if (array[1] === "*") {
        array[0] *= array[2]
        array.pop()
        array.pop()
    }
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
    console.log(array)
    num1 = 0;
}







/*
  function askNum() {
      x = Number(prompt())
      y = Number(prompt())
  }

  function calculator() {
      askNum()
      let type = prompt()
      if (type === "add") {
          result = x + y;
          console.log(result);
      } else if (type === "subtract") {
          result = x - y;
          console.log(result);
      } else {
          result = x * y;
          console.log(result);
      }

  }
*/
let n1 = Number(prompt("Type first number"))
let n2 = Number(prompt("Type second number"))
let option = Number(prompt("Which operation do you want? 1 - Sum 2 - Subtraction 3 - Multiplication 4 - Division"))

switch (option){

    case 1:
        let sum = n1 + n2
        alert(`The sum between ${n1} and ${n2} is ${sum}`)
        break

    case 2:
        let subtraction = n1 - n2
        alert(`The subtraction between ${n1} and ${n2} is ${subtraction}`)
        break

    case 3:
        let multiplication = n1 * n2
        alert(`The multiplication between ${n1} and ${n2} is ${multiplication}`)
        break

     case 4:
        let division = n1 / n2
        alert(`The division between ${n1} and ${n2} is ${division}`)
        break

    default:
        alert("Please, Select valid option")
        break
}
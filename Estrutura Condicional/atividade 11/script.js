let grade1 = Number(prompt("What was your first grade?"))
let grade2 = Number(prompt("What was your second grade?"))
let average = (grade1 + grade2) / 2

if(average >= 6){
    alert("You have been approved!")
}

else if (average == 5){
    "You have in recuperation"
}

else if (average < 5){
    alert("You haven't been approved")
}

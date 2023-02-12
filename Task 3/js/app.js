let firstSalary = prompt('Enter first month salary: ');

let secondSalary = prompt('Enter second month salary: ');

let salary = +firstSalary + +secondSalary;

alert(`Your salary for 2 months is: ${salary}$`);

let salaryBonus = ++salary;

alert(`You have extra bonus! Your total salary was: ${salary}$ it's increase for 1$ and now it is: ${salaryBonus}$`);

if(salaryBonus >= 2000){
    alert(`Will you work next? true`)
}
else{
    alert(`Will you work next? false`)
}
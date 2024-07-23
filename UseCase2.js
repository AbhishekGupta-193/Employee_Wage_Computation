//USE CASE 2 (Calculate Daily employee wage (assume wage per hour is 20, assume full day hour is 8))

let total_worked_days=5;

function DailyEmployeeWage(){
    return total_worked_days*8*20;
}

const EmpWage=DailyEmployeeWage();
console.log(EmpWage);
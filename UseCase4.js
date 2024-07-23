//UseCase 4 (Solving using switch case statement (no branch needed))

function CheckAttendanceUsingSwitch(){
    const status = Math.floor(Math.random()*2);;

    switch(status){
        case 0:
            return "Absent";
        case 1:
            return "Present";
        default:
            return "Invalid";
    }
}

const AttendanceStatus= CheckAttendanceUsingSwitch();
console.log("Employee's Attendance Status is :",AttendanceStatus);
//USECASE 1 (Check employee is present or absent (use random for attendance check))

function CheckAttendance(){
    const status=Math.floor(Math.random()*2);
    if(status == 1)return "Present";
    else return "Absent";
}
const AttendanceStatus= CheckAttendance();
console.log("Employee is :",AttendanceStatus);
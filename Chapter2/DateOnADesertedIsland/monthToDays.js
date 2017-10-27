function monthName(monthNum){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[monthNum-1];
}

function monthToDays(monthNum){

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    switch(months[monthNum-1]){
        case "January":
            return 31;
        case "February":
            return 28;
        case "March":
            return 31;
        case "April":
            return 30;
        case "May":
            return 31;
        case "June":
            return 30;
        case "July":
            return 31;
        case "August":
            return 31;
        case "September":
            return 30;
        case "October":
            return 31;
        case "November":
            return 30;
        case "December":
            return 31;
    }
}

function getNumDaysInMonth(monthNum){
    if (monthNum < 1 || monthNum > 12){
        return "Invalid month number."
    }
    console.log("There are " + monthToDays(monthNum) + " days in " + monthName(monthNum) );
}

getNumDaysInMonth(12)

// adapted from monthToDays2()
// to print month and number of days in month
function getNumDaysInMonth(monthNum){

    var months = [
            ["January", 31],
            ["February", 28],
            ["March", 31],
            ["April", 30],
            ["May", 31],
            ["June", 30],
            ["July", 31],
            ["August", 31],
            ["September", 30],
            ["October", 31],
            ["November", 30],
            ["December", 31]
        ];

    if (monthNum < 1 || monthNum > 12){
        return "Invalid month number."
    }
    else {
        return "There are " + months[monthNum-1][1] + " days in " + months[monthNum-1][0];
    }

}

getNumDaysInMonth(7)

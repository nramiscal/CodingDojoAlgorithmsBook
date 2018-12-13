function isLeapYear(year){
    if (year % 400 == 0){
        return true;
    }
    if (year % 4 == 0 || year % 100 != 0){
        return true;
    }
    return false;
}

var leapYears = [2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096];

var outcome = [];

function testIsLeapYear(leapYears){
    for (year in leapYears){
        outcome.push(isLeapYear(year))
    }
    return outcome;
}

testIsLeapYear(leapYears)

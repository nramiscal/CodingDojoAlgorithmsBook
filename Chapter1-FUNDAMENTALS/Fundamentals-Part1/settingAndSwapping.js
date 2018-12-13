function settingAndSwapping(){
    var myNumber = 42;
    var myName = "Nina";
    console.log(myNumber + " , " + myName);
    var temp = myNumber;
    myNumber = myName;
    myName = temp;
    console.log(myNumber + " , " + myName);
}

settingAndSwapping()

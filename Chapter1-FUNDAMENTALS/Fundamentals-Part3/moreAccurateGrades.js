function moreAccurateGrades(score){
    var grade;
    if (score > 100){
        return "Invalid score.";
    }
    if (score < 60){
        grade = "F";
    }
    else if (score <= 62){
        grade = "D-"
    }
    else if (score < 68){
        grade = "D";
    }
    else if (score < 70){
        grade = "D+";
    }
    else if (score <= 72){
        grade = "C-";
    }
    else if (score < 78){
        grade = "C";
    }
    else if (score < 80){
        grade = "C+";
    }
    else if (score <= 82){
        grade = "B-";
    }
    else if (score < 88){
        grade = "B";
    }
    else if (score < 90){
        grade = "B+";
    }
    else if (score <= 92){
        grade = "A-";
    }
    else if (score <= 100){
        grade = "A";
    }
    console.log("Score: " + score + " Grade: " + grade);

}

moreAccurateGrades(91)

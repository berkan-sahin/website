function calculateFinal() {
    const gradeKey = { "D": 35, "Dplus": 45, "Cminus": 50, "C": 55, "Cplus": 60, "Bminus": 65, "B": 70, "Bplus": 75, "Aminus": 80, "A": 85 };

    document.getElementById("reqScores").style.visibility = "visible";
    document.getElementById("FZ").style.visibility = "hidden";
    document.getElementById("fDeal").style.visibility = "hidden";

    const midtermScore = parseFloat(document.getElementById("mtScore").value);
    const hwAverage = parseFloat(document.getElementById("hwAvg").value);

    if (isNaN(midtermScore) || isNaN(hwAverage)
        || midtermScore > 100 || midtermScore < 0
        || hwAverage > 100 || hwAverage < 0) {
        Object.keys(gradeKey).forEach(letterGrade => document.getElementById(letterGrade).innerText = "?");
        return;
    }

    const mtContrib = midtermScore * 0.34;
    const hwContrib = hwAverage * 0.21;

    if (hwContrib + mtContrib < 25) {
        document.getElementById("reqScores").style.visibility = "hidden";
        document.getElementById("FZ").style.visibility = "visible";
        return;
    }



    Object.keys(gradeKey).forEach(letterGrade => {
        let requiredScore = (gradeKey[letterGrade] - hwContrib - mtContrib) * 100 / 45;



        if (requiredScore < 0) {
            document.getElementById(letterGrade).innerText = "∅";
        } else if (requiredScore > midtermScore) {
            // Recalculate for final deal 
            requiredScore = (gradeKey[letterGrade] - hwContrib) * 100 / 79;

            if (requiredScore > 2 * midtermScore) {
                requiredScore = (gradeKey[letterGrade] - hwContrib - 2 * mtContrib) * 100 / 45; 
            }

            if (requiredScore > 100) {
                document.getElementById(letterGrade).innerText = "∞";
            }
            else {
                document.getElementById(letterGrade).innerText = Math.ceil(requiredScore) + "*";
                document.getElementById("fDeal").style.visibility = "visible";
            }

        } else if (requiredScore > 100)
            document.getElementById(letterGrade).innerText = "∞";
        else
            document.getElementById(letterGrade).innerText = Math.ceil(requiredScore);
    });

}
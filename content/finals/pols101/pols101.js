function calculateFinal() {
    const gradeKey = { "D": 50, "Dplus": 56, "Cminus": 61, "C": 66, "Cplus": 71, "Bminus": 76, "B": 81, "Bplus": 86, "Aminus": 91, "A": 96 };

    document.getElementById("reqScores").style.visibility = "visible";
    document.getElementById("FZ").style.visibility = "hidden";

    const midterm1Score = parseFloat(document.getElementById("mt1Score").value);
    const midterm2Score = parseFloat(document.getElementById("mt2Score").value);

    if (isNaN(midterm1Score) || isNaN(midterm2Score)
        || midterm1Score > 100 || midterm1Score < 0
        || midterm2Score > 100 || midterm2Score < 0) {
        Object.keys(gradeKey).forEach(letterGrade => document.getElementById(letterGrade).innerText = "?");
        return;
    }

    // assume no fz for now

    const mt1Contrib = midterm1Score * 0.3;
    const mt2Contrib = midterm2Score * 0.3;

    const currentTotal = mt1Contrib + mt2Contrib;

    Object.keys(gradeKey).forEach(letterGrade => {
        let requiredScore = (gradeKey[letterGrade] - currentTotal) * 2.5;
        console.log(`${letterGrade}: ${requiredScore}`)

        if (requiredScore < 0)
            document.getElementById(letterGrade).innerText = "∅";
        else if (requiredScore > 100)
            document.getElementById(letterGrade).innerText = "∞";
        else
            document.getElementById(letterGrade).innerText = Math.ceil(requiredScore);
    });
}
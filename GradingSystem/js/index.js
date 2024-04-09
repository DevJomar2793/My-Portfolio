//Average Function

const btnAverage = document.querySelector("#averageGrade");
const btncloseAverage = document.querySelector("#closeAverage");

btnAverage.addEventListener('click', ()=> {

    function totalGrade() {

        let sub1 = parseInt(document.querySelector("#english").value);
        let sub2 = parseInt(document.querySelector("#math").value);
        let sub3 = parseInt(document.querySelector("#physics").value);
        let sub4 = parseInt(document.querySelector("#chemistry").value);
        let sub5 = parseInt(document.querySelector("#computer").value);

        let totalScore = sub1 + sub2 + sub3 + sub4 + sub5;

        let rating = totalScore/5;

        return rating;
      
    }

    if(totalGrade() <= 100 && totalGrade() >= 90)  {
        document.getElementById("resultDescription").innerHTML = "Outstanding";
        document.getElementById("resultRemarks").innerHTML = "Passed";
    }
    else if(totalGrade() <= 89 && totalGrade() >= 85) {
        document.getElementById("resultDescription").innerHTML = "Very Satisfactory";
        document.getElementById("resultRemarks").innerHTML = "Passed";
       
    } 
    else if(totalGrade() >= 80 && totalGrade() <= 84) {
        document.getElementById("resultDescription").innerHTML = "Satisfactory";
        document.getElementById("resultRemarks").innerHTML = "Passed";
        
    }
    else if(totalGrade() >= 75 && totalGrade() <= 79) {
        document.getElementById("resultDescription").innerHTML = "Fairly Satisfactory";
        document.getElementById("resultRemarks").innerHTML = "Passed";
        
    } 
    else if(totalGrade() <= 74) {
        document.getElementById("resultDescription").innerHTML = "Did not meet expectation";
        document.getElementById("resultRemarks").innerHTML = "Failed";
    }


    document.getElementById("resultAverage").innerHTML = totalGrade();

    



btncloseAverage.addEventListener('click', ()=> {

        let sub1 = document.querySelector("#english");
        let sub2 = document.querySelector("#math");
        let sub3 = document.querySelector("#physics");
        let sub4 = document.querySelector("#chemistry");
        let sub5 = document.querySelector("#computer");

        sub1.value = "";
        sub2.value = "";
        sub3.value = "";
        sub4.value = "";
        sub5.value = "";

});
    


});






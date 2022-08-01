var question = [
    
    
    
    {

        "Question 1" : "What is your name?"

}


]


function submit() {


    var mr = document.getElementById("mr")
    var name = document.getElementById("name")

    var Inputtrans = document.getElementById("Inputtrans").value
    var Inputname = document.getElementById("Inputname").value
    document.getElementById("Inputtrans").value = ""
    document.getElementById("Inputname").value = ""

  

    
    if(Inputtrans === "" && Inputname === ""){
        
        
        
        console.log("Please Fill The Form")
        
        
        
    }
    else{
        
        
        mr.innerHTML = Inputtrans;
        name.innerHTML = Inputname;
        document.getElementById("table").style.visibility = "visible"
        document.getElementById("innerbox").style.display = "none"
        document.getElementById("quizAppBox").className = "quizAppBoxAfter"
        

    }

}






// window.onload = function() {

//     /////////////////////////////////////////////////
//     // CREATE SAMPLE QUIZ ARRAY TO USE IN EXAMPLE //
//     /////////////////////////////////////////////////

//     // Quiz constructor
//     function quizConstructor(question, answer, enabled, asked) {
//         this.question = question;
//         this.answer = answer;
//         this.enabled = enabled;
//         this.asked = asked;
//     }

//     // Create quiz array
//     var quiz = new Array();

//     // All quiz questions and answers
//     quiz[0] = new quizConstructor("Montgomery", "Alabama", false, 0);
//     quiz[1] = new quizConstructor("Juneau", "Alaska", true, 0);
//     quiz[2] = new quizConstructor("Phoenix", "Arizona", true, 0);
//     quiz[3] = new quizConstructor("Little Rock", "Arkansas", false, 0);
//     quiz[4] = new quizConstructor("Sacramento", "California", true, 0);
//     quiz[5] = new quizConstructor("Denver", "Colorado", false, 0);
//     quiz[6] = new quizConstructor("Hartford", "Connecticut", false, 0);
//     quiz[7] = new quizConstructor("Dover", "Delaware", false, 0);
//     quiz[8] = new quizConstructor("Tallahassee", "Florida", false, 0);
//     quiz[9] = new quizConstructor("Atlanta", "Georgia", true, 0);

//     /////////////////////////////////////////////////
//     // END: CREATE SAMPLE QUIZ ARRAY TO USE IN EXAMPLE //
//     /////////////////////////////////////////////////


//     // Find the number of questions that the user has enabled
//     var numEnabled = 0;

//     for (var i = 0; i < quiz.length; i++) {
//         if (quiz[i].enabled == true) {
//             numEnabled++;
//         }
//     }


//     // Ask all enabled questions in random order
//     for (var i = 0; i < numEnabled; i++) {

//         // Find random question that hasn't been asked yet
//         do {

//             var randomNum = Math.floor(Math.random() * quiz.length);

//         } while (quiz[randomNum].enabled == false || quiz[randomNum].asked == 1);

//         // Ask question
//         var question = quiz[randomNum].question + " is the capital of which state?";
//         document.getElementById("form").innerHTML += "<p>" + question + "</p>";

//         // Mark question as asked
//         quiz[randomNum].asked++;
//     }
// }



// var allQuestions = [{question: "Q1: What is your name?", 
//                     choices: ["Steve", "kevin", "peter", "jimmy"],
//                     correctAnswer:0},
//     {question: "Q2: when were you born?",
//      choices: ["1970", "1982", "1985", "1980"],
//     correctAnswer:1},
//     {question: "Q3, where were you born?",
//     choices: ["Seoul", "New York", "Tokyo", "LA"],
//     correctAnswer:0},
//     {question: "Q4: what is your passion?",
//     choices: ["scientist", "bus driver", "programmer", "teacher"],
//     correctAnswer:2},
//     {question: "Q5: how many kids do you have?",
//     choices: ["1", "2", "0", "none of above"],
//     correctAnswer:0}];
// var score=0;
// var currentNumber = 0;
// function createQuestion(){
//     for (var i=0; i < allQuestions[this.currentNumber].choices.length;i++){
//         document.forms.radioAnswers.elements.choice[i].checked = false;
//     }
//     var question=document.getElementById("question");
//     question.innerHTML = allQuestions[this.currentNumber].question;
//     var point  = document.getElementById("point");
//     point.innerHTML="<span>score: "+score+"</span>";
//     createChoices();
// }
// function createChoices(){
//     for (var i = 0; i < allQuestions[this.currentNumber].choices.length; i++){
//         var option=document.getElementById("label"+i);
//             option.innerHTML=allQuestions[this.currentNumber].choices[i];
//     }
// }
// function nextQuestion(){
//     for (var i =0; i < allQuestions[this.currentNumber].choices.length; i++){
//         if (document.forms.radioAnswers.elements.choice[i].checked == true){
//             var userAnswer = document.forms.radioAnswers.elements.choice[i].value;
//             if (userAnswer == allQuestions[this.currentNumber].correctAnswer){
//             this.score++;
//             }
//         }
//     }
//     this.currentNumber++;
//     if (this.currentNumber==allQuestions.length){ 
//         showScore();       
//     }
//     else{
//         createQuestion();
//     }
// }
// function showScore(){
//     document.forms.radioAnswers.style.display="none";
//     var question=document.getElementById("question");
//     question.style.display = "none";
//     var elt=document.getElementById("point");
//     elt.style.display = "block"; 
//     var button = document.getElementById("next");
//     button.style.display="none";   

// }

// window.onload= createQuestion();
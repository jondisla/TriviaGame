$( document ).ready(function() {
  
    var questions = ['What did Mr. Costanza say to calm down when angry?', 'Name Kramer\'s best invention and business.', 'What was Elane terrible at?'];
    
    var ans1 = ['Hoochie Mama!!!!!!!!!!!!!!!', 'Serenity now', 'You want a divorce!? You got one!']
    
    var ans2 = ['Adopt a highway','Winter jacket sales man','Coffee table book about coffee tables']
    
    var ans3 = ['Dancing', 'Dating', 'Drinking']
    
    var secQuestions = ['q4', 'q6', 'q6'];
    var ram;
    var arrayOfFuncs = [];
  
    
    function firstSet(){
      
      $('#b1').append('1. ' + questions[0]);
      $('#b2').append('2. ' + questions[1]);
      $('#b3').append('3. ' + questions[2]);
    }
    
    function answers1(){
      $('#fchoice1').append('<input type = "radio" name="f1"/>').append(ans1[0])
      $('#fchoice2').append('<input type = "radio" name="f1"/>').append(ans1[1]);
      $('#fchoice3').append('<input type = "radio" name="f1"/>').append(ans1[2]);
      
      $('#schoice1').append('<input type = "radio" name="s1"/>').append(ans2[0])
      $('#schoice2').append('<input type = "radio" name="s1"/>').append(ans2[1]);
      $('#schoice3').append('<input type = "radio" name="s1"/>').append(ans2[2]);
      
      $('#tchoice1').append('<input type = "radio" name="s1"/>').append(ans3[0])
      $('#tchoice2').append('<input type = "radio" name="s1"/>').append(ans3[1]);
      $('#tchoice3').append('<input type = "radio" name="s1"/>').append(ans3[2]);
    }
    
    
  // arrayOfFuncs.push(function () { console.log('first func!'); });
  // arrayOfFuncs.push(function () { console.log('second func!'); });
  
  
    console.log(questions)
    firstSet()
    answers1()
  });
  
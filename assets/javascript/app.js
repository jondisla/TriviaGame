$( document ).ready(function() {
  
    var questions = ['What did Mr. Costanza say to calm down when angry?', 'Name Kramer\'s best invention and business.', 'What was Elane terrible at?', 'What causes George’s fiancé Susan to die?', 'What was “little Jerry”?', 'What does Elaine buy allot of for Mr Pitt but doesn\'t get the right kind of it ?'];
    
    var ans1 = ['Hoochie Mama!!!!!!!!!!!!!!!', 'Serenity now', 'You want a divorce!? You got one!']
    
    var ans2 = ['Adopt a highway','Winter jacket sales man','Coffee table book about coffee tables']
    
    var ans3 = ['Dancing', 'Dating', 'Drinking']

    var ans4 = ['Suicide', 'cheap wedding invitations', 'allergic reaction']

    var ans5 = ['Kramer\’s pet rooster', 'Kramer’s pet chicken', 'a picture of jerry as a little kid']

    var ans6 = ['Coffee', 'socks', 'juice']
    
    var question1 = $('body').value;
    var ram;
    var arrayOfFuncs = [];
  
    
    function firstSet(){
      
      $('#b1').append('1. ' + questions[0]);
      $('#b2').append('2. ' + questions[1]);
      $('#b3').append('3. ' + questions[2]);
      $('#b4').append('4. ' + questions[3]);
      $('#b5').append('5. ' + questions[4]);
      $('#b6').append('6. ' + questions[5]);
    }
    
    function answers1(){
      $('#fchoice1').append('<input type = "radio" name="f1"/>').append(ans1[0])
      $('#fchoice2').append('<input type = "radio" name="f1" value="serenity"/>').append(ans1[1]);
      $('#fchoice3').append('<input type = "radio" name="f1"/>').append(ans1[2]);
      
      $('#schoice1').append('<input type = "radio" name="s1"/>').append(ans2[0])
      $('#schoice2').append('<input type = "radio" name="s1"/>').append(ans2[1]);
      $('#schoice3').append('<input type = "radio" name="s1"/>').append(ans2[2]);

      $('#tchoice1').append('<input type = "radio" name="t1"/>').append(ans3[0])
      $('#tchoice2').append('<input type = "radio" name="t1"/>').append(ans3[1]);
      $('#tchoice3').append('<input type = "radio" name="t1"/>').append(ans3[2]);

      $('#fourchoice1').append('<input type = "radio" name="four1"/>').append(ans4[0])
      $('#fourchoice2').append('<input type = "radio" name="four1"/>').append(ans4[1]);
      $('#fourchoice3').append('<input type = "radio" name="four1"/>').append(ans4[2]);
      
      $('#fivechoice1').append('<input type = "radio" name="five1"/>').append(ans5[0])
      $('#fivechoice2').append('<input type = "radio" name="five1"/>').append(ans5[1]);
      $('#fivechoice3').append('<input type = "radio" name="five1"/>').append(ans5[2]);

      $('#sixchoice1').append('<input type = "radio" name="six1"/>').append(ans6[0])
      $('#sixchoice2').append('<input type = "radio" name="six1"/>').append(ans6[1]);
      $('#sixchoice3').append('<input type = "radio" name="six1"/>').append(ans6[2]);
    }
  
    function checkall(){

      results = 

      $('.btn').click(function(){
        if($('input:radio[value="r"')){
            alert(question + ': True');
        }else
            alert(question + ': False!');

        $('.container').html('<center><p>'+results+'</p>');
        })
    }

    console.log(questions)
    firstSet()
    answers1()
    checkall()
  
});
  
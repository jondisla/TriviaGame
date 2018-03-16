$( document ).ready(function() {
  
    var questions = ['What did Mr. Costanza say to calm down when angry?', 'Name Kramer\'s best invention and business.', 'What was Elane terrible at?', 'What causes George’s fiancé Susan to die?', 'What was “little Jerry”?', 'What does Elaine buy allot of for Mr Pitt but doesn\'t get the right kind of it ?'];
    
    var ans1 = ['Hoochie Mama!!!!!!!!!!!!!!!', 'Serenity now', 'You want a divorce!? You got one!']
    
    var ans2 = ['Adopt a highway','Winter jacket sales man','Coffee table book about coffee tables']
    
    var ans3 = ['Dancing', 'Dating', 'Drinking']

    var ans4 = ['Suicide', 'cheap wedding invitations', 'allergic reaction']

    var ans5 = ['Kramer\’s pet rooster', 'Kramer’s pet chicken', 'a picture of jerry as a little kid']

    var ans6 = ['Coffee', 'socks', 'juice']

    var score = 0;

    var rammessage = ['"Hello.....Newman"', '"No soup for you!"', '"Giddyup!"','"Look, you don\'t understand. There was shrinkage!"', '"Hello......Jerry"', '"Is you talking to me?"' ]
  
    
    // function before(){
    //     $('body').html($('#startBtn').click(function(){
    //         alert('helo')
    //     }))
        
    // }

    function firstSet(){
      
      $('#b1').append('1. ' + questions[0]);
      $('#b2').append('2. ' + questions[1]);
      $('#b3').append('3. ' + questions[2]);
      $('#b4').append('4. ' + questions[3]);
      $('#b5').append('5. ' + questions[4]);
      $('#b6').append('6. ' + questions[5]);
    }
    
    function answers1(){
      $('#fchoice1').append('<input type = "radio" name="f1" />').append(ans1[0])
      $('#fchoice2').append('<input type = "radio" name="f1" id="right1"/>').append(ans1[1]);
      $('#fchoice3').append('<input type = "radio" name="f1" />').append(ans1[2]);

      $('#schoice1').append('<input type = "radio" name="s1"/>').append(ans2[0])
      $('#schoice2').append('<input type = "radio" name="s1"/>').append(ans2[1]);
      $('#schoice3').append('<input type = "radio" name="s1" id="right2"/>').append(ans2[2]);

      $('#tchoice1').append('<input type = "radio" name="t1" id="right3"/>').append(ans3[0])
      $('#tchoice2').append('<input type = "radio" name="t1"/>').append(ans3[1]);
      $('#tchoice3').append('<input type = "radio" name="t1"/>').append(ans3[2]);

      $('#fourchoice1').append('<input type = "radio" name="four1"/>').append(ans4[0])
      $('#fourchoice2').append('<input type = "radio" name="four1" id="right4"/>').append(ans4[1]);
      $('#fourchoice3').append('<input type = "radio" name="four1"/>').append(ans4[2]);
      
      $('#fivechoice1').append('<input type = "radio" name="five1" id="right5"/>').append(ans5[0])
      $('#fivechoice2').append('<input type = "radio" name="five1"/>').append(ans5[1]);
      $('#fivechoice3').append('<input type = "radio" name="five1"/>').append(ans5[2]);

      $('#sixchoice1').append('<input type = "radio" name="six1"/>').append(ans6[0])
      $('#sixchoice2').append('<input type = "radio" name="six1" id="right6"/>').append(ans6[1]);
      $('#sixchoice3').append('<input type = "radio" name="six1"/>').append(ans6[2]);
    
    
}
    
  

    function checkall(){
    $('.btn').one("click", function(){
    if (document.getElementById('right1').checked){
        score++;
        console.log(score)
    }if (document.getElementById('right2').checked){
        score++;
        console.log(score)
    }if (document.getElementById('right3').checked){
        score++;
        console.log(score)
    }if (document.getElementById('right4').checked){
        score++;
        console.log(score)
    }if (document.getElementById('right5').checked){
        score++;
        console.log(score)
    }if (document.getElementById('right6').checked){
        score++;
        console.log(score)
        }
    
    $('body').html('<div class="container" id="score"><div class = "card"><div class="card-body">' + '<center><h1>Your score is </h1>' + '<div id="scorestyle">' + score + '</div>' + '</div><div></div>')
    
    showmessage = Math.floor(Math.random()*rammessage.length)

    
    $('body').append('<div class="container" id="score"><div id="scoreif"><h3>' + rammessage[showmessage] +'</h3></div>')

    // $('body').append('<center><div id="reload"> <h4>RELOAD TO PLAY AGAIN')
    
    })
    
    }

    // function playAgain(){
    //     $('#reload').click(function(){
    //         console.log('hello');
    //     })
    // }
  
    // before()
    firstSet()
    answers1()
    checkall()
    // playAgain()
});
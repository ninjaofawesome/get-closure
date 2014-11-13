$(document).ready(function(){
  console.log('get closure.');

  function myFirstClosure(){
    function showTheCode(name){
      var myName=name;
      return 'hello, my name is ' + myName;
    }
    var whoIsIt = showTheCode('Hannah');

    function sayHello(whoIsIt){
      $('button').click(function(){
        console.log(whoIsIt);
      });
    }
    sayHello(whoIsIt);
  };

  function showCode(myFirstClosure){

    $('button').click(function(){
      var myFunc = myFirstClosure;
      $('.closure').toggle('slow', function(){
        $(this).fadeIn().html('<pre>' + myFunc + '</pre>');
      });
    });

  }


  showCode(myFirstClosure);
});



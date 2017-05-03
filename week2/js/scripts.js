var add = function(question1, question2, question3, question4, question5) {
  return question1 + question2+ question3 + question4 + question5;
};

$(document).ready(function() {

  $("form#Questions").submit(function(event){
  var userName = $("input#userName").val();
  var question1 = parseInt($("#question1").val());
  var question2 = parseInt($("#question2").val());
  var question3 = parseInt($("#question3").val());
  var question4 = parseInt($("#question4").val());
  var question5 = parseInt($("#question5").val());
  var userDestiny = add(question1,question2,question3,question4,question5)



  });
});


(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var name in names){
    var fname= names[name];
    var firstLetter = fname.toLowerCase().charAt(0);

    if(firstLetter=="j"){
      byeSpeaker.speak(fname);
    }else{
      helloSpeaker.speak(fname);
    }
    
  }

})(window);



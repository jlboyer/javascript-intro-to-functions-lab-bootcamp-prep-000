let phrase = "what?";

function shout(input) {
  return(input.toUpperCase())
};

function whisper(input) {
  return(input.toLowerCase())
};

function logShout(input){
  console.log(shout(input))
};

function logWhisper(input){
  console.log(whisper(input))
};

function sayHiToGrandma(input){
  return(input === input.toLowerCase() ? "I can't hear you!" : input === input.toUpperCase() ? "YES INDEED!" : input === "I love you, Grandma" ? "I love you, too." : "wtf")
};

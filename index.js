function shout(str){
  return str.toUpperCase();  
}
function whisper(str){
  return str.lowercase();
}
function logShout(str){
  console.log(str.toUpperCase());
}
function logWhisper(str){
  console.log(str.toLowerCase());
}
function sayHiToGrandma(str){
  if (str.toEqual(str.lowercase()))
   return "I can't hear you!";
}
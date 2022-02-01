function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(shout(string));
}
function logWhisper(string) {
    console.log(whisper(string));
}
function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()){
        return 'I can\'t hear you!';
    }else if (
        string === string.toUpperCase()){
            return `YES INDEED!`;
        }else if(string === "Let's have dinner together!"){
            return `I would love to!`
        }
    
}
function introduction(name) {
    return 'Hi, my name is ${name}'
}
function introductionWithLanguage(name, language){
    return 'Hi, my name is ${name} and I am learning to program in ${language}'
}
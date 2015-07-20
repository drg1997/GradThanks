


if ( thanksComing = "yes" ) {
    var grad = "Thank you so much for coming to my graduation!";
}
if ( thanksComing = "no" ) {
    var grad = "Can't believe you didn't come to my graduation, it's like you don't even love me.";
}


if ( cashAmount > 50) {
    document.getElementById("result").innerHTML = ("Thank you "+ cashGifter +" for the "+cashAmount +"$!  I will use it wisely!  I'm gonna spend some of it on " + interest + " and save the rest.  "+ grad +  " ~"+ yourName +" p.s. " + personalMessage + "");
}
else if ( cashAmount > 25) {
    document.getElementById("result").innerHTML = ("Thank you for the "+ cashAmount +"$." + grad + "~"+ yourName +"");
}
else {
    document.getElementById("result").innerHTML = ("You suck " + cashGifter + ".  Thanks, I guess.  " +grad+ "");
}


//if they came to my graduation, add a part where it thanks them for coming
//question, was it hot at graduation?  if so, then thanks for dealing with the intense heat
//

$(document).ready(main);

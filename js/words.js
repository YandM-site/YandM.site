var words = new Array();
words.push("You are my today and all of my tomorrows.");
words.push("They tell you in school that it’s the lungs that keep you breathing but it’s your heart.");
words.push("Your voice is full of beautiful memories we have yet to make.");
words.push("I can’t, and won’t ever be able to, get enough of you.");
words.push("I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.");
words.push("If I could, I would wrap my arms around you and just hold you until the hurt went away.");
words.push("There’s only one place in the world I call home, and it’s because you’re there.");
words.push("I love three things in this world, the sun ,the moon and you.  The sun for the day, the moon for the night, and you for ever…");
words.push("If it's snowing, we don't umbrella, go all the way, whether can all the way to the hoary head?");
words.push("Life is so short, the world is so chaotic, I do not want to quarrel, do not want the cold war, and do not want to have a second regret with you.");
words.push("Even if the world has charming, I have a special liking to you.");
words.push("My happiness is to live with you for the rest of my life.");
words.push("I hope one day I can't take you home, but come back to our home.");
words.push("I don't want a short attentive, as long as you accompany me for a lifetime.");
words.push("The problems of your past are your business. The problems of your future are my privilege.");
words.push("With all I am,with all I have ,I promise you all my life.");
words.push("Brief is life, but love is long.");
words.push("Never frown, even when you are sad, because you never know who is falling in love with your smile.");
words.push("There is nothing I want more I would fight for you I'd die for you.");
words.push("With this hand, I will lift your sorrows. Your cup will never empty, for I will be your wine. With this candle, I will light your way in darkness. With this ring, I ask you to be mine.");
words.push("You make me want to be a better man.");
words.push("In me the tiger sniffs the rose.");

function getRandomWord() {
    var idx = Math.random();
    idx = parseInt(100*idx%words.length);
    return words[idx];
}

document.getElementById("mike-word").innerHTML = getRandomWord();

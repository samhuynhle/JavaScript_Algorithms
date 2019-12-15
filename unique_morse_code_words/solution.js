var morseMap = {
    'a': ".-",
    'b': "-...",
    'c': "-.-.",
    'd': "-..",
    'e': ".",
    'f': "..-.",
    'g': "--.",
    'h': "....",
    'i': "..",
    'j': ".---",
    'k': "-.-",
    'l': ".-..",
    'm': "--",
    'n': "-.",
    'o': "---",
    'p': ".--.",
    'q': "--.-",
    'r': ".-.",
    's': "...",
    't': "-",
    'u': "..-",
    'v': "...-",
    'w': ".--",
    'x': "-..-",
    'y': "-.--",
    'z': "--.."
};

var uniqueMorseRepresentations = function(words) {
    const set1 = new Set(); // we will be using a Set object to keep track of the converted words (morse codes), sets only store unique 'keys'
    for(var word of words){ // loop over each word in the words array
        var replace = ''; // set up a new string
        for(var char of word){ // within each word, we look at each character and add to our string the equivalent morse code
            replace += morseMap[char];
        }
        if(!set1.has(replace)){ // we check if the set has that morse coded word
            set1.add(replace); // add it if it doesn't
        }
    }
    return set1.size; // return the set size
};
/*
 * @param {string} s
 * @return {number}
 */

 // Desired complexity if O(n), where n is the length of the string
 // With the desired complexity, we know we will be using sliding doors method to review the string
 // This will use extra space to store the last indexes of already visited characters.
 // We will be scanning the string from left to right, keeping track of the maxiumum length Non-Repeating
 // Character Substring seen so far.
 // For every new character, we will check it with the temporary array
 // If the new character is not present in the temporary array, we increase the current length by one
 // If it is present, we will go into two cases:
 // 1. If the previous instance of the character is not part of the current NRCS we increase the current length by 1
 // 2. If it is, then our current NRCS changes. It becomes the substring starting from the
 // next character of the previous instance to the currently scanned character.
 // Then we compare the current length to the max length before chaning the current NCRS or changing current length

var lengthOfLongestSubstring = function(s) {

    /*
    1) store the length of the string we passed in, establish our sliding doors, establish longest substring length
    2) utlize JavaScripts Map to help us identify if we are in a valid substring (aka no repetitions)
    */
    const length = s.length;
    let windowStart = 0;
    let current = 0;
    let longest = 0;
    let found = new Map();

    /*
    We get each character we are at, loop until we are at the end of the string.
    For the windows, if we find a repetition, we move the left window to where the repetition was found
    If the character was not in teh map, we store it and it's position in the string
    Then we compare current max to last max
    */
    while (current < length) {
        const c = s[current];
        if (found.get(c) >= windowStart ) { 
            windowStart = found.get(c) + 1;
        }
        found.set(c, current);
        longest = Math.max(longest, (current - windowStart) + 1);
        current++; 
    }
    return longest;
};
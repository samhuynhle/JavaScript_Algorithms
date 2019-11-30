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
    var n = s.length;
    
};
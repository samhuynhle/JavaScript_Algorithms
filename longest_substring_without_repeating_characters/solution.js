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
    const length = s.length; // Store the length of the string passed in
    let windowStart = 0; // windowStart is the beginning of each substring
    let current = 0; // current is the current letter we are at
    let longest = 0; // longest is the longest substring we have
    let found = new Map(); // we are using JavaScript's hash map to store the characters and the index they are at

    while (current < length) {
        const c = s[current]; // set c to the current character we are at
        if (found.get(c) >= windowStart ) { // if the character is in the map and it's position is greater than where our window is
            windowStart = found.get(c) + 1; // then we move the window to that index plus one, we need to move the window as there will be a duplicate
        }
        found.set(c, current); // If the character is not in the map, then we add it along with it's index
        longest = Math.max(longest, (current - windowStart) + 1); // then we take the greater of the two, the past longest or the difference between current and start (plus one since we index at 0)
        current++; // we advance our current runner until the end
    }
    return longest; // we then return the longest
};
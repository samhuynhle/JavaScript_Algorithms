// Find 1st, Find Nth...

const array = [{
    tweet: 'hi',
    date: 2012
    }, {
    tweet: 'my',
    date: 2013
    }, {
    tweet: 'teddy',
    date: 2014
}];
array[0];
array[array.length-1];

// both were O(1) operations

// What is the cost of comparing the dates? O(n)

// What is JavaScripts .length? O(1), JavaScript has a property for length
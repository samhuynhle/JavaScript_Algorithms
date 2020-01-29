const booo = (n) => {
    for (let i = 0; i < n.length; i++) {
        console.log('boo!');
    }
}

booo([1,2,3,4,5]);

// space complexity? input doesn't get included.
// O(1)

const arrayOfHiNTimes = (n) => {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

// space complexity? new space allocation
// O(n)
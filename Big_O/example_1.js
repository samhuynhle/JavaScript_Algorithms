const nemo = ['nemo'];

const findNemo = (array) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo(nemo);

// Big O notation is O(N), since we are going through each of the items in the array
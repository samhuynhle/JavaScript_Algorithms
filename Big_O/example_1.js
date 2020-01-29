const nemo = ['nemo'];

const findNemo = (array) => {
    let time0 = performance.now();
    for (let i = 0; i < array.length; i++){
        if(array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let time1 = performance.now();
    console.log('Call to find Nemo took: ' + (time1 - time0) + ' milliseconds');
}

findNemo(nemo);

// Big O notation is O(N), since we are going through each of the items in the array
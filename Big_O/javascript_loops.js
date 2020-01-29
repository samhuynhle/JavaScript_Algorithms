const everyone = ['stan', 'ron', 'jon', 'george', 'nemo'];

const findNemo = array => {
    for(let i = 0; i < array.length; i++) {
        if(i === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

const findNemo2 = array => {
    array.forEach(i => {
        if(i === 'nemo') {
            console.log('Found NEMO!');
        }
    })
}

const findNemo3 = array => {
    for(let i of array) {
        if(i === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}
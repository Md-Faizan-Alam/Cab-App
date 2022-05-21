console.log('first');
console.log('second');

function givePresentation() {
    return new Promise((resolve, reject) => {
        let presentationIsReady; // Uncertain Result
        setTimeout(() => {
            presentationIsReady = true;
            if (presentationIsReady) {
                resolve('Here is our presentation');
            } else {
                reject(new Error("We didn't have enough time"));
            }
        }, 2000); 
    })
}

const takePresentation = async () => {
    let result;
    result = await givePresentation().then(value => console.log(value)).catch(error =>console.log(error.message));
    return result;
}

let presentaion = takePresentation();

// setTimeout(()=>{
//     console.log('This goes here');
// },2000);


console.log('third');
console.log('fourth');
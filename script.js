window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

// create an array of 5 promises
        const promises = Array.from({
                length: 5
            }, () =>
            new Promise((resolve) =>
                setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)
            )
        );

// wait for the first promise to resolve using Promise.any
        Promise.any(promises).then((result) => {

								   // print the result to the output div
            document.getElementById('output').textContent = `The first promise resolved with ${result.toFixed(2)} seconds`;
        });
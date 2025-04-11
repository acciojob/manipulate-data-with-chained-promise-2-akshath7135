//your JS code here. If required.
// Function to manipulate the array with chained promises
function manipulateArray() {
    // Initial promise that resolves after 3 seconds with the array [1, 2, 3, 4]
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((array) => {
        // First transformation: Filter out odd numbers
        const evenNumbers = array.filter(num => num % 2 === 0);
        
        // Update the output div after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('output').textContent = evenNumbers.join(',');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Second transformation: Multiply even numbers by 2
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        
        // Update the output div after an additional 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('output').textContent = multipliedNumbers.join(',');
                resolve();
            }, 2000);
        });
    });
}

// Call the function to start the process
manipulateArray();
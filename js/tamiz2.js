let userNumber = prompt("Ingresa el numero que deseas: ", 0);
//let userNumber = 100;

let numberRange = parseInt(userNumber);
let primeNumbers = [];
let iterations = 0;


for (let i = 2; i < numberRange; i++) {

    let multiple = 2;
    let isPrimeNumber = true;

    while (isPrimeNumber && multiple < i) {
        i % multiple === 0 ? isPrimeNumber = false : multiple++;
    }

    isPrimeNumber? primeNumbers.push(i):

    iterations++;
}
console.log(iterations)



//Code for displaying prime numbers in the interface 
const container = document.querySelector(".cotainerNumbers");


primeNumbers.forEach(i => {
    container.innerHTML += `
    <div class="square">
        <p>${i}</p>
    </div>
    `
})
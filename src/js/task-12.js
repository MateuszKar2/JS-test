//if/else//

const a = 2;
let sms;

console.log(a);

if (a > 4) {
    sms = "Jestem zalogowany...";
} else if (a > 3) {
    sms = "Jestem nie zalogowany...";
} else {
    sms = "Jestem wylogowany...";
}

console.log(sms);


//tenary//

const color = "red";

const type = color === "red" ? "true" : "false";
console.log(type)
 

//instrukcja switch//

const animal = "elephant"
let message;

switch (animal) {
    case "dog":
    message = "This is dog";
    break;

    case "cat":
    message = "This is cat";
    break;

    case "elephant":
    message = "This is elephant";
    break;

    default:
        console.log("elephant not found");
}

console.log(message);

//Pętle//

let clinet = 2;

const maxClient = 5;

while (clinet < maxClient) {
    console.log(clinet);
    clinet += 1;
}

//Petla for//

for (let i = 0; i <= 50; i += 5) {
    console.log(i);

    if(i === 40) {
        console.log("wynik został osiągnięty");
        break
    }
};


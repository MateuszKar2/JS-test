//funkcja/wyrażenie funkcyjne + return(wcześniejszy zwrot)

function multiplay (x,y,z) {
    console.log(`Wynikiem mnożenia jest ${ x* y* z}`) ;
    return//(przerywa działanie funkcji- tzw. wcześniejszy zwrot)
    console.log(`Wynikiem dodawania jest ${ x + y + z}`) ;
}

multiplay(52,2,4);



// one(2, 5, 3)//To wyrażnie funkcyjne, dlatego nie może być wywałane przed jego utworzeniem

// const one = function (a,b,c) {

// }



//domyślna wartość parametrów, to funkcja dlatego może być wywołana przed utworzeniem
two();

function two (x =5, y =3, z =7 ) {
    console.log(`Wynikiem mnożenia jest ${ x* y* z}`) ;
  
}




const output = document.querySelector(".output");

let scroolEventCounter = 0;

document.addEventListener("scroll", () => {
    scroolEventCounter += 1;
    output.textContent = scroolEventCounter;
});

//Throttle i Debounce pozwalają nam kontrolować ile razy wykona się funkcja w danym czasie
//Korzystam z pomocy biblioteki Lodash przy ich inplementacji

//  const result = _.add(2, 3);
//  console.log(result);//sprawdzam czy biblioteka jest poprawnie załadowana

//Technika THROTTLE kontroluje ile razy funkcja może być załadowana w określonym czasie

// document.addEventListener(
//     "scroll",
//     _.throttle(() => {
//       console.log("Scroll handler call every 300ms");
//     }, 300)
//   );

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms")
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

//Technika DEBOUNCE zapewnia, że funkcja zostanie wywołana tylko wtedy
//gdy między zdarzeniami nastapi przerwa wynosząca N milisekund

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debouncedOutput = document.querySelector(".output.debounced");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  debounced: 0
};

document.addEventListener("scroll", () => {
    eventCounter.vanilla += 1;
    vanillaOutput.textContent = eventCounter.vanilla;
  });

document.addEventListener(
    "scroll", 
    _.throttle(() => {//może być wywołana co 0.3s.
        eventCounter.throttled += 1;
        throttledOutput.textContent = eventCounter.throttled;
    }, 300)
);

document.addEventListener(
    "scroll",
    _.debounce(() => {//wywołana gdyb między wydarzeniami nastapi przerwa 0.3s.
        eventCounter.debounced += 1;
        debouncedOutput.textContent = eventCounter.debounced;
    }, 300)
)


//Do metody debounce biblioteki Lodash można przekazać opcjonalny trzeci argument — obiekt parametru, 
//który ma dwie właściwości leading (domyślnie false) i trailing (domyślnie true).
//Ustawienia te zmieniają tryb i wskazują, czy funkcja ma działać na początku strumienia zdarzeń, czy na końcu po przerwie.

document.addEventListener(
    "scroll",
    _.debounce(
      () => {
        console.log("Scroll handler call on every event stream start");
      },
      300,
      {
        leading: true,//przy pierwszym "kliknięciu"
        trailing: false,//przy ostatnim "kliknięciu"
      }
    )
  );

  //leniwe ładowanie
  //technika która opóxnia ładowanie niekrytycznych zasobów podczas ładowania strony. 
  //Te zasoby są ładowane tylko wtedy gdy sa potrzebne
  //np.wchodze na stronę => przewijam jej treść => przwijajać szybko w dół nagle widze "zaślepkę" => "zaślepka" zostanie zastąpiona prawdziwym obrazem
  //Atrybut HTML loading znacznika <img> jest obsługiwany natywnie we wszystkich nowoczesnych przeglądarkach z wyjątkiem Safari

  <img src="my-image.jpg" loading="lazy" alt="Image description" />

  //Atrybut obsługuje 3 wartości:
  //lazy-leniwe ładowanie
  //eager-obraz zostanie załadowany tak szybko jak to możliwe
  //auto-przegladarka sama ocenia jakie ładowanie wykońać na bazie preferencji użytkownika, jakości połączenia i tak dalej

  //ABY zapewnić wysoką kompatybilność(wsparcie dla starszych przeglądarek) i tych które nie obsługują atrybutu ,,loading" mogę skorzystać z biblioteki
  //Najpopularniejsze to lazysizes, vanilla-lazyload i lozad.js.
//Plik HTML, obrazy, style i skrypty pochodzą z serwera za pośrednictwem 
//,,protokołu HTTP"-zestawu reguł i konwencji wykorzystywanych podczas przesyłania danych prez sieć

//HTTP bazuje na strukturze klijent-serwer oraz żądanie-odpowiedź

//Żądanie odbywa się w kilku etapach: 
//Zapytanie DNS
//Połączenie
//Wysyłanie danych
//Oczekiwanie na odpowiedź
//Odbieranie danych

//Protojuł HTTPS to dodatek do HTTP
//Wszystkiewiadomośći klijent-serwer są szyfrowane.Zapewnia ochronę przed atakami podsłuchowymi






//Serwer to komputer ze specjalnym opragramowaniem. Backend to program znajdujący sie na serwerze,
//który może przetwarzać przychodzące żądania HTTP i posiada zestaw gotowych akcji dla określonych żądań.

//API-zestaw reguł komunikacji pomiędzy różnymi komponentami oprogramowania
//REST- to styl architektury backendu oparty na zestawie zasad opisujących sposób definiowania i adresowania zasobów sieciowych.
//REST API- backend zbudowany na zasadzie REST. Służy jako warstwa między aplikacją internetową a bazą danych.
//Posiada standardowy interfejs dostępu do zasobów. Działa jak strona internetowa, wysyłamy żądanie HTTP od klienta do serwera i w odpowiedzi zamiast strony HTML otrzymujemy dane w formacie JSON.

//Format żadania: 
//Metoda HTTP
        //POST-utwórz nowy zasób
        //GET-uzyskaj zestaw zasobów lub jeden zasób
        //PUT-zaktualizuj istniejący lub utwórz nowy zasób
        //PATCH-zaktualizuj istniejący zasób
        //DELETE-usuń zasób
//Nagłówki HTTP
        // Nagłówki zawierają informacje serwisowe związane z treścią żądania. 
        //Na przykład typ treści, którą klient może przetworzyć w odpowiedzi z serwera lub opisujący typ zasobu,
        // który klient wysyła do serwera lub serwer wysyła do klienta.
//Ścieżka
        //Żądania muszą zawierać ścieżkę do zasobu, na którym wykonywana jest operacja np.(zamówienia)
        //GET https://bookstore.com/api/orders
        //Accept: application/json
        //Zasób pozostaje niezmieniony, jest to ścieżka do całej kolekcji, a wartość parametru zmienia się dla każdego z jej elementów. 
        //np.(zamówienie 289)
        // GET https://bookstore.com/api/orders/289
        //Accept: application/json
//Ciało
        //Serwer wysyła odpowiedź na żądanie klienta, która zawiera kod statusu informujący klienta o wyniku operacji.
        // Kody podzielone są na grupy:
            //1XX	W celach informacyjnych
            //2XX	Kody sukcesu  ...[200 (OK)	Standardowa odpowiedź na udane żądania HTTP.]
            //3XX	Opisują wszystko związane z przekierowaniem (redirect)
            //4XX	Wskazują błędy po stronie klientów ...[404 (Not Found)	W tej chwili nie znaleziono zasobu. Być może został usunięty lub jeszcze nie istnieje.]
            //5XX	Wskazują błędy po stronie serwera
            //np.Jeśli chcemy uzyskać dane o wszystkich klientach, żądanie GET będzie wyglądać tak...

                    // GET bookstore.com/api/customers
                    // Accept: application/json

                            // Na co serwer wyśle nam taką odpowiedź...

                            // Status: 200 OK
                            // Content-Type: application/json
                            // Body: dane JSON dla wszystkich klientów







//AJAX (Asynchronous JavaScript and XML) - AJAX oznacza dowolną komunikację z serwerem bez przeładowywania strony.
                                    // Skraca to czas odpowiedzi i sprawia, że strona internetowa jest bardziej interaktywna.

//Fetch API-Zbudowany w przeglądarce interfejs dostępny w obiekcie window, 
            //który zawiera zestaw właściwości i metod do wysyłania, dbierania i przetwarzania zasobów z serwera. 
            //Metoda fetch() zapewnia nowoczesny interfejs do wysyłania żądań do serwera i jest zbudowana na obietnicach.
            // fetch("https://jsonplaceholder.typicode.com/users")
            // .then(response => {
            //   if(!response.ok) {
            //     throw new Error(response.status);
            //   }
            // })
            // .then(data => {
            //   // Data handling
            // })
            // .catch(error => {
            //   // Error handling
            // });

//Jak podglądać to co sie dzieje na stronie?
//W narzędziach programistycznych karta Network wyświetla wszystkie żądania HTTP wykonywane na stronie. Nastepnie nalezy wybrać filter XHR

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch//("https://jsonplaceholder.typicode.com/users"
  ("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"//Parametry zapytania limit-7, posegregowane wg. name
  ).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
                <p><b>Name</b>: ${user.name}</p>
                <p><b>Email</b>: ${user.email}</p>
                <p><b>Company</b>: ${user.company.name}</p>
             </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}

//Parametry zapytania pozwalają określić dodatkowe kryteria dla backendu. Na przykład, ile elementów kolekcji chcemy otrzymać w żądaniu,
//być może musimy dodać sortowanie po jakiejś właściwości obiektu, ograniczyć wybór itp.
//Znak ? wskazuje początek parametrów zapytania. Każdy parametr jest parą nazwa=wartość. 
//Znak & jest używany do wskazania znaczącego „AND”, oddzielając parametry w ciągu zapytania.

//Parametrów może być wiele i nie jest wygodnie komponować z nich jedną długą linię, zarówno dla czytelności, jak i późniejszej edycji.
// Podczas tworzenia ciągu parametrów tworzona jest instancja klasy URLSearchParams i inicjowana za pomocą obiektu

//const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "name",
//   });
  
//   console.log(searchParams.toString()); // "_limit=5&_sort=name"
  
//   const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
//   console.log(url);





//Domyślnie żądanie HTTP można wykonać tylko w bieżącej witrynie. Podczas próby wysłania żądania do innej domeny, 
//portu lub protokołu, czyli wykonania żądania międzydomenowego, przeglądarka wyświetla błąd. Odbywa się to ze względów bezpieczeństw
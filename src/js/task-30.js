//Baza danych może przechowywać kolekcje setek milionów rekordów. 
//Dlatego zwracanie całej kolekcji dla każdego żądania GET wymaga zbyt dużych zasobów. 
//Rozmiar treści odpowiedzi będzie zbyt duży, a czas żądania będzie ciągnął się o kilkadziesiąt sekund, a nawet minut – 
//im więcej danych w odpowiedzi z backendu, tym dłużej zajmuje ona sieć

//Ponadto musisz pomyśleć o użytkownikach - nie potrzebują wszystkich milionów rekordów naraz. 
//Przetworzenie tak dużej ilości danych w odpowiedzi i renderowanie interfejsu będzie wymagało ogromnych zasobów urządzenia,
//na którym przeglądana jest strona internetowa.

// Aby je rozwiązać, istnieje paginacja - technika, w której nie cała kolekcja jest zwracana do pierwszego
// i każdego kolejnego żądania GET, ale pewna jej część. 
//PAGINACJA jest zaimplementowana na backendzie i używana na frontendzie za pomocą specjalnych parametrów żądania.

//Nie ma standardu nazewnictwa parametrów paginacji, więc ich nazwy zależą od programisty Backend.


const fetchPostsBtn = document.querySelector(".btn");
const postList = document.querySelector(".posts");

// Controls the group number
let page = 1;
// Controls the number of items in the group
let perPage = 10;


fetchPostsBtn.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  postList.insertAdjacentHTML("beforeend", markup);
}
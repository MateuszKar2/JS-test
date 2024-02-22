 //zapoznaję się z dokumentacją biblioteki odtwarzacza Vimeo
 //deklaruję zmienną playrtCurrentTime, któa odpowiada za aktualny czas video
 //do zmiennej iframe pobieram poprzez id video
 //zmienną player nawiązuje do sekcji pre-existing player w bibliotece
 //zmiennej pauseTime przekazuje jej event w funkcji strzałkowej 
 //dla magazynu lokalnego(localStorage) używam metody .setItem za pomocą której mogę dodać nowy wpis jako parę klucz:wartość
 //przy pomocy dokumentacji metody .on rozpoczynam śledźenie "timpeupdate" - aktualizacji czasu odtwarzania
 //przy przeładowaniu strony użyto metody .SetCurrentTime wzorując się na bibliotece
 //do magazyna lokalnego(localStorage) użyłem metody .getItem która zwraca wartość (klucza)
 //wykorzystałem operator logiczny(or) tj. ||, jeżeli jeden operand jest true zwraca true
 //wykorzystałem instrukcje then/catch do obsługi błędu. Jeżeli then 

 import throttle from 'lodash.throttle';
 import Player from '@vimeo/player';

const playrtCurrentTime = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const pauseTime = e => {
    localStorage.setItem(playrtCurrentTime, e.seconds);
};

player.on('timeupdate', throttle(pauseTime, 1000));

player
    .setCurrentTime(JSON.parse(localStorage.getItem(playrtCurrentTime)) || 0)
    .then(function (seconds) {})
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    });


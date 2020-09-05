// # Zadania - RWD

// ## Zadanie 1
// Na stronie znajduje się czerwony div.
// Na ekranach powyżej 600px w jego wnętrzu powinien znajdować się tekst z rozmiarami okna np.
// `1920x1080`. Rozmiary możesz pobrać z obiektu window. Podczas zmiany rozmiarów okna tekst ten dynamicznie powinien się zmieniać.


// ## Zadanie 2
// Po kliknięciu na div, wymiary okna wypisz w konsoli.

// Na małych ekranach (poniżej 600px) div powinien zmienić kolor tła na niebieski, a klikanie na niego nie powinno działać.

document.addEventListener('DOMContentLoaded', () => {

    const element = document.querySelector(".element");

    function showText() {
        element.innerHTML = `${window.innerWidth}x${window.innerHeight}`;
    }

    function showTextInConsole() {
        console.log(`${window.innerWidth}x${window.innerHeight}`);
    }

    function test(media) {
        if (media.matches) {
            window.addEventListener("resize", showText);
            window.addEventListener("click", showTextInConsole);
            element.style.background = "";
        } else {
            window.removeEventListener("resize", showText);
            window.removeEventListener("click", showTextInConsole);
            element.style.background = "blue";
        }
    }

    const media = window.matchMedia("(min-width: 600px)");
    test(media);
    showText();

    media.addEventListener("change", e => {
        test(media);
    });
});
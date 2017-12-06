class Zegarek {
    constructor (){
        this.$clock = document.querySelector('h1');
    }

    render(string) {
        this.$clock.textContent = string;

    }

}

function setup (){
    let zegarek1 = new Zegarek();
    zegarek1.start();
}

window.addEventListener('DOMcontentLoader', setup);
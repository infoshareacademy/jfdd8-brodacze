class Zegarek {
    constructor (){
        this.limitTime = null;
        this.$clock = document.querySelector('h1');
    }

    render(string) {
        this.$clock.textContent = string;
    }

    start(formatedTime) {
        this.limitTime = Zegarek.parseSeconds(formatedTime);
    }

    static parseSeconds(time){
        let[minutes, seconds]=time.split(':').map(Numbers);
        console.log(minutes, seconds);
        return 4000;
    }
}

function setup (){
    let zegarek1 = new Zegarek();
    zegarek1.start();
}

window.addEventListener('DOMcontentLoader', setup);
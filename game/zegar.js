const ONE_SECOND = 1000;

class Zegarek {
    constructor (){
        this.limitTime = null;
        this.currentTime = 0;
        this.$clock = document.querySelector('h1');
        this.zegarek = null;
    }

    render(string) {
        this.$clock.textContent = string;
    }

    start(formatedTime) {
        this.limitTime = Zegarek.parseSeconds(formatedTime);
        this.zegarek = setInterval (() => {
            this.currentTime += ONE_SECOND;
             let diff = this.limitTime - this.currentTime;
             this.render(diff);

                if(this.isFinished()){
                    this.stop();
                }
            }, ONE_SECOND);
    }
        stop(){
            clearInterval(this.zegarek)
            }

        isFinished () {
            return this.currentTime - this.limitTime;
        }
    static parseSeconds(time){
        let[minutes, seconds]=time.split(':').map(Numbers);
        return minutes * 60 * ONE_SECOND + seconds * ONE_SECOND;
        return 4000;
    }
}

function setup (){
    let zegarek1 = new Zegarek();
    zegarek1.start('10:00');
}

window.addEventListener('DOMcontentLoader', setup);
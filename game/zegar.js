const ONE_SECOND = 1000;

class Zegarek {
    constructor (){
        this.limitTime = null;
        this.currentTime = 0;
        this.$clock = document.querySelector('h1');
        this.zegarek = null;
    }

    render(string) {
        let time = Zegarek.formatedTime();
        this.$clock.textContent = string;
    }

    start(formatedTime) {
        this.limitTime = Zegarek.parseSeconds(formatedTime);
        this.update();
        this.zegarek = setInterval (() => {
            this.currentTime += ONE_SECOND;
               this.update();
                if(this.isFinished()){
                    this.stop();
                }
            }, ONE_SECOND);
    }
        update(){
            let remain = this.getRemainingTime();
            let time = Zegarek.formatedTime(remain);
            this.render(time);
        }
        getRemainingTime () {
            return this.limitTime - this.currentTime;
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

    static formatedTime(miliseconds){
        let minutes = Math.floor(miliseconds/ONE_SECOND/60);
        let seconds = miliseconds/ONE_SECOND%60;
        minutes = String(minutes).padStart(2,'0');
        seconds = String(seconds).padStart(2,'0');
        return '${minutes}:${seconds}';
    }
}

function setup (){
    let zegarek1 = new Zegarek();
    zegarek1.start('10:00');
}

window.addEventListener('DOMcontentLoader', setup);
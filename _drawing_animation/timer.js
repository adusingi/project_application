class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        
        if (callbacks) {
            this.onCompleted = callbacks.onCompleted;
            this.onPause = callbacks.onPause;
            this.onTick = callbacks.onTick;
            this.onStart = callbacks.onStart;
        }
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.interval = setInterval(() => {
            this.tick()
        }, 20);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause()
            if(this.onCompleted) {
                this.onCompleted()
            }
        }
        else {
            this.timeRemaining = (this.timeRemaining - 0.02);
            if (this.onTick) {
                this.onTick(this.timeRemaining)
            }
        }
    }
    pause = () => {
        this.onPause()
        clearInterval(this.interval)
    }
    get timeRemaining () {
        return this.durationInput.value
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }
}
   

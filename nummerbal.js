class Nummerbal extends Bal {
    nummer;

    constructor (_x, _y, _speedX, _speedY, _nummer) {
        
        super (_x, _y, _speedX, _speedY)
        this.nummer = _nummer
        
        
    }

    show() {
        fill (255, 255, 0);
        ellipse(this.x, this.y, 75, 75);
        textSize(25);
        fill(0,0,0);
        text("1", this.x-6, this.y+6);
    }

}

function Box(element){
    this.height = $(element).outerHeight();
    this.width = $(element).outerWidth();
    this.position = $(element).position();
    this.leftEnd = this.position.left;
    this.rightEnd = this.leftEnd + this.width;
    this.topEnd = this.position.top;
    this.bottomEnd = this.topEnd + this.height;
    
    this.getBoundaries = function() {
    return ([this.leftEnd, this.topEnd, this.rightEnd, this.bottomEnd]);
    }
    
    this.moveUp = function() {
        currentPosition = this.getBoundaries()
        currentPosition[1] = Math.max(0, currentPosition[1] - 10)
        this.topEnd = currentPosition[1];
        this.bottomEnd = this.topEnd + this.height;
        return(currentPosition)
    }
}

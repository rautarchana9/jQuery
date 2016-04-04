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
   
    this.moveDown = function() {
        currentPosition = this.getBoundaries()
        currentPosition[3] = Math.min($(window).height(), currentPosition[3] + 10)
        this.bottomEnd = currentPosition[3];
        this.topEnd = this.bottomEnd - this.height;
        return(currentPosition)
    }
    
   this.moveLeft = function() {
        currentPosition = this.getBoundaries()
        currentPosition[0] = Math.max(0, currentPosition[0] - 10)
        this.leftBoundary = currentPosition[0];
        this.rightBoundary = this.leftBoundary + this.width;
        return(currentPosition)
    }
}

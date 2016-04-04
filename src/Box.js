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
    };
    
    this.moveUp = function() {
        currentPosition = this.getBoundaries()
        currentPosition[1] = Math.max(0, currentPosition[1] - 10)
        this.topEnd = currentPosition[1];
        return(currentPosition)
    };
   
    this.moveDown = function() {
        currentPosition = this.getBoundaries()
        currentPosition[3] = Math.min($(window).height(), currentPosition[3] + 10)
        this.bottomEnd = currentPosition[3];
        this.topEnd = this.bottomEnd - this.height;
        return(currentPosition)
    };
    
   this.moveLeft = function() {
        currentPosition = this.getBoundaries()
        currentPosition[0] = Math.max(0, currentPosition[0] - 10)
        this.leftEnd = currentPosition[0];
        return(currentPosition)
    };
   
  this.moveRight = function() {
       currentPosition = this.getBoundaries()
       currentPosition[2] = Math.min($(window).width(), currentPosition[2] + 10)
       this.rightEnd = currentPosition[2];
       this.leftEnd = this.rightEnd - this.width;
       return(currentPosition)
   };

  this.move = function() {
      $(element).animate({top: this.topEnd + "px", left: this.leftEnd + "px"}, 100);
  }; 
 
  this.moveBox = function(key) {
        switch(key.which) {
            case 37: this.moveLeft();
                     this.move();
                     break;
            case 38: this.moveUp();
                     this.move();
                     break;
            case 39: this.moveRight();
                     this.move();
                     break;
            case 40: this.moveDown();
                     this.move();
                     break;
        }
        key.preventDefault();
    };
};
$(document).ready(function(){
    var box  = new Box(".box");
    $(document).keydown(function (key) { box.moveBox(key); } );
});

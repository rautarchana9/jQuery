function setUpHTMLFixture() {
    setFixtures('<style>.box-plane {'
                +' margin: 0 auto;'
                +' overflow: hidden;' 
                +' width: 100%;'
                +'  min-height: 100%;'
                +' height: 100%; }'
                +' .box {'
                +' background: #6af;'
                +' box-sizing: border-box;'
                +' width: 30%;'
                +' display: inline-block;'
                +' border: 1px solid;'
                +' border-radius: 6px;'
                +' text-align: center; }'
                +' .center {'
                +' clear: both;'
                +' position: absolute;'
                +' top: 35%;'
                +' left: 35%;'
                +' height: 30%;'
                +' min-height: 30%; }'
                +'</style>'
                +'<div class="box-container"> <figure class="box center">Move this box using arrow keys</figure> </div>');
}

describe("Box", function(){
    beforeEach(function() {
    setUpHTMLFixture();
    box = new Box('.box');
    });
   
    describe('getBoundaries', function(){
        it('returns a array of four boundaries', function(){
            expect(box.getBoundaries().length).toBe(4);
        });
    });
   
    describe("moveUp", function() {
        it("returns 0, if top < 10", function() {
        spyOn(box, "getBoundaries").and.returnValue([5,5,5,5]);
            expect(box.moveUp()[1]).toBe(0);
        });
        it("return top - 10 if top >= 10", function() {
        spyOn(box, "getBoundaries").and.returnValue([5,25,5,5]);
            expect(box.moveUp()[1]).toBe(15);
        });
    });

    describe("moveDown", function() {
        it("returns dom width if bottom > 10", function() {
        windowHeight = $(window).height();
        spyOn(box, "getBoundaries").and.returnValue([5,5,5,windowHeight - 5]);
            expect(box.moveDown()[3]).toBe(windowHeight);
        });
        it("returns bottomEnd + 10 if bottom <= windowHeight - 10", function() {
        spyOn(box, "getBoundaries").and.returnValue([5,35,5,windowHeight - 35]);
            expect(box.moveDown()[3]).toBe(windowHeight - 25);
        });
    });
   
   describe("moveLeft", function() {
        it("returns 0 if leftEnd < 10", function() {
        spyOn(box, "getBoundaries").and.returnValue([5,5,5,5]);
            expect(box.moveLeft()[0]).toBe(0);
        });
        it("returns leftEnd - 10 if leftEnd >= 10", function() {
        spyOn(box, "getBoundaries").and.returnValue([35,5,5,5]);
            expect(box.moveLeft()[0]).toBe(25);
        });
    });
});


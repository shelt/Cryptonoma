var CELL_SIZE    = 11;
var CELL_SPACING = 2;
var cells = [];
var STATE_COLORS = {
    0: "#eeeeee", // None
    1: "#dddddd", // Hover
    2: "#cccccc", // Solving
    3: "#bbbbbb"  // solved
}

var ctx;

var ROWS;
var COLS;
var offsetX;
var offsetY;

function init() {
    var c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    
    var canvasOffset = $("#canvas").offset();
    offsetX = canvasOffset.left;
    offsetY = canvasOffset.top;
    
    COLS = Math.floor(ctx.canvas.width / CELL_SIZE);
    ROWS = Math.floor(ctx.canvas.height / CELL_SIZE);
    
    var count = 0;
    for(var r=0; r<ROWS; r++) {
        cells[r] = [];
        
        for(var c=0; c<COLS; c++) {
            cells[r][c] = 0;
        }
    }
    
    
    $("#canvas").mousemove(function (e) {
        handleMouseMove(e);
    });
    
}

function draw() {
    for(var r=0; r<ROWS; r++) {
        for(var c=0; c<COLS; c++) {
            var x = c * (CELL_SIZE + CELL_SPACING);
            var y = r * (CELL_SIZE + CELL_SPACING);
            
            ctx.fillStyle = STATE_COLORS[cells[r][c]];
            ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
        }
    }
}

function handleMouseMove(e) {
    mX = parseInt(e.clientX - offsetX);
    mY = parseInt(e.clientY - offsetY);
    
    var mC = Math.floor(mX / (CELL_SIZE + CELL_SPACING));
    var mR = Math.floor(mY / (CELL_SIZE + CELL_SPACING));
    
    cells[mR][mC] = 1;
    draw();
    
    

}

var CELL_SIZE    = 11;
var CELL_SPACING = 2;
var STATE_COLORS = {
    0: "#eeeeee", // None
    1: "#dddddd", // Solving
    2: "#bbbbbb", // User-clicked
    3: "#aaaaff"  // Solved
}

var ctx;
var cells = [];
var ROWS;
var COLS;

function init() {
    // Get context
    var c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    
    // Set canvas to fill DOM
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    
    // Calculate matrix size
    COLS = Math.floor(ctx.canvas.width / CELL_SIZE);
    ROWS = Math.floor(ctx.canvas.height / CELL_SIZE);
    
    // Init cell matrix
    var count = 0;
    for (var r=0; r<ROWS; r++) {
        cells[r] = [];
        for(var c=0; c<COLS; c++) {
            cells[r][c] = 0;
        }
    }
    
    document.onmousedown = handleMouseDown;
    
}

/*
    This function 
*/
function update() {
    for (var r=0; r<ROWS; r++) {
        for (var c=0; c<COLS; c++) {
            // Determine adjacency
            if (cells[r][c] == 0) {
                var adjacency = 0;
                adjacency += ((r+1 != ROWS) && (cells[r+1][c] > 1)) | 0;
                adjacency += ((  r != 0   ) && (cells[r-1][c] > 1)) | 0;
                adjacency += ((c+1 != COLS) && (cells[r][c+1] > 1)) | 0;
                adjacency += ((  c != 0   ) && (cells[r][c-1] > 1)) | 0;
                
            }
                
                
            
            asmCrypto.SHA256.hex("The quick brown fox jumps over the lazy do");
            
            
            // Drawing
            var x = c * (CELL_SIZE + CELL_SPACING);
            var y = r * (CELL_SIZE + CELL_SPACING);
            
            ctx.fillStyle = STATE_COLORS[cells[r][c]];
            ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
        }
    }
}

/*
    This function handles mousedown events.
*/
function handleMouseDown(e) {
    mX = parseInt(e.clientX);
    mY = parseInt(e.clientY);
    
    var mC = Math.floor(mX / (CELL_SIZE + CELL_SPACING));
    var mR = Math.floor(mY / (CELL_SIZE + CELL_SPACING));
    
    cells[mR][mC] = 2;
    update():
}

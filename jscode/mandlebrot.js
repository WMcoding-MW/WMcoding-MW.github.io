/**
 * add a feature to accept user input to make the mandlebrot interactable
 */
(function(){
var canvas = document.getElementById('mandleCanvas'); //get the html canvas id
var context = canvas.getContext('2d');                //create the canvas as a 2d space
var magnificationFactor = 300;                        //zoom factor of the mandlebrot
var cX = 2;                                           
var cY = 1.5;

for(var x=0; x < canvas.width; x++) {                 //covers each row of pixles of the canvas
    
    for(var y=0; y < canvas.height; y++) {            //covers each column of pixles of canvas
    
        var belongsToSet = inMandle(x/magnificationFactor - cX, y/magnificationFactor - cY); //checks if the pixel is in the mandlebrot set
        
        if(belongsToSet == 0) {         // not inside
        
            context.fillStyle = '#000';
            context.fillRect(x,y, 1,1); // Draw a black pixel
        
        } else {                        // inside
         
            context.fillStyle = 'hsl(50, 100%, ' + belongsToSet + '%)';
            context.fillRect(x,y, 1,1); // Draw a colorful pixel
        
        }     
    
    } 
}
 

})();

/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns the colour of the pixel in as a percentage
 */
function inMandle(x,y){
    var real = x;         //real part
    var imaginary = y;    //imaginary part
    var iterations = 100; //number of iterations, the higher the number the more detail

    for(var i = 0; i < iterations; i++){
        
        var tempReal = real * real - imaginary * imaginary + x; 

        var tempImaginary = 2 * real * imaginary + y;

        real = tempReal;
        imaginary = tempImaginary;

        if(real * imaginary > 5){ //if real*imaginary > 5
        return((i/iterations)*100); //return the number of iterations taken/maxiterations as a percentage
        }
    }
    return 0;
}

var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);

    if( l <= 0|| b<=0 ){
        console.log("Dimension should be proper l and b must be greater than 0");
    }
    else{
        console.log("Perimeter is " + rect.perimeter(l,b));
        console.log("Area is " + rect.area(l,b));
    }
}


solveRect(3,4);
solveRect(0,7);
solveRect(-3,6);
solveRect(4,4);
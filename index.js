var rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solving rectangle with l =" +l + " and b " + b);
    rect(l,b ,(err,rectangle) => {
        if(err)
        {
            console.log("Error:" + err.message);
        }
        else{
            console.log("Perimeter is "+ rectangle.perimeter());
            console.log("area is " + rectangle.area());
        }
    });
    console.log("this calls after rect");
}

solveRect(3,4);
solveRect(4,5);
solveRect(0 ,5);
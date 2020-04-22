var rect = {
    perimeter: (x,y) =>(2*(x*y)),
    area: (x,y) =>(x*y)
};

function solveReact(l,b){
    console.log("solving for rectangle of l = "+ l + " and b = " + b);

    if(l<=0 || b <=0){
        console.log("Dimension should be proper");
    }
    else{
        console.log("Perimeter of rectangle " + rect.perimeter(l,b));
        console.log("Area of rect = " + rect.area(l,b));
    }
}

solveReact(2,5);
solveReact(2,4);
solveReact(6,7);
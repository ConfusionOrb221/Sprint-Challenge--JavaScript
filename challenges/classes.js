// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

/* == Step 2: Volume Method ==
Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height

Formula for cuboid volume: length * width * height
*/

/* == Step 3: Surface Area Method ==
Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

/* == Step 4: Create a new object that uses CuboidMaker ==
Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
});
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those
// methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(attrs){
        super(attrs);
    }
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
});

console.log(cube.volume());
console.log(cube.surfaceArea());
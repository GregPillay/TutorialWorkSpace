/* ___________ Restructuring ___________ */
// Simple Restructuring
var mountainHeight = 8848;
var mountainName = 'Everest';
//var MountainClimbing = {mountainName , mountainHeight};

//console.log(MountainClimbing);

// Restructuring using function
var output = ()=>{console.log(` Mt ${this.mountainName} is ${this.mountainHeight}m tall. `) ;};  // new method

var MountainClimbing2 = {mountainName , mountainHeight ,output};  // new object
 
MountainClimbing2.output();

// Putting the deconstructed parameters within the object

var Adventures =
{
     Area  : 'Sun Coast' ,
     Activity :'Aquarium',
     tale(){ {console.log(`I went to the  ${this.Activity} in ${this.Area}.`) ;} }  // new method
};
Adventures.tale();
/*  CLASSES */

/* we could create a function and add methods on the function object using the prototype.
 * in JS, functions are objects and inherit the behaviour of the object.
 * Whenever an object is created, the prototype object is also created behind the scenes(Console).
 */

/*  checking the prototype constructor */
class school {};
//console.log(school.prototype);


/*  using the prototype */
function Holidays (destination , days)
{
    this.destination = destination
    this.days = days
}

Holidays.prototype.info = function()
{
   // console.log(this.destination + " ==> " + this.days + " days.");
};

var Nepal = new Holidays("Nepal",30);     // created a new instance of the function
//console.log(Nepal.info());

/*  call the constructor and set the parameters*/
class Holiday {                                               //create class
    constructor(destination,days)                             // constructor to set properties
    {
        this.destination = destination
        this.days = days
    };
                                                               // can create new methods
    info()
    {
        console.log(` ${this.destination} will take ${this.days} days.`);
    };
};
const trip = new Holiday("Drakensburg", 5 );   // 'new' creates a new instance of the class. Pass different properties.
//console.log(trip.info());


/*  Extend parent class to children class(sub-class)   : Class within Class*/
//Parent Class
class StudentMeals {                                             
    constructor( StudentName , StudentMeal)                             
    {
        this.StudentName = StudentName;
        this.StudentMeal = StudentMeal;
    };
                                                                
    info()
    {
        console.log(` ${this.StudentName} favorite meal is ${this.StudentMeal}.`);
    };
};
//const Stud1 = new StudentMeals("Gregg", "trotters and Beans with Roti" );  

// Sub Class
class Drink extends StudentMeals             // child class inherits from parent
{
constructor(StudentName , StudentMeal , StudentDrink)    //include new variable
 {
    super( StudentName , StudentMeal) ;                 // inherits from parent(runs parent)
    this.StudentDrink = StudentDrink;

 } 
 info()
 {
    super.info();                                      // executes the parent class
    console.log(`Favorite drink is ${this.StudentDrink.join(' & ')}.`) ;
 }
};

const Stud2 = new Drink("Gregg", "trotters and Beans with Roti" ,['Cream Soda','Raspberry Soda']);    
Stud2.info();



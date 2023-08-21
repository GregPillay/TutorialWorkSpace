
/*  ___________ DESTRUCTURING OF AN OBJECT  ________________ */
// EG 01
let ThingsToDo =
{
morning : 'Eat Breakfast',
noon    : 'Eat Lunch',
evening : 'Learn To Code',
night   : ['Study','Sleep']

}

let {morning,evening} = ThingsToDo;   // select the properties of the object
morning = 'Have a bath';              // to change the parameter
console.log(morning,' - ' + evening);

//EG 02
//Object
/*
let AStudent = student=>
{ 
    console.log(` ${student.name} studies at ${student.University}.`);
};
*/


// destructure with  argument student within function :
/*
let AStudent = student=>
{ 
    let {name , University} = student;
    console.log(` ${name} studies at ${University}.`);
};
*/

// destructure with as an argument :
let AStudent = ({name , University})=>
{ 
     
    console.log(` ${name} studies at ${University}.`);
};
AStudent(
    {
        name : 'Sashlin',
        University : 'Phoenix Technical School'
    });


/*  ___________ DESTRUCTURING OF AN ARRAY  ________________ */

// the parameter defined in [ ] will be accessed by index and allocted variable.
/*
let [creature01] = ['Sea Horse' , 'Whale' , 'Turtle'];          // creature01 accesses first index of the array.
console.log(creature01);
*/
/*
let [ , creature02] = ['Sea Horse' , 'Whale' , 'Turtle'];          // the , seperates the first index of the array. creature02 accesses the second index.
console.log(creature02);
*/

let [ ,  , creature03] = ['Sea Horse' , 'Whale' , 'Turtle'];          // the , seperates the first and second index of the array.
console.log(creature03);                                              // creature03 accesses the third index.

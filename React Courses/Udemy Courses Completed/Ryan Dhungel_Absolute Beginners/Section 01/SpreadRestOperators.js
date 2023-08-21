/*  SPREAD OPERATORS */

//  combines multiple data sets:
//with Array
var colors = ['green','red', 'blue', 'yellow'];
var newColor = ['Gold'];

var AllColors = [...colors,...newColor];
console.log(AllColors);

// with Object
var Day = 
{ 
    breakfast  : 'toast with bacon and eggs',
    lunch :'Polony Sandwich' 
}
var Night = {Supper : 'Beans & Roti'};
var MyMeals = {...Day,...Night};
console.log(MyMeals);

/*  REST OPERATORS */
var classmates = ['Tspeho', 'Mark', 'Joana', 'Angeria'];
var [FirstChild , ...rest] = classmates;     // FirstChildVariable is index 0
                                             // rest variable represents all data except the FirstChild.
console.log(FirstChild);  
console.log(rest);
//Binary Search 
let arr = [10,20,30,40,50,60,70,80,90,99,100,900,2000,12521316]; 
console.log("Given List "+arr);

let startIndex = 0;
let endIndex = arr.length-1;
let searchElement = 12521316;
console.log("Search element :12521316")
binarySearch(arr,startIndex,endIndex,searchElement)
function binarySearch(arr,startIndex,endIndex,searchElement){
    if(startIndex>endIndex){
        console.log("element not found");
        return false;
    }

    let mid = Math.floor((startIndex+endIndex)/2);
    if(searchElement == arr[mid]){
        console.log("Element found at the position : "+mid);
        return true;
    }
    else{
    if(searchElement < arr[mid]){
            return binarySearch(arr,startIndex,mid-1,searchElement);
        }

    else if(searchElement > arr[mid]){
            return binarySearch(arr,mid+1,endIndex,searchElement);
        }
    }
    
}

//another Javascript thingy
function conCatenate(/**/){
    var args = arguments;
    var temp = [];
    for(let arr of args){
        temp = temp.concat(arr);
    }
    return temp;
};

console.log(conCatenate([2],[3],[4],[54]));

// Oddish or Evenish

function odOrEve(num1){
    var dig=0;
    var sum=0;
    console.log("The number is : "+num1);
    while(num1>0){
        dig=num1%10;
        sum=sum+dig;
        num1 = Math.floor(num1/10);
        
    }
    sum = Math.round(sum);
    console.log("The sum is :"+sum);
    if(sum%2==0){
        console.log("Evenish")
    }
    else{
        console.log("Oddish");
    }
    return sum;
}
odOrEve(34);







/*1. Create a class called "Shape" whose constructor
takes one parameter:
- colour
       Assign "colour" to the instance of Shape with a 
       default value of "Transparent"
       Add a "type" property to "this" with a default
       value of "Shape"*/
       
       /*2. Add a method to "Shape" called "describe" that
       will log out the following to the console:
       "A ${this.colour} ${this.type}"*/ 
       class Shape {
        constructor(colour = "Transparent") {
          this.colour = colour;
          this.type = "Shape";
        }
        describe() {
         console.log(`A ${this.colour} ${this.type}`);
       }
      }
      const myShape = new Shape("Red");
      myShape.describe();
      console.log(myShape.colour); 
      console.log(myShape.type);   

      const myOtherShape = new Shape();
      console.log(myOtherShape.colour); 
      console.log(myOtherShape.type);   



      

       
      
      /*
      3. Create a class called "Square" whose constructor
       takes 2 parameters (Square has to extend Shape):
       - colour
       - sideLength
       Call the super constructor with "colour"
       Assign "sideLength" to the instance of "Square"
       Assign "Square" to the "type" property */
       
       /*
        4. Add an "area" method to "Square" that will calculate
        and return the total area of the square.
        (Area of a square is: sideLength * sideLength)  */

        /*
        5. Create a class called "Rectangle" whose constructor
        takes 3 parameters (Rectangle has to extend Shape):
        - colour
        - width
        - height
        Call the super constructor with "colour"
        Assign all of these to the instance of "Rectangle"
        Assign "Rectangle" to the "type" property */
        /*
        6. Add an "area" method to "Rectangle" that will calculate
        and return the total area of the square.
        (Area of a rectangle is: width * height)*/ 

       class Shape1 {
         constructor(colour) {
          this.colour = colour;
        }
      }
      
      class Square extends Shape1 {
        constructor(colour, sideLength) {
          super(colour);
          this.sideLength = sideLength;
          this.type = "Square";
        }
        area() {
          return this.sideLength * this.sideLength;
        }
      }
      class Rectangle extends Shape1 {
        constructor(colour, width, height) {
          super(colour);
          this.width = width;
          this.height = height;
          this.type = "Rectangle";
        }
        area() {
          return this.width * this.height;
        }
      }

      const rectangle = new Rectangle("blue", 6, 8);
      console.log(rectangle);
      console.log(rectangle.area()); 

      const square = new Square("red", 5);
      console.log(square);      
      console.log(square.area()); 
       
       
       
      /*1. Create a class called "Utilties"
      2. Add a STATIC method to "Utilties" called
      "camelCase" that has a single parameter:
      - str (String)
      3. Add logic to "camelCase" that assumes that
      "str" is a String and returns the camel-
      cased version of the String. Eg:
      "hello there" => "helloThere"
      "Number Stock Items" => "numberStockItems"
      * You can assume that the spaces are where
      we move to the next upper-cased word
      4. Test this function on some Strings:
      console.log(Utilities.camelCase("hello there"))
      // helloThere
       console.log(Utilities.camelCase("HELLO THERE"))
       // helloThere
       console.log(Utilities.camelCase("I love cookies"))
       // iLoveCookies
       console.log(Utilities.camelCase("Monkey Banana"))
       // monkeyBanana
       */
       class Utilities {
        static camelCase(str) {
          return str.split(' ')
                    .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join('');
        }
      }
      console.log(Utilities.camelCase("hello there"))
      console.log(Utilities.camelCase("HELLO THERE"))
      console.log(Utilities.camelCase("I love cookies"))
      console.log(Utilities.camelCase("Monkey Banana"))
      
      /* 1.Explain the difference between forEach, map, filter, and reduce.*/
     console.log("forEach is used to itereate a list using functions. ");
     console.log("Map is used to call a function for each element of an array");
     console.log("Filter is used to create a new array with an old array via a specifed condition")

      /*Use forEach to console.log each name in the names array. */ 
      const names = ["Trevor","Michael","Franklin"];
      names.forEach(name => console.log(name));
      
      
      
      /*
      Use map to create a new array by changing each number to square in the numbers array */
      const numbers = [1, 2, 3, 4, 5];
      const squares = numbers.map(num => num * num);
      console.log(squares); 

      /*
      Use filter to filter out country start with 'E';*/ 
      const countries = ["Egypt","Europe","Afghan", "Wakanda" ];
      const filter1 = countries.filter(country => !country.startsWith("E"));
      console.log(filter1);

      
      
      
      /*

      Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.  */
      function getStringLists(arr2) {
        return arr2.filter(item => typeof item === "string");
      }
      const arr2 = [1, "hello", true, "world"];
      const strArr = getStringLists(arr2);console.log(strArr); 
           
      /*

        Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc) */ 
        const countries2 = ['Finland', 'Fiji', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Japan', 'Jamaica', 'Kenya', 'Korea', 'Liberia', 'Latvia', 'Lebanon', 'Madagascar', 'Malaysia', 'Mexico', 'Nigeria', 'Netherlands', 'Norway', 'Oman', 'Poland', 'Portugal', 'Qatar', 'Russia', 'Romania', 'Spain', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United States', 'Uganda', 'Vietnam', 'Venezuela', 'Yemen', 'Zambia', 'Zimbabwe'];

const lettersCount = {};

countries2.forEach((country) => {
  const firstLetter = country.charAt(0).toUpperCase();
  if (lettersCount[firstLetter]) {
    lettersCount[firstLetter]++;
  } else {
    lettersCount[firstLetter] = 1;
  }
});

let mostUsedLetter = '';
let count = 0;

for (const letter in lettersCount) {
  if (lettersCount[letter] > count) {
    mostUsedLetter = letter;
    count = lettersCount[letter];
  }
}

console.log(mostUsedLetter);

        
        /*
         Assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.-using destruction */
         const constants = [2.71828, 3.14159, 9.81, 98.6, 100];

        const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
        console.log(e); 
        console.log(pi); 
        console.log(gravity);
        console.log(humanBodyTemp);
        console.log(waterBoilingTemp);

       /*
       Exercises: Set and Map
      Exercises:Level 1
      const a = {4, 5, 8, 9}
      const b = {3, 4, 5, 7}
      const countries = ['Finland', 'Sweden', 'Norway']
      create an empty set
      Create a set containing 0 to 10 using loop
      Remove an element from a set
      Clear a set
      Create a set of 5 string elements from array
      Create a map of countries and number of characters of a country*/ 
      
      // 1. Create an empty set
const emptySet = new Set();

// 2. Create a set containing 0 to 10 using loop
const zeroToTen = new Set();
for (let i = 0; i <= 10; i++) {
  zeroToTen.add(i);
}

// 3. Remove an element from a set
zeroToTen.delete(5);

// 4. Clear a set
zeroToTen.clear();

// 5. Create a set of 5 string elements from array
const countries3 = ['Finland', 'Sweden', 'Norway'];
const setOfCountries = new Set(countries3.slice(0, 5));

// 6. Create a map of countries3 and number of characters of a country
const mapOfCountryChars = new Map();
countries3.forEach((country) => {
  mapOfCountryChars.set(country, country.length);
});

console.log(emptySet); 
console.log(zeroToTen);
console.log(setOfCountries);
console.log(mapOfCountryChars);

      
      /*
      Exercises:Level 2
      Find a union b
      Find a intersection b
      Find a with b*/
      
      const a = new Set([4, 5, 8, 9]);
      const b = new Set([3, 4, 5, 7]);
      const union = new Set([...a, ...b]);  
      const intersection = new Set([...a].filter(x => b.has(x)));
      const difference = new Set([...a].filter(x => !b.has(x)));
      console.log(union); 
      console.log(intersection); 
      console.log(difference);
      

     // Another javascript activity
      const personAccount = {
          firstName: "Pradeep",
    lastName: "Kumar",
    incomes: [],
    expenses: [],
    
    addIncome: function (description, amount) {
        this.incomes.push({ description: description, amount: amount });
    },
    
    addExpense: function (description, amount) {
        this.expenses.push({ description: description, amount: amount });
    },
    
    totalIncome: function () {
        let total = 0;
        for (let i = 0; i < this.incomes.length; i++) {
        total += this.incomes[i].amount;
      }
      return total;
    },
    
    totalExpense: function () {
        let total = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            total += this.expenses[i].amount;
        }
      return total;
    },
    
    accountInfo: function () {
        return `Name: ${this.firstName} ${this.lastName}, Income: ${this.totalIncome()}, Expense: ${this.totalExpense()}`;
    },
  
    accountBalance: function () {
      return this.totalIncome() - this.totalExpense();
    }
};
  
personAccount.addIncome("Salary", 6000);
personAccount.addIncome("Bonus", 2000);
personAccount.addExpense("Rent", 7000);
personAccount.addExpense("Groceries", 500);

console.log(personAccount.accountInfo()); 
console.log(personAccount.accountBalance()); 


// Exercise two 

  const users = {
      Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  
  
  const logUser = Object.values(users).filter(user => user.isLoggedIn).length;
  console.log("Number of users logged in is :  "+logUser); 
  
  
  const morePoints = Object.values(users).filter(user => user.points >= 50).length;
  console.log("Number of users with 50 or more points: "+morePoints); 
  
  
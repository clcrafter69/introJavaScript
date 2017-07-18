//*initial hello world//

console.log("hello world!");

//2. use variable for greeting

var greeting = "Cynthia";
console.log("hello "+ greeting + "!");

//3. Loop ten times

for (var i =0; i < 9;i++)
{
   console.log("hello "+ greeting + "!"); 
}

//4.add greeting variable and print index
var grNumber = 7;
for (var i =0; i < grNumber;i++)
{
   console.log(i + ": hello "+ greeting + "!"); 
}

//printing line to separate list

console.log("----------------------------------------------");

//5. Print only ODD numbers
for (var i =0; i < grNumber;i++)
{
    if (i%2!=0){
     console.log(i + ": hello "+ greeting + "!"); 
    }
};

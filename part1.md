# Problem 1:
```html
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>
```
At the end of alert single quote is used instead of double quote



# Problem 2:
```html
In the problem the file names are fix.html and scripts.js
So, while linking JS file the name should be same
<!DOCTYPE html>
<html>
<body>
 <script src="scripts.js"></script>
</body>
</html>
```


# Problem 3: 
The content in the linked script.js file will be called. so, first
alert with content "I'm JavaScript!" wil be displayed and then
alert with content "Hello" will be displayed even there is no semicolon 
and then alert with content "Wor" and "ld" in the next line as back ticks are used and then 
alert with content 6(1+2+3) will be displayed.



# Problem 4:
Add a space between Guvi and geek like this
```javascript
admin = fname+ " " +lname
```



# Problem 5: 
Instead of using single quotes, back ticks should be used.
```javascript
alert( `hello ${name}` );
```



# Problem 6:
convert variables a and b to parseInt before adding
```javascript
let a = prompt("First number?");
let b = prompt("Second number?");
a = +a
b = +b
alert(a + b);
```



# Problem 7:
Strings "2" and "12" need to be converted to numbers
```javascript
var a = parseInt("2") > parseInt("12");
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
```



# Problem 8:
Input need to be 0 and variable a to be converted to number
```javascript
let a = prompt("Enter a number?");
a= +a
```



# Problem 9:
Varaible value need to be converted to number
```javascript
let value = prompt('How many runs you scored in this ball');
value = +value
```



# Problem 10:
```javascript
let login = 'Employee';
let message = (login == 'Employee') ? "welcome to employee" : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);
```



# Problem 11:
console.log() should be in the "if" logic
```javascript
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
 console.log(message);
}
else
{
 let message = "Go away";
 console.log(message);
}
```



# Problem 12:
Change the value of lock to 0
```javascript
let message;
let lock = 0;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
```



# Problem 13:
change the value of lock to 0
```javascript
let message;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
```



# Problem 14:
convert pre-decrement to post-decrement
//You can change only 2 characters
```javascript
let i = 3;
while (i) {
  console.log( i-- );
}
```



# Problem 15:
Change the code like this
```javascript
let num = 1
console.log(num, num += 1, num += 1)
console.log(num += 1, num += 1, num += 1)
console.log(num += 1, num += 1, num += 1)
console.log(num += 1)
```




# Problem 16:
Change num+=1 to num+=2
```javascript
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}
```



# Problem 17:
Remove quotes to gifts[i]
```javascript
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${gifts[i]} and added a bow!');
}
```



# Problem 18:
countdown-- should be placed next to "if" block
```javascript
let countdown = 100;
while (countdown > 0) {
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
  countdown--;
}
```
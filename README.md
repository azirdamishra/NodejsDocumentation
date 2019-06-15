# NodejsDocumentation

Used core modules fs and os 
Third party modules lodash and ./notes created by us

Require lets us load in the above module’s functionality so that we can call it down below

Node will first look for a core module with name lodash but will not find any and so it will look in the nodes_module folder

Lodash module has _.isString which checks whether the stuff entered in brackets is a string
_.uniq which takes array as input and returns the same array but without any repetitive elements it might have had

We had created the notes module to make our own methods that we can use to do other stuff eg we made a method add in notes that helps us add two numbers 
We use those methods in the app.js by typing console.log(‘Result’ , notes.add(9, -2));
	where 9 and -2 are the arguments 

Using the os module has a method that helps us get user info
const os = require(‘os’);
const fs = require(‘fs’); 
Var user = userInfo();

//We use append file with template strings which start and end with the tick operator

fs.appendFile(‘greetings.txt’, `Hello ${user.username} ! You are ${notes.age}, func(err){
	if(err){ 		console.log(‘Unable to write file’); }
	});


If the file doesn’t exist then it simply creates it otherwise it keeps writing (appending) into the same file as long as we execute fs.appendFile 

notes.age is a method of the exports object used in notes from its existing modules 
We have typed in notes
Module.exports.age = 23; 

We can type console.log(module); in notes.js that prints out all the modules in notes file that already exist 

If we want to upload files into git then or send files via internet then we dont need to send the node_modules folder because they can be downloaded on the package by typing npm install since we have package.json that tells us all about the dependencies. 
To save third party or npm modules into the package.json file use the --save flag in npm install 

Nodemon is a command line utility that gets executed in the command line.

To access the command line arguments our app was initialised with we would wanna use the process object 
console.log(process.argv); 		prints all the command line arguments 
Argv stands for arguments vector. Here it is a string array which has names of all the command line arguments 
Initially the command shows only the location of the software running ie the app and the node command line. We need to introduce a variable in the index position 2 of the array that would take in our command line argument.

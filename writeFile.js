// use the write file to create a new folder "note.txt" and use appendFile to add a new string in this folder.


const fs = require('fs');

fs.writeFileSync('testNote.txt', 'My name is Japa.');
fs.appendFileSync('testNote.txt', ' My new message with appendFile.');

import { back } from './assets/androidjs';
import { writeFile, readFile } from 'fs';
import { join } from 'path';
import { front } from './assets/androidjs';


// define signal save-data to listen from front process
var back = require('./assets/androidjs').back;

back.on('save-data', function(filepath, msg){
	writeFile(join(filepath, 'data.txt'), msg, function(err){
		if(err) throw err;
		console.log('file saved')
	})
});

back.on('get-data', function(filepath){
	readFile(join(filepath, 'data.txt'), 'utf-8', function(err, data){
		if(err) back.send('get-data-result', '@@');
		else back.send('get-data-result', data);
	})
});

// define function to get the data from storage if file already saved

window.onload = function(){
	front.send('get-data', app.getPath('userData'));
};

front.on('get-data-result', function(msg){
	if(msg != "@@"){
		let data = msg.split('@');
		document.getElementById('author').innerHTML = data[0];
		document.getElementById('title').innerHTML = data[1];
		document.getElementById('text').innerHTML = data[2];
	}
});

// here define some functions to save the data into storage and get them back

function save(){
	let author = document.getElementById('author').innerHTML;
	let title = document.getElementById('title').innerHTML;
	let text = document.getElementById('text').innerHTML;
	let msg = author + "@" + title + "@" + text;
	// let make a complete string of message separated by @
	// send this msg and path where to save file to back process to save in external storage of android
	front.send('save-data',app.getPath('userData'), msg)
};


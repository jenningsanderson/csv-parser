////////////////////////////////////
//                                //
// Javascript CSV Parser Example  //
//                                //
////////////////////////////////////

//Register with Node Module
var csv = module.exports

//Require file system
var fs = require('fs');

//Synchronous Parsing, reads the file and then returns the comma separated string
csv.parseSync = function(url){

	//Read the file synchronously, returns the contents of the file as a string
	var string = fs.readFileSync(url, 'utf8', function (err, data) {
		if (err) { throw err }
	});

	return string.split(',')
}

//Asynchronous Parsing, reads the file asynchronously and parses it in pieces
csv.parseAsync = function(url, callback){
	fs.readFile(url, 'utf8', function(err, data){
		if (err) { throw err }
		console.log(data)
	})
}

//Reads the file in the chunks and parses
csv.parsePipe = function(){
	return through2.obj(function(chunk, enc, callback){
		
	});
}


//Treats the Parser as an object
csv.parseObject = function Parser(){

}

// Parser.prototype = {
// 	constructor: Parser,
// 	on: function(eventName, callback){


// 	},
// 	run: function(){

// 	}
// }

module.exports = csv
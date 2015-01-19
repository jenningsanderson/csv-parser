////////////////////////////////////
//                                //
// Javascript CSV Parser Example  //
//                                //
////////////////////////////////////

//Register with Node Module
var csv = module.exports

//Require file system
var fs = require('fs');

//Require through2 streaming library
var through2 = require('through2')

//Synchronous Parsing, reads the file and then returns the comma separated string
csv.parseSync = function(url){

	//Read the file synchronously, returns the contents of the file as a string
	var string = fs.readFileSync(url, 'utf8', function (err, data) {
		if (err) { throw err }
	});

	console.log( string.split(',') )
}

//Asynchronous parsing with a callback
csv.parseAsync = function(url){
	
	function readIt(url, cb){
		fs.readFile(url, 'utf8', function(err, data){
			if (err) { throw err }
			cb(data)
		})
	}

	function parseString(data){
		console.log(data.split(','))
	}

	readIt(url, parseString)

 }

//Reads the file in chunks and parses each chunk, returning an array of arrays
//Through2 reference: https://github.com/rvagg/through2
csv.parsePipe = function(url){
	var all = []

	fs.createReadStream(url)
		.pipe(through2.obj(function (chunk, enc, cb) {
			this.push(chunk.toString('utf-8'))
			cb()
		}))

	.on('data', function (data) {
    	all.push(data.split(','))
  	})

  	.on('end', function () {
    	console.log(all)
  	})
}

//Treats the Parser as an object
function Parser(){

	this.readFile = function(url){
		this.stringToParse = fs.readFileSync(url, 'utf8', function (err, data) {
			if (err) { throw err }
		});
	}

	this.separate = function(){
		this.separatedString = this.stringToParse.split(',')
	}

	this.printOut = function(){
		console.log(this.separatedString)
	}

	this.run = function(url){
		this.readFile(url)
		this.separate()
		this.printOut()
	}

}

csv.buildParser = function(){
	return new Parser()
}
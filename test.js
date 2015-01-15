// Load the csv-parser
var csv = require('./lib/csv.js')

var smallData 	= './sample_data/sample.csv'
var BigData 	= './sample_data/Fielding.csv'


//Synchronous Parsing
// var syncR = csv.parseSync(smallData)
// console.log(syncR)

//ASynchronous Parsing
var aSyncR = csv.parseAsync(smallData)
// console.log(aSyncR)

// csv.parseAsync(url, function(error, data){
// 	if (error)
// 		throw error
// 	console.log(data)	
// })

// fs.createReadStream('path/to/data.csv')
//  .pipe(csv.parsePipe())
//  .pipe(fs.createWriteStream('path/to/data.txt'))

// var p = csv.parseObject(url)
// p.on('data', function(data){
// 	console.log('got some data:' + data)
// })
// p.on('end', function(){
// 	console.log('no more data')
// })
// p.on('error', function(err){
// 	alert('something error' + err)
// })

// p.run()
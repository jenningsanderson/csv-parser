// Load the csv-parser
var csv = require('./lib/csv.js')

var smallData 	= './sample_data/sample.csv'
var bigData 	= './sample_data/Fielding.csv'


// Synchronous Parsing
csv.parseSync(smallData)

//ASynchronous Parsing
csv.parseAsync(smallData)

//Piped Parsing
csv.parsePipe(smallData)

//Object Parsing
var p = csv.buildParser()
p.run(smallData)
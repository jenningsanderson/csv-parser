var csv = require('./lib/csv.js')

var r = csv.parseSync(url)
console.log(r)

csv.parseAsync(url, function(error, data){
	if (error)
		throw error
	console.log(data)	
})

fs.createReadStream('path/to/data.csv')
 .pipe(csv.parsePipe())
 .pipe(fs.createWriteStream('path/to/data.txt'))

var p = csv.parseObject(url)
p.on('data', function(data){
	console.log('got some data:' + data)
})
p.on('end', function(){
	console.log('no more data')
})
p.on('error', function(err){
	alert('something error' + err)
})

p.run()
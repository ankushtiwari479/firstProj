function hello(param) {
	console.log("Hello "+param[0]);
}

var argv = process.argv.splice(2);

hello(argv);
let fs = require("fs");

export default (req, res) => {
	function returnData(res, data) {
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = 200;
		res.end(JSON.stringify(data));
	}

	function returnFail(res) {
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = 500;
		res.end();
	}

	let path;
	if (process.env.NODE_ENV === "production") {
		path = "saveData/";
	} else {
		path = "public/saveData/";
	}

	fs.readdir(".", function(err, items) {
		console.log(items);

		for (var i=0; i<items.length; i++) {
			console.log(items[i]);
			if (fs.lstatSync(items[i]).isDirectory()) {
				fs.readdir(items[i], function(err, items) {
					for (var j=0; j<items.length; j++) {
						console.log(items[i] + "/" + items[i][j]);
					}
				});
			}
		}
	});

	if (req.method === "POST") {

		path = path + req.body.user + ".json";
		fs.readFile(path, (err, data) => {
			if (err) {
				console.log(err.stack);
				returnFail(res);
			} else {
				let json = JSON.parse(data);
				let newJson = {...json, ...req.body.data};
				fs.writeFile(path, JSON.stringify(newJson), (err) => {
					if (err) {
						console.log(err.stack);
						returnFail(res);
					} else {
						console.log("saved");
						returnData(res, newJson);
					};
				});
			};
		});

	} else if (req.method === "GET") {
		path = path + req.query.user + ".json";
		fs.readFile(path, (err, data) => {
			if (err) {
				console.log(err.stack);
				returnFail(res);
			} else {
				console.log(data);
				returnData(res, JSON.parse(data));
			};
		});
	}
}

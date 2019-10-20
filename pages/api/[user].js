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

	if (req.method === "POST") {
		let path = "saveData/" + req.body.user + ".json";
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
		let path = "saveData/" + req.query.user + ".json";
		fs.readFile(path, (err, data) => {
			if (err) {
				console.log(err.stack);
				returnFail(res);
			} else {
				returnData(res, JSON.parse(data));
			};
		});
	}
}

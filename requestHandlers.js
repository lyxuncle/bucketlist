var querystring = require("querystring"),
	fs = require("fs"), 
	formidable = require("formidable");

function start(response){
	console.log("Request handler 'start' was called.");
	// var body = '<html>' + 
	// 	'<head>' +
	// 	'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
	// 	'</head>' + 
	// 	'<body>' +
	// 	'<form action="/upload" enctype="multipart/form-data" method="post">' + 
	// 	'<input type="file" name="upload" />' + 
	// 	'<input type="submit" value="Upload file" />' + 
	// 	'</form>' + 
	// 	'</body>' + 
	// 	'</html>';

	var body = '<!doctype html>' +
				'<html ng-app ng-controller="BucketListCtrl">' + 
				    '<head>' + 
				        '<title>Bucket List</title>' + 
				        '<script src="js/angular-1.0.1.js"></script>' + 
				        '<script src="js/controller.js"></script>' + 
				    '</head>' + 
				    '<body>' + 
				        '<div class="">' + 
				            '<div class="">' + 
				                '<div class="">' + 
				                    'Add: <input ng-model="item">' + 
				                '</div>' + 
				                '<div class="">' + 
				                    '<ul>' + 
				                        '<li ng-repeat="item in list | orderBy:orderProp">' + 
				                            '{{item.statue}}' + 
				                            '<p>' + 
				                            '{{item.cont}}' + 
				                            '</p>' + 
				                        '</li>' + 
				                    '</ul>' + 
				                    '<p>Total number of bucket: {{list.length}}</p>' + 
				                '</div>' + 
				            '</div>' + 
				        '</div>' + 
				    '</body>' + 
				    '<script>' + 
				'</script>' + 
				'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, request){
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files){
		console.log("parsing done");
		//fs.renameSync(files.upload.path, "/tmp/test.png");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("recieved image:<br />");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(response, postData){
	console.log("Request handler 'show' was called.");
	fs.readFile("test.png", "binary", function(error, file){
		if(error){
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write("error\n");
			response.end();
		}else{
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;
var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "chan.benton+test@gmail.com";
var GITHUB_TOKEN = "df8eaf3035c414619ad2cf9a7f2608c0e09f6f3e";

// Pulls a list of contributors for a given git from repoOwner/repoName

function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function (err) {                              
      throw err; 
    })
    .on('response', function (response) {
    })
    .pipe(fs.createWriteStream(filePath));
    // concat avatar/login.jpg
}
function getRepoContributors(repoOwner, repoName, cb) {
  
  var options = {
  	url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  	headers: {
    	'User-Agent': "GitHub Avatar Downloader - Student Project"
  	}
  };
  
  request(options, function (error, response, body){
  	var data = JSON.parse(body);
  	cb(data);
  });

}

getRepoContributors("jquery", "jquery", function(data){
	for (each in data){		
		var profile = data[each];
		dir = "./avatars/";
		var path = dir + profile.login + ".jpg";
		if (!fs.existsSync(dir)){
			fs.mkdir(dir);
		}
		console.log(profile.login);
		downloadImageByURL(profile, path)
	}
});
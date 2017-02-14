var request = require('request');
var fs = require('fs');


var owner = process.argv.slice(2,3)[0];
var repository = process.argv.slice(3,4)[0];

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "chan.benton+test@gmail.com";
var GITHUB_TOKEN = "df8eaf3035c414619ad2cf9a7f2608c0e09f6f3e";

// Pulls a list of contributors for a given git from repoOwner/repoName
function downloadImageByURL(url, filePath) {
  request(url)
    .on('error', function (err) {                   
      throw err; 
    })
    .pipe(fs.createWriteStream(filePath));
}
function getRepoContributors(repoOwner, repoName, cb) {
  
  // Custom HTTP Header in order to comply with GitHub's parameters to search.
  var options = {
  	url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  	headers: {
    	'User-Agent': "GitHub Avatar Downloader - Student Project"
  	}
  };
  
  // GETs array and parses by JSON for legibility
  request(options, function (error, response, body){
  	var data = JSON.parse(body);
  	cb(data);
  });
}

// Starts function to search repoContributors, callback provided to create dir "./avatars/" and download image
getRepoContributors(owner, repository, function(data){
	for (each in data){		
		var profile = data[each];
		dir = "./avatars/";
		var path = dir + profile.login + ".jpg";
		if (!fs.existsSync(dir)){
			fs.mkdir(dir);
		}
		downloadImageByURL(profile, path);
	}
});
console.log("Program complete!");
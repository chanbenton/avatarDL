var request = require('request');
var https = require('https');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "chan.benton+test@gmail.com";
var GITHUB_TOKEN = "df8eaf3035c414619ad2cf9a7f2608c0e09f6f3e";

// Pulls a list of contributors for a given git from repoOwner/repoName
function getRepoContributors(repoOwner, repoName, cb) {
  
  var options = {
  	url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  	headers: {
    	'User-Agent': "GitHub Avatar Downloader - Student Project"
  	}
  };
  request(options, function (error, response, body){
  	var data = JSON.parse(body);
  	console.log(data);
  	for (each in data){
  		console.log(data[each].avatar_url);
  	}
  });
  
}


// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var info = JSON.parse(body);
//     console.log(info.stargazers_count + " Stars");
//     console.log(info.forks_count + " Forks");
//   }
// }

getRepoContributors("jquery", "jquery");
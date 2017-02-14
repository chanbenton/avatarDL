var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

// Pulls a list of contributors for a given git from repoOwner/repoName
function getRepoContributors(repoOwner, repoName, cb) {
	// var GITHUB_USER = "chan.benton+test@gmail.com";
	// var GITHUB_TOKEN = "df8eaf3035c414619ad2cf9a7f2608c0e09f6f3e";

	// var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + 
	// 	'@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
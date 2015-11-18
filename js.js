
var express = require('express')
var app = express()

var SteamApi = require('steam-api');

var optionalSteamId = "76561198051921198";
var user = new SteamApi.User('6B50E53858868777CD06E447A335E61C', optionalSteamId);

var thinky = require('thinky')();
var type = thinky.type;


var friendList = "";
var friendLink = ""


var steamUser = thinky.createModel("User", {
    id: type.string(),
    accountUrl: type.string(),
    userName: type.string(),
}); 

var user = new steamUser({
    id: 34597345983749,
    accountUrl: "http://steam.com/user/thestraded",
    userName: "happytrees"
});

user.saveAll({steamUser: true}).then(function(result) {

});

/*
function getSteamUser() {
	//makes call to steam api

	//return user object
}

function getSteamUserFriends() {
	//makes call to steam api

	//return array of user objects
}


function saveSteamUserFriends(userFriendsArray) {
	//make sure theres a friends database column
	//store array of friends in friends column
}

function getSteamUserById(steamId) {
	//query database for users with steamId

	//var userFromDatabase = rethink.query({id: steamId}); read the docs

	//getSteamUserFriends();
	return {
		user: userFromDatabase,
		friends: getSteamUserFriends(userFromDatabase.id)
	}
}

function getSteamUserFriends(steamId) {
	//steamId is the user whos friends is being retrieved

	//generate query containing steamId.friends id's
		//may be helpful to use underscore to parse object for IDs
		//http://underscorejs.org/#pluck
}





function doShit() {
	var me = getSteamUser();
	var friends = getSteamUserFriends(me.id);

	saveSteamUserFriends([me]);
	saveSteamUserFriends(friends);

	getSteamUserById(me.id);
	getSteamUserFriends(me.id);
}


doShit();






app.get('/', function (req, res) {
	user.GetFriendList(optionalRelationship = 'all', optionalSteamId).done(function(result){
  	
  	var friendCount = result.length-1;
  					
	  					for(var i = 1; i < friendCount; i++)
		  					{
		  						friendList = result[i].personaName + friendList;
		  					}

					res.send(friendList);
				
	});
})
 
app.listen(3000)
*/
var password = require('password-hash-and-salt');

function getHash(newPassword) {
	var newHash;

	password(newPassword).hash(function(error, hash) {
		if (error) {
			console.log("Error creating password hash in passwordHasher.js");
		}

		newHash = hash;
		console.log("New internal hash: " + newHash);
	});

	console.log("New hash: " + newHash);

	return newHash;	
}

function compare(newPassword, oldHash) {
	var isValidPassword = false;

	console.log("New Password: " + newPassword);

	password(newPassword).verifyAgainst(oldhash, function(error, verified) {
		if (error) {
			console.log("Error verifying newPassword against oldhash.");
		}

		isValidPassword = verified;
	});

	console.log("Password validity is: " + isValidPassword);

	return isValidPassword;
}

exports.getHash = getHash;
exports.compare = compare;
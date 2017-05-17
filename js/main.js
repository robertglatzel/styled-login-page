var people = [
	{
		username: "sam",
		password: "sad"
	},
	{
		username: "alex",
		password: "cake"
	},
	{
		username: "jake",
		password: "elephant"
	}
]

function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	for ( i = 0; i < people.length; i++) {
		if(people[i].username == username && people[i].password == password){
			console.log("You're logged in");
			alert("You've logged in")
			document.getElementById("landingPage").style.display = "none"

			//trying to change the background
			var run = document.getElementById("loginPage")
			document.body.style.backgroundImage = "url('img/outrunMoving.gif')";

			var welcome = document.createElement('h1')
			welcome.textContent = "Welcome"
			welcome.className = "welcome animated pulse"
			document.getElementById("loginContainer").appendChild(welcome)
			return
		}
	}
	console.log("try again")
	alert("Invalid username and password.")
	return
}



function registerUser(){
	var newUser = document.getElementById("newUser").value
	var newPassword = document.getElementById("newPassword").value

	for(i = 0; i < people.length; i++) {
		if (newUser == people[i].username) {
			alert("Username already taken. Try again.")
			console.log("Username already taken. Try again.")
			return;
		}else if(newPassword.length < 8) {
			alert("Password is too short. Try again.")
			console.log("Password too short.")
			return;
		}
	}

	people.push({
			username: newUser,
			password: newPassword
		})
	console.log("new user created")
	alert("Welcome " + newUser + ", you are now registered.")
	return
}


















































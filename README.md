# poll
A poll tool based on Node.js, MongoDB and Express.

# Basic Routes
/			--> vote
/add		--> add poll options
/summary	--> show latest poll result

# Schema
Subject
	subject
	options

Option
	title
	desc
	votes

Vote
	by
	at


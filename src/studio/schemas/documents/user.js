export default {
	title: "User",
	name: "user",
	type: "document",
	fields: [
		{
			title: "Username",
			name: "username",
			type: "string"
		},
		{
			title: "Books Logged",
			name: "booksLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "book" }]
			}]
		},
		{
			title: "Movies Logged",
			name: "moviesLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "movie" }]
			}]
		},
		{
			title: "Series Logged",
			name: "seriesLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "series" }]
			}]
		},
		{
			title: "Games Logged",
			name: "gamesLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "game" }]
			}]
		},
		{
			title: "Webcomics Logged",
			name: "webcomicsLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "webcomic" }]
			}]
		},
	]
}
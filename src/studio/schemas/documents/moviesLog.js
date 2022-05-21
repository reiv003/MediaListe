export default {
	title: "Movies Log",
	name: "moviesLog",
	type: "document",
	fields: [
		{
			title: "User",
			name: "user",
			type: "reference",
			to: [{ type: "user" }]
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug'
		},
		{
			title: "Movies Logged",
			name: "moviesLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "movie" }]
			}]
		}
	],

	preview: {
		select: {
			title: "user.username"
		}

	}
}
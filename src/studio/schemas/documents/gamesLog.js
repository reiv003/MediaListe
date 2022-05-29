export default {
	title: "Games Log",
	name: "gamesLog",
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
			title: "Games Played",
			name: "gamesPlayed",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "game" }]
			}]
		}
	],

	preview: {
		select: {
			title: "user.username"
		}

	}
}
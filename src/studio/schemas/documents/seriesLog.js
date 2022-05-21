export default {
	title: "Series Log",
	name: "seriesLog",
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
			title: "Series Logged",
			name: "seriesLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "series" }]
			}]
		}
	],

	preview: {
		select: {
			title: "user.username"
		}

	}
}
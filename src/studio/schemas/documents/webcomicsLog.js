export default {
	title: "Webcomics Log",
	name: "webcomicsLog",
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
			title: "Webcomics Logged",
			name: "webcomicsLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "webcomic" }]
			}]
		}
	],

	preview: {
		select: {
			title: "user.username"
		}

	}
}
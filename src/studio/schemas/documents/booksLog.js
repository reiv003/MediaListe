export default {
	title: "Books Log",
	name: "booksLog",
	type: "document",
	fields: [
		{
			title: "User",
			name: "user",
			type: "reference",
			to: [{ type: "user" }]
		},
		/*Tried to create a dynamic slug using the username, but was unable to reach this value. result either gets returned as object object, undefined or doesn't generate a slug (I tried prefixing a string as well, in this case book.) using the code `book/${user.username}` and variants (just user, in quotes, etc) and using the function syntax in the sanity docs, but could not make it work. As a temporary compromise I just write the slug manually in Sanity using the media type + username.
		 */
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug'
		},
		{
			title: "Books Logged",
			name: "booksLogged",
			type: "array",
			of: [{
				type: "reference",
				to: [{ type: "book" }]
			}]
		}
	],

	preview: {
		select: {
			title: "user.username"
		}

	}
}

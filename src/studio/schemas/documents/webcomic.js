export default {
	title: "Webcomic",
	name: "webcomic",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string"
		},
		{
			title: "Date Added",
			name: "dateAdded",
			type: "datetime",
			initialValue: (new Date()).toISOString(),
			readOnly: true,
			options: {
				dateFormat: 'DD-MMM-YYYY'
			}
		},
		{
			title: "Date Completed",
			name: "dateCompleted",
			type: "date",
			options: {
				dateFormat: 'DD-MMM-YYYY'
			}
		},
		{
			title: "Pages Read",
			name: "chaptersRead",
			type: "number"
		},
		{
			title: "Pages Total",
			name: "chaptersTotal",
			type: "number"
		},
		{
			title: "Status",
			name: "status",
			type: "string",
			options: {
				list: [
					{ title: "Active", value: "active" },
					{ title: "On Hold", value: "onHold" },
					{ title: "Dropped", value: "dropped" },
					{ title: "Completed", value: "completed" },
					{ title: "Planned", value: "planned" }
				]
			}
		}
	]
}
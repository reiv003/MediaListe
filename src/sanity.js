import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'n69vyccf',
	dataset: 'production',
	apiVersion: '2022-05-21',
	useCdn: false
});
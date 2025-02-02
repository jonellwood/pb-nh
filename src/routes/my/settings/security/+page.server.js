import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection('users').update(locals?.user?.id, data);
			locals.pb.authStore.clear();
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/login');
	}
};

import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
			// console.log(body.email);
			// console.log(body.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log('Error', err);
			throw error(500, 'Something went wrong logging in');
		}
		throw redirect(303, '/');
	}
};

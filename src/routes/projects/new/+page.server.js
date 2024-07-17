import { error, redirect, fail } from '@sveltejs/kit';
import { createProjectSchema } from '$lib/schemas.js';
import { validateData } from '$lib/utils.js';
import { serialize } from 'object-to-formdata';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	create: async ({ request, locals }) => {
		const body = await request.formData();

		const thumb = body.get('thumbnail');
		if (thumb.size === 0) {
			body.delete('thumbnail');
		}
		body.append('user', locals.user.id);

		const { formData, errors } = await validateData(body, createProjectSchema);
		// eslint-disable-next-line no-unused-vars
		const { thumbnail, ...rest } = formData;

		if (errors) {
			return fail(400, {
				data: rest,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('projects').create(serialize(formData));
			// return {
			//     success: true
			// };
		} catch (err) {
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/');
	}
};

import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	const getProject = async (projectId) => {
		try {
			const project = serializeNonPOJOs(await locals.pb.collection('projects').getOne(projectId));
			// console.log(project);
			return { project };
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const project = await getProject(params.projectId);

	return {
		// project: getProject(params.projectId)
		project: project.project
	};
};

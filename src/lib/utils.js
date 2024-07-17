const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const generateUsername = () => {
	const adjectives = [
		'Sparkling',
		'Tranquil',
		'Radiant',
		'Lively',
		'Serene',
		'Vibrant',
		'Majestic',
		'Whimsical',
		'Exquisite',
		'Resplendent',
		'Enchanting',
		'Blissful',
		'Harmonious',
		'Captivating',
		'Mystical',
		'Ethereal',
		'Enigmatic',
		'Vivacious',
		'Jubilant',
		'Effervescent'
	];

	const nouns = [
		'Dragon',
		'Sword',
		'Wizard',
		'Hobbit',
		'Chest',
		'Dwarf',
		'Bard',
		'Blossom',
		'Trinket',
		'Dungeon',
		'Fate',
		'NPC',
		'Ring',
		'Paladin',
		'Campaign',
		'Enchantment',
		'ScrollOFDeath',
		'Curse',
		'Sanctuary',
		'Prayer'
	];
	const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
	const id = randomBytes(2).toString('hex');

	return `${randomAdjective}-${randomNoun}-${id}`;
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.error('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};

// PNG_ICON_IN_NODE_DESCRIPTION
// SUBTITLE_MISSING_IN_NODE_DESCRIPTION
export class QuickBooks implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'QuickBooks',
		name: 'quickbooks',
		icon: 'file:quickbooks.png',
		group: ['transform'],
		version: 1,
		Xsubtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the QuickBooks API',
		defaults: {
			name: 'QuickBooks',
			color: '#2CA01C',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'quickBooksOAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Bill',
						value: 'bill',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
				],
				default: 'customer',
				description: 'Resource to consume',
			},
		],
	};
}

// DISPLAYNAME_NOT_ENDING_WITH_TRIGGER_IN_NODE_DESCRIPTION
// NAME_NOT_ENDING_WITH_TRIGGER_IN_NODE_DESCRIPTION
export class BoxTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Box Traigger', // misspelled
		name: 'boxTraigger', // misspelled
		icon: 'file:box.svg',
		group: ['trigger'],
		version: 1,
		subtitle: 'Whatever',
		description: 'Starts the workflow when a Box events occurs',
		defaults: {
			name: 'Box Trigger',
			color: '#00aeef',
		},
		inputs: [],
		outputs: ['main'],
	}
}

// NON_STANDARD_SUBTITLE
export class Drift implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Drift',
		name: 'drift',
		icon: 'file:drift.png',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"]',
		description: 'Consume Drift API',
		defaults: {
			name: 'Drift ',
			color: '#404040',
		},
		inputs: ['main'],
		outputs: ['main'],
	};
}

// WRONG_NUMBER_OF_INPUTS_IN_REGULAR_NODE_DESCRIPTION
export class Misp1 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'MISP',
		name: 'misp',
		icon: 'file:misp.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the MISP API',
		defaults: {
			name: 'MISP',
			color: '#ffffff',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'mispApi',
				required: true,
			},
		],
	}
}

// WRONG_NUMBER_OF_INPUTS_IN_TRIGGER_NODE_DESCRIPTION
export class MispTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'MISP',
		name: 'misp',
		icon: 'file:misp.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the MISP API',
		defaults: {
			name: 'MISP',
			color: '#ffffff',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'mispApi',
				required: true,
			},
		],
	}
}

// WRONG_NUMBER_OF_OUTPUTS_IN_NODE_DESCRIPTION
export class Misp2 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'MISP',
		name: 'misp',
		icon: 'file:misp.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the MISP API',
		defaults: {
			name: 'MISP',
			color: '#ffffff',
		},
		inputs: ['main'],
		outputs: [],
		credentials: [
			{
				name: 'mispApi',
				required: true,
			},
		],
	}
}
import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GrokApi implements ICredentialType {
	name = 'grokApi';
	displayName = 'Grok API';
	documentationUrl = 'https://console.x.ai/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'The Grok API key',
		},
	];
}

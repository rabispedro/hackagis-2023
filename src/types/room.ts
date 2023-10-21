export interface IRoom {
	id: number;
	image: string;
	name: string;
	slug: string;
	description: string;
	online: boolean;
	watchers: number;
}
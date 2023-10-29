import ForroTemplate from "./../assets/forro.jpg"
import NovelasTemplate from "./../assets/novelas .jpg"
import { ICategory } from "../types/category";

export const categories : ICategory[] = [
	{
		id: 1,
		image: NovelasTemplate,
		name: "Novela",
		slug: "novela"
	},
	{
		id: 2,
		image: ForroTemplate,
		name: "Forró",
		slug: "forro"
	}
]
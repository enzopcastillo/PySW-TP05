export class Pelicula {
    title: string;
    description: string;
    rating: string;
    year: number;
    image: string;

    constructor(title: string='', description: string='', rating: string='', year:number=0, image: string=''){
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.year = year;
        this.image = image;
    }
}

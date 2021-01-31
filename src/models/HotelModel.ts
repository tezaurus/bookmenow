export default class HotelModel {
    id: number;
    photo: string;
    title: string;
    description: string;

    constructor() {
        this.id = 0;
        this.title = '';
        this.photo = '';
        this.description = '';
    }
}
import Hotel from '@/models/Hotel'

export default class Booking {
    id: number;
    hotel: Hotel;
    name: string;
    email: string;
    phone: string;

    constructor() {
        this.id = Date.now();
        this.hotel = new Hotel();
        this.name = '';
        this.email = '';
        this.phone = '';
    }
}
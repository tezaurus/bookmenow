import HotelModel from '@/models/HotelModel'

export default class Booking {
    id: number;
    hotel: HotelModel;
    name: string;
    email: string;
    phone: string;

    constructor() {
        this.id = Date.now();
        this.hotel = new HotelModel();
        this.name = '';
        this.email = '';
        this.phone = '';
    }
}
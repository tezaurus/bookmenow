import HotelModel from '@/models/HotelModel'

export default class Booking {
    id: string;
    hotel: HotelModel;
    name: string;
    email: string;
    phone: string;

    constructor() {
        this.id = Date.now().toString();
        this.hotel = new HotelModel();
        this.name = '';
        this.email = '';
        this.phone = '';
    }
}
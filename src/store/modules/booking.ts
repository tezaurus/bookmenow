import Booking from '@/models/Booking'

export default {
    state: {
        bookings: Array<Booking>(),
    },

    actions: {
        // async sendBooking({ commit }, bookingData) {
        //     // ~ POST запрос на сервер
        //     // нужно будет переработать метод submitBooking в BookingForm
        //     // fetch('...', { method: 'POST', body: JSON.stringify(bookingData)})
        //     //     .then(async response => {
        //     //         const data = await response.json();

        //     //         if (! data.ok) {
        //     //             const error = (data && data.message) || data.status;
        //     //             return Promise.reject(error);
        //     //         }
        //     //     })
        //     //     .catch(error => {
        //     //         console.log(error);
        //     //     });

        //     commit('storeBooking', bookingData);
        // }
    },

    mutations: {
        storeBooking(state: any, booking: Booking) {
            state.bookings.push(booking);
        },
    },

    getters: {
        bookings(state: any) {
            return state.bookings;
        },
    }
}
import Hotel from '@/models/Hotel'

export default {
    state: {
        hotels: Array<Hotel>(),
        currentHotel: Hotel,
        start: 0,
        limit: 10,
    },

    actions: {
        async fetchHotels({ commit, getters }) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start${getters.start}&_limit=${getters.limit}`);
            const postsJsonData = await response.json();

            // console.log(postsJsonData);

            // Convert to Hotel type
            const hotelsJsonData = postsJsonData.map((post: any) => {
                const randomNumber = Math.floor(Math.random() * 7) + 1;

                return {
                    id: post.id,
                    photo: `/hotels/photos/hotel-80x60-00${randomNumber}.jpg`,
                    title: post.title,
                    addr: post.body,
                }
            });

            // console.log(hotelsJsonData);

            commit('loadHotels', hotelsJsonData);
            commit('incrementStart');
        },

        // async getCurrentHotel({ commit, getters, dispatch }, id) {
        //     // Запрос на backend, если данных в hotels мало
        //     // const response = await fetch('.../id');
        //     // commit('setCurrentHotel', await response.json());

        //     if (getters.hotels.length === 0)
        //         await dispatch('fetchHotels');

        //     const hotel: Hotel = getters.hotels.find(hotel => hotel.id === id);

        //     commit('setCurrentHotel', hotel);
        // }
    },

    mutations: {
        incrementStart(state: any) {
            state.start += 10;
        },

        loadHotels(state: any, hotels: Array<Hotel>) {
            state.hotels = hotels;
        },

        setCurrentHotel(state: any, hotel: Hotel) {
            state.currentHotel = hotel;
        }
    },

    getters: {
        start(state: any) {
            return state.start;
        },

        limit(state: any) {
            return state.limit;
        },

        hotels(state: any) {
            return state.hotels;
        },

        currentHotel(state: any) {
            return state.currentHotel;
        }
    }
}
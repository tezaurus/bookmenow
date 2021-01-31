import HotelModel from '@/models/HotelModel'

export default {
    state: {
        hotels: Array<HotelModel>(),
        hotel: HotelModel,
        start: 0,
        limit: 20,
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
                    description: post.body,
                }
            });

            // console.log(hotelsJsonData);

            commit('loadHotels', hotelsJsonData);
            commit('incrementStart');
        },

        async fetchHotel({ commit, getters }, id: string) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const postJsonData = await response.json();

            // Convert to Hotel type
            const hotelJsonData = {
                id: postJsonData.id,
                photo: `/hotels/photos/hotel-640x360-001.jpg`,
                title: postJsonData.title,
                description: postJsonData.body,
            }

            commit('loadHotel', hotelJsonData);
        },
    },

    mutations: {
        incrementStart(state: any) {
            state.start += 10;
        },

        loadHotels(state: any, hotels: Array<HotelModel>) {
            state.hotels = hotels;
        },

        loadHotel(state: any, hotel: HotelModel) {
            state.hotel = hotel;
        },

        // setCurrentHotel(state: any, hotel: HotelModel) {
        //     state.currentHotel = hotel;
        // }
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

        hotel(state: any) {
            return state.hotel;
        }
    }
}
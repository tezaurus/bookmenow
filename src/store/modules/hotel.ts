import HotelModel from '@/models/HotelModel'

export default {
  state: {
    hotels: Array<HotelModel>(),
    hotel: HotelModel,
    start: 0,
    limit: 14,
  },

  actions: {
    async fetchHotels({ commit, getters }) {
      if (getters.start > 50)
        return Promise.reject('enough');

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${getters.start}&_limit=${getters.limit}`);
      const postsJsonData = await response.json();

      // Convert to Hotel type
      // Messy, but it's OK now :)
      const hotelsJsonData = postsJsonData.map((post: any) => {
        const randomNumber = Math.floor(Math.random() * 7) + 1; // 7 - is totaly enabled count of photos

        return {
          id: post.id,
          photo: `/hotels/photos/hotel-80x60-00${randomNumber}.jpg`,
          title: post.title,
          description: post.body,
        }
      });

      commit('loadHotels', hotelsJsonData);
      commit('incrementStart');
    },

    async fetchHotel({ commit, getters }, id: string) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const postJsonData = await response.json();

      // Convert to Hotel type
      // Messy, but it's OK now :)
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
      state.start += state.limit;
    },

    loadHotels(state: any, hotels: Array<HotelModel>) {
      state.hotels.push(...hotels);
    },

    loadHotel(state: any, hotel: HotelModel) {
      state.hotel = hotel;
    },
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

import axios from 'axios';

export default class NewsApiService {
    constructor() {
       this.searchQuery = '';
       this.page = 1;
    }

    async  fetchImage() {
        const options = {
            method: "GET",
            image_type: photo,
            orientation: horizontal,
            safesearch: true,

        };
    
        try {
            const response = await axios.get(`https://pixabay.com/api/?key='30077711-4b113b89ab0e54a97a0c4d035'&q=${this.searchQuery}&per_page=40&page=${this.page}`, options);
            console.log(response);
          const data = response.data.hits;
             return data;
            this.incrementPage();
          

        } catch (error) {
            console.error(error);
        }   
    }

    incrementPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query (newQuery) {
        this.searchQuery = newQuery;
    }

}
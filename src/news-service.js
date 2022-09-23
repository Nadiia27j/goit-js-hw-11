
import axios from 'axios';
export default class NewsApiService {
    constructor() {
       this.searchQuery = '';
       this.page = 1;
    }

    async fetchImage() {
        // console.log(this);
        const options = {
            method: "GET",
            key: '30077711-4b113b89ab0e54a97a0c4d035',
            image_type: photo,
            orientation: horizontal,
            safesearch: true,
        }
    
        try {
            const response = await axios.get(`https://pixabay.com/api&q=${this.searchQuery}&per_page=40&page=${this.page}`, options);
            const data = response.data;
            console.log(data);
            this.incrementPage();
            return data;

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



// return fetch(`https://pixabay.com/api?q=${this.searchQuery}&per_page=40&page=1`, options)
        //  .then(response => {
        //    if (response.status !== 200) {
        //        throw new Error(response.status);;
        //    } 
        //    return response.json();
        // });
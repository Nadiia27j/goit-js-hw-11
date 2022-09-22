
import axios from 'axios';
export default class NewsApiService {
    constructor() {
       this.searchQuery = '';

    }

    fetchImage(searchQuery) {
        const url = `https://pixabay.com/api?q=${searchQuery}&per_page=40&page=1`;
        const options = {
            key: '30077711-4b113b89ab0e54a97a0c4d035',
            image_type: photo,
            orientation: horizontal,
            safesearch: true,
        }
    
        return fetch(url, options)
         .then(response => {
           if (response.status !== 200) {
               throw new Error(response.status);;
           } 
           return response.json();
        });
         
    }

}


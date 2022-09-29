
import axios from 'axios';

export default class NewsApiService {
    constructor() {
       this.searchQuery = '';
       this.page = 1;
    }

    async  fetchImage() {
    
        const BASE_URL = `https://pixabay.com/api/`;
        const API_KEY = `30077711-4b113b89ab0e54a97a0c4d035`;
    
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
            const data = response.data.hits;
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











async function onFormSubmit(event) {
    event.preventDefault();
    searchQuery = event.currentTarget.searchQuery.value;
  
    if (searchQuery === '') {
    return;
    }
  
    const response = await fetchImage(searchQuery, page);
  
    if (response.total > 0) {
        refs.loadMoreBtn.classList.remove('hidden');
        Notiflix.Notify.success(`Hooray! We found ${response.total} images.`);
        refs.gallery.innerHTML = '';
        renderGallery(response.hits);
        lightbox.refresh();
    } else {
        refs.gallery.innerHTML = '';
        Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
        );
        refs.loadMoreBtn.classList.add('hidden');
    }
  }
  
  async function clickLoadMoreBtn() {
    page += 1;
    const response = await fetchImage(searchQuery, page);
    renderGallery(response.hits);
    lightbox.refresh();
    hits += response.total;
    if (hits === response.total) { 
        refs.loadMoreBtn.classList.add('hidden');
        Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
    };
  }
  
  
  
  
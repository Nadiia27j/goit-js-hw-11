import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import  NewsApiService  from './news-service';
export { renderCard } from './renderCard';


const refs = {
    formEl: document.querySelector('.search-form'),
    inputEl: document.querySelector('.search-form__input'),
    buttonEl: document.querySelector('.search-form__button'),
    galleryEl: document.querySelector('.gallery'),
    buttonLoad: document.querySelector('.load-more'),
}

const newsApiService = new NewsApiService();
console.log(newsApiService);

refs.formEl.addEventListener('submit', onSearch);
refs.buttonLoad.addEventListener('click', onLoadMore);



function onSearch(e) {
    e.preventDefault;

    newsApiService.query = e.currentTarget.elements.query.value;
    newsApiService.fetchImage();

    newsApiService.resetPage();

    if(newsApiService.query === '') {
        refs.galleryEl.innerHTML = '';
        refs.onLoadMore.classList.add('is-hidden');
        
    }

    renderCard(newsApiService)
}  


//  ф-я Завантажити більше зображень 

function onLoadMore() {
    newsApiService.fetchImage(searchQuery);
}

// function onError() {
//     if (searchQuery === []) {
//         Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//     }
// }



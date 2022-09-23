
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import  NewsApiService  from './news-service';
import { renderCard } from './renderCard';


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
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchImage();

    // refs.onLoadMore.classList.add('is-hidden');

  // при новому запиті очищає галерею
  refs.galleryEl.innerHTML = '';


    if(newsApiService.query === '') {
        return Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    }

    refs.galleryEl.insertAdjacentHTML('beforeend', renderCard(data));

    renderCard()
    onLoadMore()
} 




//  ф-я Завантажити більше зображень 

function onLoadMore() {
    newsApiService.fetchImage();
    refs.galleryEl.insertAdjacentHTML('beforeend', renderCard(data));
}


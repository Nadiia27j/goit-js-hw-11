
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import  NewsApiService  from './news-service';
// import renderCard  from './renderCard';

const refs = {
    formEl: document.querySelector('.search-form'),
    inputEl: document.querySelector('.search-form__input'),
    buttonEl: document.querySelector('.search-form__button'),
    galleryEl: document.querySelector('.gallery'),
    buttonLoad: document.querySelector('.load-more'),
}

const newsApiService = new NewsApiService();

refs.formEl.addEventListener('submit', onSearch);
refs.buttonLoad.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();
    

    if(newsApiService.query === '') {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        refs.galleryEl.innerHTML = '';
        return
    }

    refs.galleryEl.innerHTML = '';
        
    newsApiService.fetchImage().then(response => console.log(response)).then(data => {
        renderCard(data);
       
        if (page >= response.hits) {
            Notify.warning("We're sorry, but you've reached the end of search results.");
            // refs.onLoadMore.classList.add('is-hidden');
            return
        }
    }).catch()      
} 

function renderCard(data) {
    const card = data.map(({webformatURL,
       largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,}) => { 
             `<div class="photo-card">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${likes}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${views}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${downloads}
              </p>
            </div>
          </div>`
    }).join('');

    refs.galleryEl.insertAdjacentHTML('beforeend', card);
}


function onLoadMore() {
    buttonLoad.disable();
   fetchImage(query)
   .then(response => {
    if(response.total === 0) {
        buttonLoad.hide();
        Notify.warning('Sorry, there are no images matching your search query. Please try again.');
        return;
    }
    if (r.hits.length === 0) {
       buttonLoad.hide();
        Notiflix.Notify.failure(
          `We're sorry, but you've reached the end of search results`
        );
        return;
      }
      renderCard(data);
      buttonLoad.enable()
   })
   .catch(error => console.log(error));

}


  
  
  
  
  
  
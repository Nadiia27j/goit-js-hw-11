import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import NewsApiService from './news-service';
// import renderCard  from './renderCard';

const refs = {
  formEl: document.querySelector('.search-form'),
  inputEl: document.querySelector('.search-form__input'),
  buttonEl: document.querySelector('.search-form__button'),
  galleryEl: document.querySelector('.gallery'),
  buttonLoad: document.querySelector('.load-more'),
};

const newsApiService = new NewsApiService();

refs.formEl.addEventListener('submit', onSearch);
refs.buttonLoad.addEventListener('click', onLoadMore);

refs.buttonLoad.disabled = false;

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();


  // якщо нічого не введено в інпут видавай повідомлення немає такого зображення
  if (newsApiService.query === '') {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    refs.galleryEl.innerHTML = '';
    return;
  }
 
  // якщо введено слово рендери розмітку на екраан,очищай інпут і роби кнопку завантажити ще активною
  newsApiService
    .fetchImage()
    .then(data => {
      renderCard(data);
      resetPage();
      // refs.buttonLoad.disabled = false;
      
    })
    .catch();
  onLoadMore()
 
}

onLoadMore();

function renderCard(img) {
  refs.galleryEl.insertAdjacentHTML('beforeend', markupGallery(img));
}

function markupGallery(data) {
  return data
    .map(
      ({
        largeImageURL,
        tags,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
<div class="thumb">
    <a href="${largeImageURL}"
            class="gallery__item" >
    <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" width="300" height="300" loading="lazy"
            class="gallery__image"/>
        <div class="info">
            <p class="info-item">
            <b>Likes </b>${likes}
            </p>
            <p class="info-item">
            <b>Views </b>${views}
            </p>
            <p class="info-item">
            <b>Comments </b>${comments}
            </p>
            <p class="info-item">
            <b>Downloads </b>${downloads}
            </p>
         </div>
    </div>
    </a>
</div>`;
      }
    )
    .join('');
}

function onLoadMore() {
    // buttonLoad.disabled = true;
    incrementPage();
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
      buttonLoad.disabled = false;
   })
   .catch(error => console.log(error));

}


































































  
  
  
  

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



refs.formEl.addEventListener('submit', onSearch);


function onSearch() {
    const options = {
        method: "GET",
        image_type: photo,
        orientation: horizontal,
        safesearch: true,
    };

   fetch(`https://pixabay.com/api/?key=30077711-4b113b89ab0e54a97a0c4d035`, options)
   .then(response => response.json)
   .then(data => console.log(data));
       
}





// refs.buttonLoad.addEventListener('click', onLoadMore);



// function onSearch(e) {
//     e.preventDefault();

//     newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();
    
    // newsApiService.resetPage();

//     if(newsApiService.query === '') {
//         Notify.failure('Sorry, there are no images matching your search query. Please try again.')
//         refs.galleryEl.innerHTML = '';
//         refs.onLoadMore.classList.add('is-hidden');
//         return
//     }

    // newsApiService.fetchImage().then(response => response.json()).then(data => {
    //     refs.galleryEl.innerHTML = '';
    //     refs.onLoadMore.classList.remove('is-hidden');

    //     renderCard(data)
    //     refs.galleryEl.insertAdjacentHTML('beforeend', renderCard(data));

    //     if (!data.hits.length) {
    //         Notify.warning("We're sorry, but you've reached the end of search results.");
    //         refs.onLoadMore.classList.add('is-hidden');
    //         return
    //     }
    // });

   
   

//     onLoadMore()
// } 

// //  ф-я Завантажити більше зображень 

// function onLoadMore() {
//     newsApiService.fetchImage();
//     refs.galleryEl.insertAdjacentHTML('beforeend', renderCard(data));
// }















// // нескінченний  скрол

// window.addEventListener('scroll', () => {
//     const documentRect = document.documentElement.getBoundingClientRect();
// });






// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import './css/styles.css';
// import  NewsApiService  from './news-service';
// import { renderCard } from './renderCard';


// const refs = {
//     formEl: document.querySelector('.search-form'),
//     inputEl: document.querySelector('.search-form__input'),
//     buttonEl: document.querySelector('.search-form__button'),
//     galleryEl: document.querySelector('.gallery'),
//     buttonLoad: document.querySelector('.load-more'),
// }

// const newsApiService = new NewsApiService();

// refs.formEl.addEventListener('submit', onSearch);
// refs.buttonLoad.addEventListener('click', onLoadMore);



// function onSearch(e) {
//     e.preventDefault();

//     newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();

//     newsApiService.resetPage();

//     if(newsApiService.query === '') {
//         Notify.failure('Sorry, there are no images matching your search query. Please try again.')
//         refs.galleryEl.innerHTML = '';
//         refs.onLoadMore.classList.add('is-hidden');
//         return
//     }

//     newsApiService.fetchImage().then(response => console.log(response)).then(data => {
//         refs.galleryEl.innerHTML = '';
//         refs.onLoadMore.classList.remove('is-hidden');

//         renderCard(data)

//         if (!data.hits.length) {
//             Notify.warning("We're sorry, but you've reached the end of search results.");
//             refs.onLoadMore.classList.add('is-hidden');
//             return
//         }
//     });

   
//     refs.galleryEl.insertAdjacentHTML('beforeend', renderCard(data));

//     onLoadMore()
// } 

// //  ф-я Завантажити більше зображень 

// function onLoadMore() {
//     newsApiService.fetchImage();
//     refs.galleryEl.insertAdjacentHTML('beforeend', renderCard(data));
// }


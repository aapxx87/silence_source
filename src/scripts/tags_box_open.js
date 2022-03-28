export const tags_box_open = 17


const containerFilters = document.querySelector('.container_filters')
const btnOpenTags = document.querySelector('.js-btn_filters')
const btnCloseTags = document.querySelector('.js-btn-close')


btnOpenTags.addEventListener('click', function () {
  containerFilters.classList.add('open')
})


btnCloseTags.addEventListener('click', function () {
  containerFilters.classList.remove('open')
})


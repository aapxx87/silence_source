export const tags_box_open = 17

const btnChangeVisible = document.querySelector('.js-btn_change_visible_folters')
const filterBox = document.querySelector('.fiters_box')

btnChangeVisible.addEventListener('click', function () {
  filterBox.classList.toggle('open')
})


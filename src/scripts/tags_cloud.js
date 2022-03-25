import { base_arr } from './base'
import { render_html_tags, create_list_of_tags } from './render_tags'
export const x = 5;

render_html_tags(create_list_of_tags(base_arr))

const container_img = document.querySelector('.container_img')
const tagCloudButtons = document.querySelectorAll('.js-tag-item')
const btn_reset = document.querySelector('.js-btn-reset')


let filters_active_arr = []

let filter_imgItems_arr = []



tagCloudButtons.forEach(function (el, idx) {

  el.addEventListener('click', function () {

    filter_imgItems_arr = []

    change_tagCloud_style(idx)

    const filter_value = tagCloudButtons[idx].textContent
    const css_class = tagCloudButtons[idx].classList[2]

    create_filters_value_arr(filter_value, css_class)

    render(create_filter_imgItems_arr(filters_active_arr))

  })

})



const change_tagCloud_style = function (idx) {
  tagCloudButtons[idx].classList.toggle('clicked')
}






const create_filters_value_arr = function (filter_value, css_class) {

  if (css_class === undefined) {
    const index = filters_active_arr.indexOf(filter_value)
    filters_active_arr.splice(index, 1)
  } else if (css_class !== 'undefined') {
    filters_active_arr.push(filter_value)
  }

  return filters_active_arr

}






btn_reset.addEventListener('click', function () {

  container_img.innerHTML = ''

  filters_active_arr = []

  filter_imgItems_arr = []

  tagCloudButtons.forEach(function (el, idx) {
    el.classList.remove('clicked')
  })

})









const create_filter_imgItems_arr = function (arr) {

  arr.forEach(function (el) {

    base_arr.forEach(function (item) {

      item.tags.forEach(function (elem) {

        if (elem === el) {
          filter_imgItems_arr.push(item)
        }

      })

    })

  })

  const uniqui_values_img = new Set(filter_imgItems_arr)

  return uniqui_values_img

}




const render = function (arr) {

  container_img.innerHTML = ''

  let markup = ''

  arr.forEach(function (el) {

    markup = markup + `
      <div class="img_item_box">
        <img src="${el.link}" alt="" class="img_item">
      </div>
    `
  })

  container_img.insertAdjacentHTML('afterbegin', markup)

}









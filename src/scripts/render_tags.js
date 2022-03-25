import { base_arr } from './base'
export const render_tags = 'render_tags.jd'

const container_tags = document.querySelector('.js_tags_box')

let array_of_tags = []


export const create_list_of_tags = function (arr) {

  arr.forEach(function (el) {
    array_of_tags.push(el.tags)
  })

  const origin_tags = array_of_tags.flat()

  const unique_tags = new Set(origin_tags)

  return unique_tags

}


export const render_html_tags = function (arr) {

  let markup = ''

  arr.forEach(function (el) {
    markup = markup + `
    <div class="tag-item js-tag-item">${el}</div>
    `
  })

  container_tags.insertAdjacentHTML('afterbegin', markup)


}





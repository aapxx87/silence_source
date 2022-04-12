export const focus_on_picture = 'focus_on_picture.js'



export const define_focus_img = function () {

  const divImages = document.querySelectorAll('.img_item')

  const cont_profile_img = document.querySelector('.container_profile_img')
  const btnOpenTags = document.querySelector('.js-btn_filters')
  const profile_img = document.querySelector('.profile_img')


  divImages.forEach(function (el, idx) {

    el.addEventListener('click', function () {

      const src = divImages[idx].src

      cont_profile_img.style.transform = 'translateY(0)'

      profile_img.src = src

    })

  })

}


export const exit_img_view = function () {

  const btnExit = document.querySelector('.profile_btn_up')
  const cont_profile_img = document.querySelector('.container_profile_img')
  const btnOpenTags = document.querySelector('.js-btn_filters')

  btnExit.addEventListener('click', function () {

    cont_profile_img.style.transform = 'translateY(-100%)'

  })

}





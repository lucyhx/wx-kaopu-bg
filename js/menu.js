(function ($) {
  // Create a new instance of Slidebars
  var controller = new slidebars()

  // Initialize Slidebars
  controller.init()

  // Bottom Slidebar controls
  $('#menu-a').on('click', function (event) {
    event.stopPropagation()
    controller.toggle('slidebar-left')
  })
})(jQuery)
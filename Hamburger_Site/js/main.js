// listen for user click on hamburger
$(".hamburger").on("click", function () {
  // if menu is closed then slide down
  // if menu is open then slide up
  $(".menu").slideToggle();
});

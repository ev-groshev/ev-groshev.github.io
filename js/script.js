$(function () {
  $(".pet__item-favorite").on("click", function () {
    $(this).toggleClass("pet__item-favorite--active");
  });

  $("input[type=email]").on("blur", function () {
    let email = $(this).val();

    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
      console.log("invalid");
      alert("Вы ввели некорректный e-mail!");
    } else {
      console.log("valid");
    }
  });

  $(".gamburger").on("click", function () {
    $(".menu").slideToggle();
  });

  let btn = $("#button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

let petItem = document.querySelectorAll(".pet__item-link.pet__item-link--sold");
for (let i = 0; i < petItem.length; i++) {
  petItem[i].innerHTML = "Продан";
}

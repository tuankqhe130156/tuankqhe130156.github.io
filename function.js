// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $(".header-top");
var $nav = $("nav");

$header_top.find("a").on("click", function () {
  $(this).parent().toggleClass("open-menu");
});

$("#fullpage").fullpage({
  sectionsColor: ["#3dcfa1", "#fc4e5a", "#fffff", "#feaa01", "#fc4e5a"],
  sectionSelector: ".vertical-scrolling",
  navigation: true,
  slidesNavigation: false,
  controlArrows: false,

  fitToSection: true,
  // fitToSectionDelay: 1000,
  // css3: true,
  scrollingSpeed: 1000,
  easing: "easeInOutCubic",
  easingcss3: "ease",
  // continuousVertical: true,
  // touchSensitivity: 10,
  // interlockedSlides: true,
  // fadingEffect: true,
  anchors: [
    "firstSection",
    "secondSection",
    "thirdSection",
    "fourthSection",
    "fifthSection",
  ],
  menu: "#menu",
  normalScrollElements: ".term",
  afterLoad: function (anchorLink, index) {
    $header_top.css("background", "rgba(0, 47, 77, .3)");
    $nav.css("background", "rgba(0, 47, 77, .25)");
    // if (index == 5) {
    //     $('#fp-nav').hide();
    //   }
  },
  afterRender: function(){
    $("#fp-nav ul").hide();
    $("#fp-nav").append("<li><img style='width: 20px;' src='folds/scroll-icon.gif'></li>");
  },
  onLeave: function (index, nextIndex, direction) {
    if (index == 5) {
      $("#fp-nav").show();
    }
  },
});

$("#submit-btn").click(() => {
  alert("hahaha");
  $.ajax({
    url: "https://api.jotform.com/form/220578531259056/submissions?apiKey=86c3e0a8b6d33062a2e2963b5a991a9d",
    type: "PUT",
    data: JSON.stringify([
      {
        5: {
          text: "sadasdasd",
        },
        6: {
          text: "quoctuanck99@gmail.com",
        },
        7: {
          text: "0943169051",
        },
        8: {
          text: "Moc Anh",
        },
        9: {
          text: "Product purchased",
        },
        10: {
          text: "123456",
        },
        12: {
          month: "02",
          day: "01",
          year: "2022",
        },
        13: $("input[type=file]")[0].files[0],
      },
    ]),
    success: function (data) {
      console.log(data);
    },
  });
});

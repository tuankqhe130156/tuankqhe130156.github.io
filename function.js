var $header_top = $(".header-top");
var $nav = $("nav");

$header_top.find("a").on("click", function () {
  $(this).parent().toggleClass("open-menu");
});

$("#fullpage").fullpage({
  sectionsColor: ["#3dcfa1", "#fc4e5a", "#fffff", "#feaa01", "#fc4e5a"],
  sectionSelector: ".vertical-scrolling",
  navigation: false,
  slidesNavigation: false,
  controlArrows: true,
  scrollBar: false,
  fitToSection: true,
  autoScrolling:true,
  css3: true,
	scrollingSpeed: 1000,
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
  },
  onLeave: function (index, nextIndex, direction) {
    if (index == 5) {
      $("#fp-nav").show();
    }
  },
});

(function() {
  "use strict";

  var parallaxContainer = document.querySelector("parallax-container");
  var mainImageEnd = document.querySelector("a#mainImageEnd").getTop();
  var titleText = document.querySelector("#titleText");
  var header = document.querySelector("#header");
  var headerHeight = header.offsetHeight;
  var parallaxImages = document.querySelectorAll(".parallax-image");
  var mainHeading = document.querySelector("#mainImage .section-title-text");
  var mainHeadingOffset = mainHeading.offsetTop - headerHeight;
  var mainHeadingHeight = mainImageEnd - mainHeadingOffset - headerHeight;

  parallaxContainer.addEventListener("scroll", SmoothA.updateHash);
  SmoothA.updateHash();

  parallaxContainer.addEventListener("scroll", function() {
    var scroll = parallaxContainer.scrollTop;

    if (scroll >= mainImageEnd) {
      if (titleText.getAttribute("hidden") !== null) {
        titleText.removeAttribute("hidden");
      }
    } else {
      if (titleText.getAttribute("hidden") === null) {
        titleText.setAttribute("hidden", "");
      }
    }

    var headingScroll = (mainHeadingHeight - (scroll - mainHeadingOffset)) / mainHeadingHeight;
    mainHeading.style.opacity = String(headingScroll);
    
    var insideImage = false;
    for (var i = 0; i < parallaxImages.length; i++) {
      var imageTop = parallaxImages[i].offsetTop;
      var imageBottom = imageTop + parallaxImages[i].offsetHeight;
      if (imageTop <= scroll && scroll < imageBottom - headerHeight) {
        insideImage = true;
      }
    }

    if (insideImage) {
      if (!header.visible) {
        // header.show();
      }
    } else {
      if (header.visible) {
        // header.hide();
      }
    }
  });
}());
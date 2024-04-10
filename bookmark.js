______________________________________________________________________________________________________________________
//OOKMARK: UPDATE COUNT IN MENUBAR
function updateBookmarkCount() {
    let bookmarkKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'];
    let counter = 0;

    bookmarkKeys.forEach(function(key) {
        counter += localStorage.getItem(key) || 0;
    });

    let countElement = document.getElementById("count");
    if (countElement) {
        countElement.textContent = counter;
    }

    let numbersaved = 0;
    if (countElement) {
        bookmarkKeys.forEach(function(key) {
            if (countElement.textContent.toLowerCase().includes('?' + key.toLowerCase())) {
                numbersaved++;
            }
        });
    }

    let indicatorElements = document.querySelectorAll(".indicator");
    indicatorElements.forEach(function(indicatorElement) {
        indicatorElement.textContent = numbersaved;
    });
}

updateBookmarkCount();

$('.bookmark').click(function() {
    setTimeout(updateBookmarkCount, 1);
});

______________________________________________________________________________________________________________________
//BOOKMARK: ANIMATE CARD GOING INTO MENUBAR

$(document).ready(function() {
    var $pageCardTrack = $('.page-card-track');
    var $bookmarks = $(".bookmark");
    
    if ($bookmarks.length === 0 || !$pageCardTrack.length) {
        // Exit early if necessary elements don't exist
        return;
    }

    $bookmarks.click(function() {
        var $clickedBookmark = $(this);
        setTimeout(() => {
            var bookmarkActive = $clickedBookmark.siblings(".resetsthis").hasClass("visible");
            if (bookmarkActive) {
                var scrollTop = $(window).scrollTop();
                var elementOffset = $clickedBookmark.offset().top;
                var distanceToTop = (elementOffset - scrollTop);
                var negativeDistanceToTop = (distanceToTop - 36) * -1;
                var minSize = 0;
                var fullSize = 1;
                var test = $(window).width() - ($clickedBookmark.offset().left + $clickedBookmark.width());
                var mobilePadding = ($(window).width() <= 767) ? 24 : 0;
                var paperToRightEdge = mobilePadding + $(window).width() - ($pageCardTrack.offset().left + $pageCardTrack.width());
                var distanceToRight = test - (paperToRightEdge + mobilePadding + 24);
                
                var $unclickableClone = $clickedBookmark.parent().parent().parent().parent().siblings(".unclickable-clone");
                var $scaleIssue = $unclickableClone.children(".scaleissue");
                
                $unclickableClone.addClass("opacity");
                $(".trigger-bookmark-animation").click();
                $unclickableClone.children(".scaleissue").css('transform', 'scale(' + minSize + ')');
                $unclickableClone.css('transition-duration','750ms');
                $unclickableClone.css({"transform":"translate(" + distanceToRight + "px," + negativeDistanceToTop + "px)"});
                
                setTimeout(() => {
                    $unclickableClone.removeClass("opacity");
                    $unclickableClone.css('transition-duration','0ms');
                    $unclickableClone.css({"transform":"translate(" + minSize + "px," + minSize + "px)"});
                    $scaleIssue.css('transform', 'scale(' + fullSize + ')');
                }, 750);
            }
        }, 1);
    });
});

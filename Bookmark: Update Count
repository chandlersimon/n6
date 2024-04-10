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

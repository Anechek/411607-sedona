'use strict';
(function () {
    var onSearchButtonClick = function (evt) {
        evt.preventDefault();
        popupElement.classList.toggle('search-hotels-show');
    };

    var onFormSubmit = function (evt) {
        if (!inputElements[0].value || !inputElements[1].value || !inputElements[2].value || !inputElements[3].value) {
            evt.preventDefault();
            popupElement.classList.add('search-hotels-error');
            setTimeout(function () {
                popupElement.classList.remove('search-hotels-error');
            }, 1000);
        }
    };
    
    var popupElement = document.querySelector('.search-hotels');
    var inputElements = popupElement.querySelectorAll('input');
    var searchButtonElement = document.querySelector('.button-search');
    searchButtonElement.addEventListener('click', onSearchButtonClick);
    var formElement = document.querySelector('.search-hotels');
    formElement.addEventListener('submit', onFormSubmit);
    popupElement.classList.remove('search-hotels-show');
    
})();

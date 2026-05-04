const main = (function() {
    // vars
    const YEAR_ELEM = document.querySelector('.c-year');

    // functions
    function init() {
        console.log('comienza el vuelo');

        // Actualiza el año
        YEAR_ELEM.textContent = new Date().getFullYear();

        // event handlers
        document.addEventListener('click', (e) => {

        });
    }
    return {
        init
    }
}) ();

document.addEventListener('DOMContentLoaded', function () {
    main.init();
});

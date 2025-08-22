const main = (function() {
    // vars
    // functions
    function init() {
        console.log('comienza el vuelo');

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

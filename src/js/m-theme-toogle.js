const themeToogle = (function() {
    const theme = {
        value: getColorPreference()
    };

    /**
     * Obtiene preferencia de tema
     * */
    function getColorPreference() {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        } else {
            //return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            return 'normal';
        }
    }

    /**
     * Actualiza localStorage y llama a reflectPreference
     * */
    function setPreference() {
        let contrastChecked = document.querySelector('#highContrastCheckbox').checked;
        contrastChecked
            ? localStorage.setItem('theme', 'high-contrast')
            : localStorage.removeItem('theme');
        reflectPreference();
    }

    /**
     * Asigna tema al atributo html y actualiza estado del switch
     * */
    function reflectPreference() {
        document.firstElementChild.setAttribute('data-theme', theme.value);
        if (theme.value === 'high-contrast') {
            document.querySelector('#highContrastCheckbox').checked = true;
        }
    }

    function init() {
        reflectPreference();

        const contrastSelector = document.querySelector('#highContrastCheckbox');
        if (contrastSelector) {
            document.querySelector('#highContrastCheckbox').addEventListener('click', e => {
                theme.value = theme.value === 'high-contrast' ? 'normal' : 'high-contrast';
                setPreference();
            });
        }
    }

    return {
        init
    };
}) ();

document.addEventListener('DOMContentLoaded', function () {
    themeToogle.init();
});

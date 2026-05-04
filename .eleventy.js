module.exports = function(eleventyConfig) {
    
    // Copiar carpetas estáticas al destino final
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");

    // Si usas una librería específica de node_modules (ej. FontAwesome o un script)
    // Copia desde node_modules a una carpeta específica en la salida
    /* eleventyConfig.addPassthroughCopy({
        "node_modules/mi-libreria/dist/libreria.js": "js/vendor/libreria.js"
    }); */

    return {
        dir: {
            input: "src",      
            output: "_site",
            includes: "_includes"
        }
    };
};

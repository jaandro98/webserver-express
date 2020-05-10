const express = require('express')
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

//HBS engine
app.set('view engine', 'hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    
    let palabras = texto.split(' ');
    palabras.forEach( (palabra,index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice().toLowerCase();
    });

    return palabras.join(' ');
});
 
app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre:'Fernando',
        
    })
})
app.listen(port, () => {
    console.log('Estoy escuchando peticiones en el puerto' + port);
});
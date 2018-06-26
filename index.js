let express = require('express');
let app = express();
app.listen(8000);
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));



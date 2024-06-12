import express from "express";
import path from 'path';

const port = 3000
const url = `http://localhost:${port}`
const __dirname = path.resolve();
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');
app.use('/public', express.static(__dirname + '/src/public'));
app.get('/', (req, res)=> res.render('home'));

const handleLister = () => console.log('실행 : ' + url);
app.listen(port, handleLister);
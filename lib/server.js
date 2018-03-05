import express from 'express';
import config  from './config';
import serverRender from '../public/serverApp';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  serverRender(req, res).then((initialData) => {
    res.render('index', { ...initialData });
  });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Ласкаво просимо на наш сайт доставки!'));

app.get('/track/:id', (req, res) => res.send(Відстеження замовлення з ID ${req.params.id}));

app.use((req, res) => res.status(404).send("Вибачте, сторінку не знайдено!"));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Щось пішло не так!');
});

app.listen(3000, () => console.log('Сервер запущено на порті 3000'));

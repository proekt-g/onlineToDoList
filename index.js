const express = require(`express`);
const app = express();

const PORT = process.env.PORT || 80

app.use(express.static('style-static'));
app.use(express.static('html-static'));
app.use(express.static('script-static'));

app.get(`/`, (req, res) => {
    res.end(index.html);
});
app.listen(PORT, () => {
    console.log(`Server has been started...`);
});
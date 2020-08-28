const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors()) 
app.use(express.json());


var houses = [
    {
        id: 0,
        name: "Tan",
        img:"https://github.com/tanlull/test_db/raw/master/images/house1.png",
    },
    {
        id: 1,
        name: "Lull",
        img:"https://github.com/tanlull/test_db/raw/master/images/house2.png",
    },
        {
        id: 2,
        name: "Bingo",
        img:"https://github.com/tanlull/test_db/raw/master/images/house3.png"
        }
];
var images = [
    {
        id: 0,
        name: "Tan",
        img:"https://github.com/tanlull/test_db/raw/master/images/tan.jpg",
    },
    {
        id: 1,
        name: "Lull",
        img:"https://github.com/tanlull/test_db/raw/master/images/lull.jpg",
    },
        {
        id: 2,
        name: "Bingo",
        img:"https://github.com/tanlull/test_db/raw/master/images/bingo.jpg"
        },
    {
        id: 3,
        name: "Preme",
        img:"https://github.com/tanlull/test_db/raw/master/images/preme.jpg"
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello Fucking World</h1>');
});


app.get('/api/images', (req, res) => {
    res.send(images);
});

app.get('/api/houses', (req, res) => {
    res.send(houses);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port " ${port}...`) );
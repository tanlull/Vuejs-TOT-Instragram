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
        img:"https://photos.google.com/share/AF1QipNhmCnzFItlJusnzmIfKTGdr0qhgs9Kg5bw-jfAvPnGkRqURdT5iGTQ8PZVT28WtA/photo/AF1QipMBi9h2V5G9wSz8x2MHi1d8QmwoEqt22Uw-3L9F?key=RV9QTEVzaGZwblpKQkR4aTlKbXoxQUd5ZEI3T1F3",
    },
    {
        id: 1,
        name: "Lull",
        img:"https://photos.google.com/share/AF1QipMQ5dGCFseAJApRcnA_rGv0WJuAIFGqsfJRQO_INPZTKdasAc_3Ukg9kS1wkmAZXg/photo/AF1QipNuqMUlupvyRzPYXCsPo9oUJ5-jgJA8BNFI2ri1?key=d2Z3TlJnaGl0amtlQmVuaU0zUU5fYmZxaXo2VUh3",
    },
        {
        id: 2,
        name: "Bingo",
        img:"https://photos.google.com/share/AF1QipPsd5o9XX9xXqQoAjanWy7TsRD5mlsGKbxRmRArK7A-nGRo0U6xyTigGC2bxCM4QQ/photo/AF1QipNVitEPguCTCLDpX3xjq9x4EnU4oE-jPihlN98X?key=RlEwUXBLM1hES2hhaTdKdW5IWVVWalAzd2xHelZn"
        },
    {
        id: 3,
        name: "Preme",
        img:"https://photos.google.com/share/AF1QipMV3LBFO6PU_389E_nf1Ll4nM6QGU1poophAfgbFcI2lqgVuW0mRHFnsmjXXtH_yg/photo/AF1QipP52GwFUhXscTMmOLssCrEhuZorLr2TK8jpvuZ7?key=Q3FYX09TMk14cXZBSDFpaEFxM0dDMmZUR0E3T0Jn"
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
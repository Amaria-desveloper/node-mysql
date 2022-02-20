const express=require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// require('./routes')(app);

app.listen(port , () => {
    console.log(`запущен на http://localhost/${port}`);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (request, result) => {
    result.send(
        {
            message:  'hi server'
        }
    );
});

// export default {
//     path: '/backend',
//     handler: 'app',
// }
    
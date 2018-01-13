
import * as express from 'express';

const app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Listening ON port 3000!'));

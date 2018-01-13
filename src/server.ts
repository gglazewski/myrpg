
import * as express from 'express';
import * as http from 'http';

const app = express();
const server = new http.Server(app);

server.listen(process.env.PORT || 8081, function() {
  console.log(`Listening on ${server.address().port}`);
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

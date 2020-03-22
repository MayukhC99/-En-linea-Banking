const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const appPort = process.env.PORT || 3000;

app.use(express.static('Account'));
app.use(bodyParser({
    limit: '1mb'
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
    if(req.body.theFile !== "") {
        let theFileString = req.body.theFile;
        let theFileName = req.body.name;
        theFileString = theFileString.replace(/data:image\/(png|jpeg);base64,/, "");
        fs.writeFileSync('profile_images/' + theFileName, theFileString, {
            'encoding': 'base64'
        });
    }

    res.send('UPLOADED');
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`The server is up and running on ${appPort} port.`);
});
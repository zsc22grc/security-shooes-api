const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 3000;

// Your Twilio credentials
const accountSid = 'AC1b8343fc6fe3fed434651d48e0ed9728';
const authToken = 'f111cdf550c27a198a75ad2a7495aaf8';
const client = twilio(accountSid, authToken);

app.use(express.json());

app.post('/sendWhatsAppMessage', (req, res) => {
    // const to = req.body.to;
    // const message = req.body.message;

    client.messages
        .create({
            from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
            body: 'I am reaching out to request immediate assistance with a security issue that has arisen within our organization.',
            to: `whatsapp:+447442107141`
        })
        .then(message => {
            console.log(message.sid);
            res.send(`Message sent with ID: ${message.sid}`);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send(error);
        });
});

app.get('/deviceConnected', (req, res) => {
    client.messages
        .create({
            from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
            body: 'Device Is Connected',
            to: `whatsapp:+447442107141`
        })
        .then(message => {
            console.log(message.sid);
            res.send(`Message sent with ID: ${message.sid}`);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send(error);
        });
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, '172.20.10.3', () => {
    console.log(`Server running at http://172.20.10.3:${port}`);
});

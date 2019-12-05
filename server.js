import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
const DBURL = 'mongodb://localhost/nominate';

mongoose.connect(DBURL, {useNewUrlParser: true})
.then(() => console.log("DB connected"))
.catch(error => console.error(error));


app.use(bodyParser.json()); // Use body-parser to parse json object and make them available in req.body
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

const PORT = 3330;

app.listen(PORT, () => {
	console.log(`serving running on port ${PORT}`);
});
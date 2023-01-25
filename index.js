const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const router = require('./router');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: true }));
app.use(cors());
app.use(router);

const start = async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
	} catch (error) {
		console.log(`Server error: ${e.message}`);
	}
};

start();

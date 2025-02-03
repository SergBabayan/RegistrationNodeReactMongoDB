const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(bodyParser.json());

// Подключение к MongoDB Atlas
const mongoURI = 'mongodb+srv://sergeysb:sergserg@cluster0.aaplb.mongodb.net/DBSerg?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas (DBSerg)');
}).catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { 
    collection: 'Sergcollection'
});

const User = mongoose.model('User', UserSchema);

// Роут для регистрации
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const ID = Date.now() + Math.floor(Math.random() * 1000);
    try {
        const newUser = new User({ username, password: password, id: ID});
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';
import multer from "multer"
import csvToJson from "convert-csv-to-json"

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
let userData:Record <string,string>[] = []
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Add multer middleware to upload file
//The file will be stored in memory and will be passed using the key "file"
app.post('/api/files', upload.single("file"), async (req, res) => {
    const file = req.file;
    let json:Record <string,string>[] = []
    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    if (file.mimetype !== 'text/csv') {
        return res.status(500).json({ message: 'Invalid file type' });
    }
    try {
        const csv = Buffer.from(file.buffer).toString('utf-8');
        json = csvToJson.fieldDelimiter(",").csvStringToJson(csv);
    } catch (error) {
        return res.status(400).json({ message: 'Invalid file content' });
    }
    userData = json
    return res.status(200).json({ data: json, message: 'File uploaded successfully' });
});
app.get('/api/users', async (req, res) => {
    const {q} = req.query;
    if (!q) {
        return res.status(400).json({ message: 'Query parameter "q" is required' });
    }
    const search = q.toString().toLowerCase();
    //If there is any row that contains the search value, return it
    const filteredData = userData.filter((row) => {
        return Object.values(row).some((value) => value.toLowerCase().includes(search));
    });
    return res.status(200).json({ data: filteredData });
});
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";
const app = express();
app.use(express.json());

let jobs = [
    { id: 1, company: "google", position: "no tester" },
    { id: 2, company: "youtube", position: "frontend developer" },

]
if (process.env.NODE_ENV === "develpment") {
    app.use(morgan('dev'))
}
app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json(jobs)
})

app.get("/", (req, res) => {
    console.log(req);
})

app.post('/api/v1/jobs', (req, res) => {
    const { company, position } = req.body
    console.log(company, position)
    if (!company || !position) {
        res.status(400).json({ message: "veuilliez indiquez l'entreprise et la position" })
        return;
    } else {
        const id = nanoid(10);
        const newjob = { id, company, position };
        jobs.push(newjob);
        res.status(201).json(jobs);
    }
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listennig on port ${port}`);
})
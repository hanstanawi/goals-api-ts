import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv'

dotenv.config();

const app: Application = express()

const port = process.env.PORT || ''

app.get('/', (req: Request, res: Response ) => {
  res.status(200).send('Hooray')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
})


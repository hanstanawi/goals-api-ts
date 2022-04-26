import express, { Application } from 'express';
import dotenv from 'dotenv';

import goalRoutes from './routes/goal';

dotenv.config();

const app: Application = express();

const port = process.env.PORT || '';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

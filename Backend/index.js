import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import photoUploadRoutes from './routes/photoUploadRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/upload-photo', photoUploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

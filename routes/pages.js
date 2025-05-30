import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsPath = path.join(__dirname, '..', 'views');

router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

router.get('/sobre', (req, res) => {
  res.sendFile(path.join(viewsPath, 'sobre.html'));
});

export default router;

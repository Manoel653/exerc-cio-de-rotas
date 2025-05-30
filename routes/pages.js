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

router.get('/404', (req, res) => {
  res.sendFile(path.join(viewsPath, '404.html'));
});

router.use((req, res) => {
  res.status(404).sendFile(path.join(viewsPath, '404.html'));
});

export default router;

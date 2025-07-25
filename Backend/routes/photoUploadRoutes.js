import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';
import pool from '../db/db.js';
import fs from 'fs';

const router = express.Router();
const upload = multer({ dest: 'temp/' });
const validCategories = ['restaurant', '24x7', 'bakery', 'catering'];


// ✅ POST /api/upload-photo
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const category = req.body.category;
    const file = req.file;

    if (!category || !validCategories.includes(category)) {
      return res.status(400).json({ error: 'Invalid or missing category' });
    }

    if (!file) {
      return res.status(400).json({ error: 'Photo file is required' });
    }

    const result = await cloudinary.uploader.upload(file.path, {
      folder: `photo_uploads/${category}`,
    });

    await pool.query(
      'INSERT INTO photos (category, image_url) VALUES (?, ?)',
      [category, result.secure_url]
    );

    fs.unlinkSync(file.path);

    res.json({
      message: '✅ Photo uploaded successfully',
      category,
      image_url: result.secure_url,
    });
  } catch (err) {
    console.error('❌ Upload Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ GET /api/upload-photo?category=restaurant
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    if (!category || !validCategories.includes(category)) {
      return res.status(400).json({ error: 'Invalid or missing category' });
    }

    const [rows] = await pool.query(
      'SELECT id, category, image_url, uploaded_at FROM photos WHERE category = ? ORDER BY uploaded_at DESC',
      [category]
    );

    res.json({
      category,
      total: rows.length,
      photos: rows,
    });
  } catch (err) {
    console.error('❌ GET Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ DELETE /api/upload-photo/:id
router.delete('/:id', async (req, res) => {
  const photoId = req.params.id;

  try {
    const [rows] = await pool.query('SELECT * FROM photos WHERE id = ?', [photoId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Photo not found' });
    }

    const photo = rows[0];
    const parts = photo.image_url.split('/');
    const filenameWithExt = parts.pop();
    const folder = parts.slice(parts.indexOf('photo_uploads')).join('/');
    const public_id = folder + '/' + filenameWithExt.split('.')[0];

    await cloudinary.uploader.destroy(public_id);
    await pool.query('DELETE FROM photos WHERE id = ?', [photoId]);

    res.json({
      message: '✅ Photo deleted from Cloudinary and database',
      id: photoId,
    });
  } catch (err) {
    console.error('❌ DELETE Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

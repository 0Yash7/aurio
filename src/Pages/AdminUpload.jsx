import React, { useEffect, useState } from 'react';
import {
  Typography, Box, TextField, Button,
  MenuItem, Grid, Card, CardMedia, CardContent,
  IconButton, CircularProgress, Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const categories = ['restaurant', '24x7', 'bakery', 'catering'];

export default function AdminUpload() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    if (!selectedCategory) return;
    setLoading(true);
    try {
      const res = await axios.get(`/api/upload-photo?category=${selectedCategory}`);
      setPhotos(res.data.photos);
    } catch (err) {
      console.error('❌ Error fetching photos:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, [selectedCategory]);

  const handleUpload = async () => {
    if (!photo || !selectedCategory) return alert('Please select a photo and category');

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('category', selectedCategory);

    try {
      setLoading(true);
      await axios.post('/api/upload-photo', formData);
      setPhoto(null);
      await fetchPhotos();
      alert('✅ Photo uploaded successfully');
    } catch (err) {
      console.error('❌ Upload failed:', err);
      alert('Upload failed');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this photo?')) return;

    try {
      setLoading(true);
      await axios.delete(`/api/upload-photo/${id}`);
      await fetchPhotos();
    } catch (err) {
      console.error('❌ Delete failed:', err);
    }
    setLoading(false);
  };
return (
  <Box p={{ xs: 2, md: 4 }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      🖼️ Admin Photo Upload Panel
    </Typography>

    {/* Upload Section */}
    <Card sx={{ mb: 5, p: 4, boxShadow: 3, borderRadius: 4 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Upload New Photo
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        <TextField
          select
          label="Select Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          sx={{ minWidth: 220 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="outlined"
          component="label"
          sx={{ borderStyle: 'dashed' }}
        >
          📸 Choose Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </Button>

        {photo && (
          <Box sx={{ ml: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Preview:
            </Typography>
            <Box
              component="img"
              src={URL.createObjectURL(photo)}
              alt="Preview"
              sx={{
                width: 60,
                height: 60,
                objectFit: 'cover',
                borderRadius: 2,
                border: '1px solid #eee',
                mt: 1,
              }}
            />
          </Box>
        )}

        <Button
          variant="contained"
          color="primary"
          disabled={!photo || !selectedCategory}
          onClick={handleUpload}
          sx={{ minWidth: 120 }}
        >
          Upload
        </Button>
      </Stack>
    </Card>

    {/* Loading Spinner */}
    {loading && (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    )}

    {/* Gallery Section */}
    <Typography variant="h6" fontWeight="bold" mb={2} mt={4}>
      Uploaded Photos
    </Typography>
    {photos.length === 0 ? (
      <Typography variant="body1" align="center" color="text.secondary" mt={5}>
        No images uploaded yet.
      </Typography>
    ) : (
      <Grid container spacing={4}>
        {photos.map((img) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={img.id}>
            <Card
              sx={{
                height: '100%',
                boxShadow: 2,
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': { boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                image={img.image_url}
                alt="Uploaded"
                sx={{
                  height: 180,
                  objectFit: 'cover',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  px: 2,
                  py: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: 'capitalize',
                    fontWeight: 'medium',
                    bgcolor: '#f0f0f0',
                    px: 1.2,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                >
                  {img.category}
                </Typography>
                <IconButton onClick={() => handleDelete(img.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}
  </Box>
);
}

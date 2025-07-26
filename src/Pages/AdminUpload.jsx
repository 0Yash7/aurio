import React, { useEffect, useState, useCallback } from 'react';
import {
  Box, Typography, TextField, MenuItem, Card, CardMedia,
  IconButton, CircularProgress, Snackbar, Alert, Grid, Button, Stack, Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const categories = ['restaurant', '24x7', 'bakery', 'catering'];

const AdminUpload = () => {
  const [category, setCategory] = useState('');
  const [files, setFiles] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchPhotos = useCallback(async () => {
    if (!category) return;
    setLoading(true);
    try {
      const res = await axios.get(`/api/upload-photo?category=${category}`);
      setPhotos(res.data.photos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true,
  });

  const handleUpload = async () => {
    if (!category || files.length === 0) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('category', category);
    files.forEach(file => formData.append('photos', file));

    try {
      await axios.post('/api/upload-photo', formData);
      setSnackbar({ open: true, message: 'Photos uploaded successfully!', severity: 'success' });
      setFiles([]);
      fetchPhotos();
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: 'Upload failed', severity: 'error' });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleting(id);
    try {
      await axios.delete(`/api/upload-photo/${id}`);
      setSnackbar({ open: true, message: 'Photo deleted successfully!', severity: 'success' });
      fetchPhotos();
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: 'Delete failed', severity: 'error' });
    } finally {
      setDeleting(null);
    }
  };

  return (
    <Box p={4} sx={{ maxWidth: 1300, mx: 'auto' }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Admin Image Upload — Aureo
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <TextField
          select
          fullWidth
          label="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ mb: 3 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </MenuItem>
          ))}
        </TextField>

        {category && (
          <>
            <Box
              {...getRootProps()}
              sx={{
                border: '2px dashed #ccc',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
                backgroundColor: isDragActive ? '#f0f0f0' : '#fafafa',
                mb: 2,
                transition: '0.3s',
              }}
            >
              <input {...getInputProps()} />
              <CloudUploadIcon sx={{ fontSize: 50, color: '#888' }} />
              <Typography variant="body1" sx={{ mt: 1 }}>
                {isDragActive ? 'Drop files here...' : 'Drag & drop images here or click to select'}
              </Typography>
              {files.length > 0 && (
                <Typography variant="caption" color="text.secondary">
                  {files.length} file(s) selected for upload
                </Typography>
              )}
            </Box>

            {/* Preview Selected Images */}
            {files.length > 0 && (
              <Grid container spacing={2} sx={{ mb: 2 }}>
                {files.map((file, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="120"
                        image={URL.createObjectURL(file)}
                        alt="Preview"
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={uploading || files.length === 0}
            >
              {uploading ? <CircularProgress size={24} /> : 'Upload Selected'}
            </Button>
          </>
        )}
      </Paper>

      {category && (
        <>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Uploaded Images — <strong>{category.toUpperCase()}</strong>
          </Typography>

          {loading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={2}>
              {photos.map((photo) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                  <Card sx={{ height: '100%', position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={photo.image_url}
                      alt="Uploaded"
                    />
                    <Stack direction="row" justifyContent="flex-end" p={1}>
                      <IconButton
                        onClick={() => handleDelete(photo.id)}
                        disabled={deleting === photo.id}
                      >
                        {deleting === photo.id ? (
                          <CircularProgress size={20} />
                        ) : (
                          <DeleteIcon />
                        )}
                      </IconButton>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminUpload;

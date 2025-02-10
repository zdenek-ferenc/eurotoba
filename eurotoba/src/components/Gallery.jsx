import React, { useEffect, useState } from 'react';
import { fetchInstagramPhotos } from '../api/instagram';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const fetchedPhotos = await fetchInstagramPhotos();
        setPhotos(fetchedPhotos);
      } catch (error) {
        setError('Nepodařilo se načíst fotky.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPhotos();
  }, []);

  if (isLoading) {
    return <p>Načítám fotky...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="gallery">
      <h1>Galerie</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <a 
            key={photo.id} 
            href={photo.permalink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={photo.media_type === 'VIDEO' ? photo.thumbnail_url : photo.media_url} 
              alt={photo.caption || 'Instagram Post'} 
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
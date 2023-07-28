import React, { useState, useEffect } from 'react';
import AlbumList from './AlbumList';
import AddAlbumForm from './AddAlbumForm';

const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const apiUrl = 'https://jsonplaceholder.typicode.com/albums'; // Replace with your dummy API URL

  const fetchAlbums = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error('Error fetching albums:', error));
  };

  const addAlbum = (newAlbum) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAlbum),
    })
      .then((response) => response.json())
      .then((data) => {
        setAlbums([...albums, data]);
      })
      .catch((error) => console.error('Error adding album:', error));
  };

  const updateAlbum = (albumId, updatedAlbum) => {
    fetch(`${apiUrl}/${albumId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAlbum),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedAlbums = albums.map((album) =>
          album.id === albumId ? data : album
        );
        setAlbums(updatedAlbums);
      })
      .catch((error) => console.error('Error updating album:', error));
  };

  const deleteAlbum = (albumId) => {
    fetch(`${apiUrl}/${albumId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedAlbums = albums.filter((album) => album.id !== albumId);
        setAlbums(updatedAlbums);
      })
      .catch((error) => console.error('Error deleting album:', error));
  };
  

  return (
    <div>
      <AddAlbumForm addAlbum={addAlbum} />
      <AlbumList albums={albums} deleteAlbum={deleteAlbum} />
      {/* Render other components or UI elements as needed */}
      
    </div>
  );
};

export default App;

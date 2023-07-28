/*import React from 'react';
import './AlbumItem.css'; // Import the AlbumItem.css file

const AlbumItem = ({ album, deleteAlbum }) => {
  return (
    <div className="album-item">
      <span className="album-title">{album.title}</span>
      <button className="delete-button" onClick={() => deleteAlbum(album.id)}>
        Delete
      </button>
    </div>
  );
};

export default AlbumItem;*/

/*import React, { useState } from 'react';
import './AlbumItem.css'; // Import the updated AlbumItem.css file

const AlbumItem = ({ album, deleteAlbum, updateAlbum }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');

  const handleUpdate = () => {
    const updatedAlbum = { ...album, title: updatedTitle };
    updateAlbum(album.id, updatedAlbum);
    setIsEditing(false);
  };

  return (
    <div className="album-item">
      {isEditing ? (
        <input
          type="text"
          className="update-input"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          placeholder="Enter updated title"
        />
      ) : (
        <span className="album-title">{album.title}</span>
      )}

      {isEditing ? (
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}

      <button className="delete-button" onClick={() => deleteAlbum(album.id)}>
        Delete
      </button>
    </div>
  );
};

export default AlbumItem;*/

import React, { useState } from 'react';
import './AlbumItem.css'; // Import the updated AlbumItem.css file

const AlbumItem = ({ album, deleteAlbum, updateAlbum }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(album.title);

  const handleUpdate = () => {
    const updatedAlbum = { ...album, title: updatedTitle };
    updateAlbum(album.id, updatedAlbum);
    setIsEditing(false);
  };

  return (
    <div className="album-item">
      {isEditing ? (
        <input
          type="text"
          className="update-input"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          placeholder="Enter updated title"
        />
      ) : (
        <span className="album-title">{album.title}</span>
      )}

      {isEditing ? (
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}

      <button className="delete-button" onClick={() => deleteAlbum(album.id)}>
        Delete
      </button>
    </div>
  );
};

export default AlbumItem;

/*import React, { useState } from 'react';

const AddAlbumForm = ({ addAlbum }) => {
  const [title, setTitle] = useState('');

  const handleAddAlbum = () => {
    if (title) {
      addAlbum({ title });
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddAlbum}>Add Album</button>
    </div>
  );
};

export default AddAlbumForm;*/

import React, { useState } from 'react';
import './AddAlbumForm.css'; // Import the AddAlbumForm.css file

const AddAlbumForm = ({ addAlbum }) => {
  const [title, setTitle] = useState('');

  const handleAddAlbum = () => {
    if (title) {
      addAlbum({ title });
      setTitle('');
    }
  };

  return (
    <div className="add-album-form">
      <input
        type="text"
        className="add-album-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter album title"
      />
      <button className="add-album-button" onClick={handleAddAlbum}>
        Add Album
      </button>
    </div>
  );
};

export default AddAlbumForm;

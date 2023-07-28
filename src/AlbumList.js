import React from 'react';
import AlbumItem from './AlbumItem';

const AlbumList = ({ albums, deleteAlbum }) => {
  return (
    <div>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} deleteAlbum={deleteAlbum} />
      ))}
    </div>
  );
};

export default AlbumList;

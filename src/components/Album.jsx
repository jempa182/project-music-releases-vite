// src/components/Album.jsx

// This line imports React and useState, which we need to create our component and manage hover state
import React, { useState } from 'react';
import { AlbumCover } from './AlbumCover';
import { AlbumName } from './AlbumName';
import { ArtistName } from './ArtistName';

// This is the Album component. It's like a template for each album card.
// It takes 'album' as a prop, which is all the information about one album.
export const Album = ({ album }) => {

    return (
        // This is the main container for our album card
        <div className ="album-card">
        <AlbumCover album={album}/>
        <AlbumName album={album}/>
        <ArtistName album={album}/>
        </div>
    );
};

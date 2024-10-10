// src/components/AlbumName.jsx
import React from 'react';

export const ArtistName = ({ album }) => {
    return (
        <p>
            {album.artists.map((artist, index) => (
                <React.Fragment key={artist.id}>
                    {index > 0 && ", "}
                    <a href={artist.external_urls.spotify} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        {artist.name}
                    </a>
                </React.Fragment>
            ))}
        </p>
    );
}


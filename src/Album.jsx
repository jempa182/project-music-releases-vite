// src/Album.jsx

// This line imports React and useState, which we need to create our component and manage hover state
import React, { useState } from 'react';

// Importing our icon SVGs
import heartIcon from './assets/icons/heart.svg';
import playIcon from './assets/icons/play.svg';
import dotsIcon from './assets/icons/dots.svg';

// This is the Album component. It's like a template for each album card.
// It takes 'album' as a prop, which is all the information about one album.
const Album = ({ album }) => {
    // This line creates a state to track whether the album is being hovered
    const [isHovered, setIsHovered] = useState(false);

    return (
        // This is the main container for our album card
        // We've added onMouseEnter and onMouseLeave to handle hover state
        <div 
            className="album-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* This is a container for our album image and the overlay with icons */}
            <div className="image-container">
                {/* This shows the album cover image */}
                <img src={album.images[0].url} alt={album.name} className="album-image" />
                {/* If the album is being hovered, we show the overlay with icons */}
                {isHovered && (
                    <div className="overlay">
                        <img src={heartIcon} alt="Like" className="icon heart-icon" />
                        <img src={playIcon} alt="Play" className="icon play-icon" />
                        <img src={dotsIcon} alt="More" className="icon dots-icon" />
                    </div>
                )}
            </div>
            {/* This shows the album name */}
            <h3>
                <a href={album.external_urls.spotify} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    {album.name}
                </a>
            </h3>
            {/* This shows all the artists, joined by commas */}
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
        </div>
    );
};

// This line makes our Album component available to use in other files
export default Album;
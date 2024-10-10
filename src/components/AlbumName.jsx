// src/components/AlbumName.jsx

export const AlbumName = ({ album }) => {
    return (
        <h3>
            <a href={album.external_urls.spotify} 
                target="_blank" 
                rel="noopener noreferrer">
                {album.name}
            </a>
        </h3>
    );
}
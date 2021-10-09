import React from 'react'
import './AlbumCard.css'

export default function AlbumCard({
    name,
    artistName,
    releaseDate,
    totalTracks,
    url,
    image
}) {
    return (
        <div className="albumCard">
            <img className="albumCard__img" src={image.url} alt="" width="300" height="300" />
            <div className="albumCard__info">
                <h4>{name}</h4>
                <p>{artistName}</p>
                <p>{releaseDate}</p>
                <p>{totalTracks} tracks</p>
            </div>
            <a target="_blank" rel="noreferrer" className="albumCard__btn" href={url}>Preview on Spotify</a>

        </div>
    )
}

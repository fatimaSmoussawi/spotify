import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AlbumCard from '../AlbumCard/AlbumCard';
import './ArtistAlbums.css';

export default function ArtistAlbums({ token }) {
    let { id } = useParams();
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState('');

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const getData = () => {
        axios
            .get(`https://api.spotify.com/v1/artists/${id}/albums`, config)
            .then((response) => {
                setArtist(response.data.items[0].artists[0].name);
                setAlbums(response.data.items);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };
    return (
        <div className='artistAlbums'>
            <div className='artistAlbums-header'>
                <h1>{artist}</h1>
                <h4>Albums</h4>
            </div>
            <div className='artistAlbums-cards'>
                {albums.map((val) => {
                    return (
                        <AlbumCard
                            key={val.id}
                            id={val.id}
                            name={val.name}
                            artistName={val.artists[0].name}
                            releaseDate={val.release_date}
                            totalTracks={val.total_tracks}
                            url={val.external_urls.spotify}
                            image={val.images[1]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

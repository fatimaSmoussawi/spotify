import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';
import ArtistCard from '../ArtistCard/ArtistCard';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ token }) {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const [APIData, setAPIData] = useState([]);

    const getData = (searchTerm) => {
        axios
            .get(
                `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`,
                config
            )
            .then((response) => {
                setAPIData(response.data.artists);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };
    return (
        <div className='search'>
            <div className='header'>
                <div className='header__input'>
                    <input
                        type='text'
                        placeholder='Search for an artist...'
                        defaultValue=''
                        onChange={(e) => {
                            e.target.value && getData(e.target.value);
                        }}
                    />
                    <SearchIcon
                        color='disabled'
                        className='header__inputButton'
                    />
                </div>
            </div>
            <div className='cards'>
                {APIData?.items?.map((val) => {
                    return (
                        <ArtistCard
                            key={val.id}
                            id={val.id}
                            name={val.name}
                            followers={val.followers.total}
                            image={val.images[1]}
                            popularity={val.popularity}
                        />
                    );
                })}
            </div>
        </div>
    );
}

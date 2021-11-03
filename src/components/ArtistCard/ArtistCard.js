import React from "react";
import './ArtistCard.css'
import { useHistory } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
export default function ArtistCard({ id, name, followers, image, popularity }) {
    const history = useHistory();

    return (

        <div className="artistCard" onClick={() => history.push(`/albums/${id}`)}>
            <img className="artistCard__img" src={image?.url} alt="artist" />
            <div className="artistCard__info">
                <h4>{name}</h4>
                <p>{followers}{" "}followers</p>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                    value={popularity / 20}
                />
            </div>

        </div>

    )
}

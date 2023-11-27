// components/giphy.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles/index.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Button,
} from "@mui/material";

const Giphy = ({ searchTerm }) => {
    const [gifs, setGifs] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';
                const limit = 24;

                const response = await axios.get(
                    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&api_key=${apiKey}`
                );

                if (response.data.data && response.data.data.length > 0) {
                    setGifs(response.data.data);
                } else {
                    console.error('No GIFs found for the given search term:', searchTerm);
                }
            } catch (error) {
                console.error('Error fetching GIFs:', error);
            }
        };


        if (searchTerm) {
            fetchGifs();
        } else {
            setGifs([]);
        }
    }, [searchTerm]);

    const addToFavorites = (gif) => {
        setFavorites((prevFavorites) => [...prevFavorites, gif]);
    };

    useEffect(() => {

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {

        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className={styles.grid}>
            <Button className={styles.button_mar} color="primary" variant="outlined" onClick={() => setShowFavorites(!showFavorites)}>
                {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
            </Button>
            {showFavorites && (
                <div className={styles.favoritesContainer}>
                    <h2>Favorites</h2>
                    {favorites.map((favorite) => (
                        <div key={favorite.id}>
                            <img src={favorite.images.original.url} alt={favorite.title} />
                        </div>
                    ))}
                </div>
            )}
            {!showFavorites && gifs.length > 0 && (
                <ul className={styles.gridList}>
                    {gifs.map((gif) => (
                        <li key={gif.id} className={styles.gridItem}>
                            <div className={styles.shadowBox}>
                                <img src={gif.images.original.url} alt={gif.title} className={styles.gifImage} />
                                <div className={styles.overlay}>
                                    <Button color="primary" variant="outlined" onClick={() => addToFavorites(gif)}>
                                        <FavoriteIcon />
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Giphy;

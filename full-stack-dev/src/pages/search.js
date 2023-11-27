import { useState, useContext } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import css from '../styles/page.module.css';
import { getAuth, signOut } from '../components/firebase';
import styles from "../styles/search.module.css";
import {
    TextField,
    Button,
} from "@mui/material";

import { AuthContext } from '../components/context/AuthContext';

const Search = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const { email, setEmail } = useContext(AuthContext);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {

        console.log('Search Term:', searchTerm);
    };
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setEmail('');
                router.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className={css.container}>
            <Head>
                <title>Giphy Search</title>
            </Head>

            <main className={css.card}>
                <div className={css.user}>
                    {email !== '' && (
                        <>
                            <p>User email: {email}

                                <button className={css.button} onClick={handleLogout}>
                                    Logout
                                </button>

                            </p>

                        </>
                    )}
                </div>

                <h1>Giphy Search</h1>
                <TextField
                    className={styles.searchBox}
                    color="primary"
                    size="large"
                    placeholder="Article name or keywords"
                    fullWidth={true}
                    variant="standard"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <Button className={styles.button} color="primary" variant="outlined" onClick={handleSearch}>
                    Search
                </Button>


            </main>
        </div>
    );
};

export default Search;

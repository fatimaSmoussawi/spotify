import React from 'react';
import { SpotifyApiContext } from 'react-spotify-api';
import Cookies from 'js-cookie';
import './App.css';

import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';
import Search from './components/Search/Search';
import ArtistAlbums from './components/ArtistAlbums/ArtistAlbums';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

const App = () => {
    const [token, setToken] = React.useState(Cookies.get('spotifyAuthToken'));
    return (
        <div className='app'>
            {token ? (
                <SpotifyApiContext.Provider value={token}>
                    <Router>
                        <Switch>
                            <Route exact path='/'>
                                <Search token={token} />
                            </Route>
                            <Route path='/albums/:id'>
                                <ArtistAlbums token={token} />
                            </Route>
                        </Switch>
                        <Redirect from='/*' to='/' />
                    </Router>
                </SpotifyApiContext.Provider>
            ) : (
                // Display the login page
                <div className='login'>
                    <SpotifyAuth
                        redirectUri='http://localhost:3000/%23/'
                        clientID='6499b09693a64a09ae4d961182500473'
                        scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
                        onAccessToken={(token) => setToken(token)}
                    />
                </div>
            )}
        </div>
    );
};
export default App;

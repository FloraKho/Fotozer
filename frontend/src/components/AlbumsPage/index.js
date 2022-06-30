import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { readUserAlbums } from '../../store/albums';
import Banner from '../Banner';
import MyNavigation from '../MyNavigation';
import AlbumCover from './AlbumCover';
import AlbumInfo from './AlbumInfo';
import DeleteAlbum from './DeleteAlbum';

function AlbumsPage () {
    const dispatch = useDispatch();
    const history = useHistory();

    const albums = useSelector(state => state.albums);
    const albumsArr = Object.values(albums).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    const userId = useSelector(state => state.session.user?.id);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        if (userId) {
            dispatch(readUserAlbums(userId));
        }
    }, [dispatch, userId]);

    useEffect(() => {
        history.push(`/albums`);
    }, [history]);


   

    // if (albumsArr.length === 0) return (
    //     <p className='loading'><i className="fa-solid fa-spinner"></i> Loading...</p>
    // )

    return(
        <>
            <div className='albumpage'>
                <Banner sessionUser={sessionUser} />
                <MyNavigation />

                <div className='myphoto-gallery'>
                    {albumsArr && albumsArr.map((album) => {
                        return (
                            <div key={album.id} className='myphoto-display' onClick={(e) => {
                                e.preventDefault();
                                history.push(`/albums/${album?.id}`);
                            }}>
                                <AlbumCover albumId={album.id}/>
                                <div className='photo-overlay'>
                                    <AlbumInfo album={album} />
                                    <DeleteAlbum albumId={album.id} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}

export default AlbumsPage;
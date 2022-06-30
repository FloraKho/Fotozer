import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllkeys } from '../../store/albumphotos';

function AlbumCover ({albumId}) {

    const dispatch = useDispatch();
    const keys = useSelector(state => state.albumphotos);
    const keysArr = Object.values(keys);
    const currentAlbumPhotos = keysArr.filter(key => key?.albumId === +albumId)
    const coverPhoto = currentAlbumPhotos[0];

    useEffect(() => {
        dispatch(loadAllkeys());
    })


    return (

    <>
       <img src={coverPhoto.Photo?.imgURL} alt='AlbumCover' />
        </>
    )
}

export default AlbumCover;
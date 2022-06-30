import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllkeys } from '../../store/albumphotos';

function AlbumInfo ({album}) {
    const dispatch = useDispatch();
    const keys = useSelector(state => state.albumphotos);
    const keysArr = Object.values(keys);
    const currentAlbumPhotos = keysArr.filter(key => key?.albumId === album.id);


    useEffect(() => {
        dispatch(loadAllkeys());
    })

    return (
        <> 
        <div className='photo-info'>
            <p className='photo-title'>{album.albumName}</p>
            <p className='album-count'>{`(${currentAlbumPhotos.length})`}</p>
        </div>
        
        </>
    )

}

export default AlbumInfo
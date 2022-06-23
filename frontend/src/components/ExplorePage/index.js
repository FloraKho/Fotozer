import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllImg } from '../../store/explore';
import './ExplorePage.css';


function ExplorePage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const allImages = useSelector((state) => state.images.entries);

    console.log(allImages, '......allImages');

    useEffect(() => {
        dispatch(loadAllImg())
    }, [dispatch]);

    useEffect(() => {
        history.push(`/explore`);
    }, [history]);

    if (!allImages.length) return (
        <p className='loading'><i className="fa-solid fa-spinner"></i> Loading...</p>
    )

    return (
        <>
            <div className='explorepage'>
                <div className='explorepage-header'>
                    <h2>Explore</h2>
                </div>
                <div className='photo-gallery'>
                    {allImages.map((image) => {
                        return (
                            <div key={image.id} className='photo-display' onClick={(e) => {
                                e.preventDefault();
                                history.push(`/photos/${image.id}`);
                            }}>
                                {/* <a href={`/photos/${image.id}`} onClick={e => {
                                    e.preventDefault();
                                    history.push(`/photos/${image.id}`)
                                }}> */}
                                <div>
                                    <img src={image.imgURL} alt={image.title} />
                                </div>
                                <div className='photo-hover'>
                                    <div className='photo-info'>
                                        {image.title}
                                        
                                    </div>
                                    <div>
                                        {`by ${image.User.username}`}
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>
                        )
                    })}

                </div>
            </div>


        </>
    )
}

export default ExplorePage;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllImg } from '../../store/explore';
import './Search.css';

function Search() {

    const dispatch = useDispatch();
    const history = useHistory();
    const allImages = useSelector((state) => state.images.entries);
    const [filter, setFilter] = useState([]);
    const [searchWords, setSearchWords] = useState('');

    useEffect(() => {
        dispatch(loadAllImg())
    }, [dispatch]);

    useEffect(() => {
        history.push(`/search`);
    }, [history]);

    const handleResearch = (e) => {
        const words = e.target.value;
        setSearchWords(words);
        const findData = allImages?.filter((image) => {
            const title = image?.title.toLowerCase().includes(words.toLowerCase());
            const username = image?.User?.username.toLowerCase().includes(words.toLowerCase());
            return title || username;
        });

        if(words === ''){
            setFilter([]);
        } else {
            setFilter(findData);
        }
        
    }

    const clear = () => {
        setFilter([]);
        setSearchWords('');
    }

    return (
        <div className='search'>
            <h1>Searching...</h1>
            <button className='search-clear' onClick={clear}>Clear Search</button>
            <div className='search-input'>
                <input value={searchWords} type='text' placeholder="Enter a title or photographer" onChange={handleResearch}/>
                <div className='search-icon'>
                   <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
    
                {allImages && filter.length !== 0 && ( <div className='search-result'> {
                    filter.map((image) => (
                        <div className='search-info' key={image.id} onClick={(e) => {
                            e.preventDefault();
                            history.push(`/photos/${image.id}`);
                        }}>
                            <img src={image.imgURL} alt={image.title} width="90" height="90" />
                            <p>{image.title}</p>
                        </div>
                    ))}
                </div>)}
            </div>
    )

}

export default Search;
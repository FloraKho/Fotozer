import './Banner.css';

function Banner ({sessionUser}){

    return(

        <div className='banner'>
            <div className='banner-info'>
                <div className='banner-info-img'>
                    <img src='../photos/camera-1.png' alt='camera_logo' />
                </div>
                <div className='banner-info-name'>
                    <h2>{sessionUser ? sessionUser.username : null}</h2>
                    <p>{sessionUser ? sessionUser.email : null}</p>
                </div>
            </div>
        </div>
    )


}


export default Banner;

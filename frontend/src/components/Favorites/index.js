import Banner from "../Banner";
import { useSelector } from 'react-redux';
import MyNavigation from "../MyNavigation";

function Favorites () {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <div>
            <Banner sessionUser={sessionUser}/>
            <MyNavigation />
        </div>
    )
}

export default Favorites;
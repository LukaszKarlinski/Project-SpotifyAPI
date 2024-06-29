import '../style/homePage/homePage.scss';
import Header from '../components/homePage/Header'

import Menu from '../components/Menu';

const HomePage = () =>{

    return(
        <div className='homePageWrap'>
            <Menu/>
            <Header/>
        </div>
    )
}

export default HomePage;
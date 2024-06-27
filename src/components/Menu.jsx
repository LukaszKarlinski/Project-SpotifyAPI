import { IconHomeFilled } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import '../style/menu.scss';

const Menu = () =>{

    return(
        <nav>
            <ul>
                <li><Link to='/'>Strona główna</Link><div className='iconWrap'><IconHomeFilled size={30}/></div></li>
                <li><Link to='/searchArtist'>Znajdź artyste</Link><div className="iconWrap"><IconSearch size={30}/></div></li>
            </ul>
        </nav>
    )
}

export default Menu
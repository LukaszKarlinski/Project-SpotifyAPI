import { IconHomeFilled } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import '../style/menu.scss';

const Menu = () =>{

    const location = useLocation();
    const currentPath = location.pathname;
    

    return(
        <nav>
            <ul>
                <li className={currentPath === '/'? 'selected': ''}>
                        <Link to='/'>Strona główna</Link>
                        <div className='iconWrap'>
                            <IconHomeFilled size={30}/>
                        </div>
                </li>
                <li className={currentPath === '/searchArtist'? 'selected': ''}>
                        <Link to='/searchArtist'>Znajdź artyste</Link>
                        <div className="iconWrap">
                            <IconSearch size={30}/>
                        </div>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
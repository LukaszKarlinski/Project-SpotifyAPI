import { IconHomeFilled } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { IconMenu2 } from '@tabler/icons-react';
import { IconMusic } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import '../style/menu.scss';
import { useState } from 'react';

const Menu = () =>{

    const location = useLocation();
    const currentPath = location.pathname;


    //handle mobile version of menu
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuBar = () =>{
        setShowMenu(!showMenu);
    }
    

    return(
        <nav>
            <ul>
                <li className={showMenu? 'mobileBar show' : 'mobileBar hide'} onClick={handleMenuBar}><IconMenu2 size={20}/></li>
                <li className={`${currentPath === '/'? 'selected menuItem': 'menuItem'} ${showMenu? 'show' : 'hide'}`}>
                        <Link to='/'>Strona główna</Link>
                        <div className='iconWrap'>
                            <IconHomeFilled size={30}/>
                        </div>
                </li>
                <li className={`${currentPath === '/searchArtist'? 'selected menuItem': 'menuItem'} ${showMenu? 'show' : 'hide'}`}>
                        <Link to='/searchArtist'>Znajdź artyste</Link>
                        <div className="iconWrap">
                            <IconSearch size={30}/>
                        </div>
                </li>
                <li className={`${currentPath === '/recommendedTrack'? 'selected menuItem': 'menuItem'} ${showMenu? 'show' : 'hide'}`}>
                        <Link to='/recommendedTrack'>Poznaj nowe utowry</Link>
                        <div className="iconWrap">
                            <IconMusic stroke={1.7} size={30}/>
                        </div>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
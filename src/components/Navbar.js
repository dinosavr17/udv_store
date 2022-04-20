import React,{useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';
import logoImage from '../images/logotype.svg'
import ReactDOM from 'react-dom';
import Link from 'react-router-dom';
import {SidebarData} from "./SidebarData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './navbar.css';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img className="logoImage" src={logoImage} alt='logo'/>
                </NavLink>
                <IconContext.Provider value={{ color: '#00d29d' }}>
                    <div className='navbar'>
                        <NavLink to='#' className='menu-bars'>
                            <Bars onClick={showSidebar}/>
                        </NavLink>
                        {/*<NavLink to='#' className='menu-bars'>*/}
                        {/*    <FaIcons.FaBars onClick={showSidebar} />*/}
                        {/*</NavLink>*/}
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <NavLink to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </NavLink>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <NavLink to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                      <div><button className="userBalance">
                          40&#129689;</button></div>
                        <div>
                       @udv.dev
                        </div>
                    </NavLink>
                    <NavLink to='/orders' activeStyle>
                        <div><FontAwesomeIcon icon={faBagShopping} />
                        </div>
                        <div>
                            Заказы
                        </div>
                    </NavLink>
                    <NavLink to='/cart' activeStyle>
                        <Badge component="badge" id='cart_badge' badgeContent={4} color='secondary'>
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        <div>
                            Корзина
                        </div>
                    </NavLink>
                    <NavLink to='/sign-out' activeStyle>
                        <div><FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </div>
                        <div>
                            Выход
                        </div>
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;
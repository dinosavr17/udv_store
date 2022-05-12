import React from 'react';
import {faArrowRightFromBracket, faBagShopping} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Badge from '@mui/material/Badge';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export const SidebarData = [
    {
        title: '@udv.dev',
        path: '/about',
        icon: <button className="userBalance">40&#129689;</button>,
        cName: 'nav-text'
    },
    {
        title: 'Заказы',
        path: '/orders',
        icon: <FontAwesomeIcon icon={faBagShopping} />,
        cName: 'nav-text'
    },
    {
        title: 'Корзина',
        path: '/cart',
        icon:  <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon />
        </Badge>,
        cName: 'nav-text'
    },
    {
        title: 'Выход',
        path: '/sign-in',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={() => {
            localStorage.clear()} } />,
        cName: 'nav-text'
    },
];
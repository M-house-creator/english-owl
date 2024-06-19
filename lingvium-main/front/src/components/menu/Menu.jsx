import { useEffect, useState, useCallback } from 'react';
import './style.css';
import config from '../../params/config';

export default function Menu({curPath}) {
    const [menu, setMenu] = useState([]);

    

    return (
        <menu>   
            {
                menu && menu.map(menuElement => (
                    <li className={curPath == menuElement.LINK ? 'selected': null} key={menuElement._id}><a href={menuElement.LINK}>{menuElement.NAME}</a></li>
                ))
            }
        </menu>
    )
}
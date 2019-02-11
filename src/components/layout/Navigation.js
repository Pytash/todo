import React from 'react'
import FontAwesome from 'react-fontawesome';
import style from './navStyle.css';

import SideNav from 'simple-sidenav';

const Navigation = (props) => {
    const navBars = () => (
        <div className={style.icon}>
            <FontAwesome name='bars'
                onClick={props.onOpenNav}
                style={{ 
                    color: 'black',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    );
}

export default Navigation;
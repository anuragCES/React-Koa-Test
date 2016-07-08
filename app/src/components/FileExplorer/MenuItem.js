import React, {PropTypes} from 'react';
import styles from './Styles'

const MenuItem = ({toggleHover, hovered}) => {
    return(
        <li 
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
            <a style={hovered ? styles.menuHoveredItem : styles.menuItem} href="#">Link</a> 
        </li>
    )
}

MenuItem.propTypes = {
    toggleHover: PropTypes.func.isRequired,
    hovered: PropTypes.object.isRequired,
}

export default MenuItem;
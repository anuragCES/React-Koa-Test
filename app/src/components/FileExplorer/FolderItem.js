import React, {PropTypes} from 'react';
import styles from './Styles'

const FolderItem = ({toggleHover, hovered}) => {
    return(
        <li 
            style={styles.listItem}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
            <div>
                <a style={hovered ? styles.menuHoveredItem : styles.menuItem} href="#">
                    <i class="material-icons">&#xE89C;</i>
                    <span>Link</span>
                </a>
            </div>                 
        </li>
    )
}

FolderItem.propTypes = {
    toggleHover: PropTypes.func.isRequired,
    hovered: PropTypes.object.isRequired,
}

export default FolderItem;
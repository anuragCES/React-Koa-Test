import React from 'react'
import styles from './Styles'
import materialIcons from 'material-design-icons'
import MenuItem from './MenuItem'
import Content from './Content'

class Menu extends React.Component {
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            hovered: false,
        }
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover(event) {
        this.setState({
            hovered: !this.state.hovered,
        });
    }

    render(){
        return (
            <div style={styles.root}>
                <nav style={styles.sidenav}>
                    <ul style={styles.list}>
                        <MenuItem 
                            toggleHover={this.toggleHover}
                            hovered={this.state.hovered}
                        />
                    </ul>
                </nav>
                <div style={styles.contentContainer}>
                    <div style={styles.toolbar}>
                        <i class="material-icons">&#xE89C;</i>
                    </div>
                    <Content />
                </div>    
            </div>
        );
    }
}

export default Menu;
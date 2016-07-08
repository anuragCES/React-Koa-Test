import React from 'react'
import styles from './Styles'
import FolderItem from './FolderItem'

class Content extends React.Component {
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
            <ul style={styles.list}>
                <FolderItem 
                    toggleHover={this.toggleHover}
                    hovered={this.state.hovered}
                />
            </ul>
        );
    }
}

export default Content;
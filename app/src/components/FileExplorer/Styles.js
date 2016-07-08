const lighGrayCard = {
    color: '#000 !important', 
    backgroundColor: '#f1f1f1 !important',
}

export default {
    root: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    sidenav: {
        color: '#000 !important', 
        backgroundColor: '#f1f1f1 !important',
        float: 'left',
        height: '100%',
        width:'25%',
        position: 'fixed !important',
        zIndex: 1,
        top: 0,
        left: 0,
        paddingTop: 60,
    },
    listItem: {
        borderBottom: 'dotted #ff0000',
    },
    list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    menuItem: {
        color: '#000',
        padding: '8px 0 8px 16px',
        display: 'block',
        textDecoration: 'none',
    },
    menuHoveredItem: {
        backgroundColor: '#555',
        color: 'white',
        padding: '8px 0 8px 16px',
        display: 'block',
        textDecoration: 'none',
    },
    menuContainer: {
        float: 'left',
    },
    contentContainer: {
        float: 'right',
        width: '75%',
        marginLeft: '25%',
        marginTop: '55',
    },
    toolbar: {
        height: 30,
        width: '100%',
        color: '#fff!important',
        backgroundColor: '#009688!important',
    }
}
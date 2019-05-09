import React from 'react';


export default class App extends React.Component {
    render() {
        return (
            <imageBackground source={require('./Pages/assets/Background/backgroundImg.jpg')}
            style={styles.container}></imageBackground>
            
        );
    }
}

const styles = styleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
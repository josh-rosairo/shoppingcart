import React, { Component }  from 'react';
import Navbar from './components/Navbar'

class  App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <p>Welcome to the Vet Radar front end test<span aria-label="hand-wave" role="img">👋</span></p>
                <p>Edit <code>src/App.tsx</code> and save to reload.</p>
                <p>Products</p>
                <p>Cart</p>
            </div>
        );
    }
}

export default App;

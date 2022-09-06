import React from 'react';
import './App.css';

function App() {
    return (
        <>
            <div className='navbar'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">ContactUs</a>
                <a href="">Help</a>
            </div>
            <div className='page'>
                <div className='primary'>
                    <div className='main'>
                        <img src="./img/landscape.jpg" alt="" />
                    </div>
                    <div className='second'>
                        <img src="./img/content.jpg" alt="" />
                    </div>
                    <div className='third'>
                        <img src="./img/dishes.jpg" alt="" />
                    </div>
                    <div className='fourth'>
                        <img src="./img/recipe.jpg" alt="" />
                    </div>
                    <div className='fifth'>
                        <h1>I lost some weight  once, but I found it again in the fridge I just want someone to look at me the way I look at food. Really good! Here's something else you could say instead of delicious. … A piece of cake. When something is a piece of cake it is very easy to do. ...</h1>
                    </div>
                </div>
                <div className='secondary'>
                    <div className='st'><img src="./img/img3.jpg" alt="" /></div>
                    <div className='nd'><img src="./img/img4.jpg" alt="" /></div>
                    <div className='rd'><img src="./img/img5.jpg" alt="" /></div>
                    <div className='th'><img src="./img/img8.jpg" alt="" /></div>
                </div>
            </div>
        </>
    );
}
export default App;
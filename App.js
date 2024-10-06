import React from 'react';
import ReactDom from 'react-dom/client';

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img className="imagelogo" src="https://e7.pngegg.com/pngimages/47/533/png-clipart-swiggy-office-business-online-food-ordering-delivery-bangalore-business-food-text-thumbnail.png" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

const Body =() =>{
    return(
         <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                 
            </div>

         </div>
           
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JlWGheIlfIzO0ZIpLn2C5XHp5BQOQwRlww&s" />
            <h3>KFC</h3>
             
        </div>
    )
}


const AppLayout = () =>{
    return (
        <div className="app">
        <Header />
        <Body />
        </div>
    ) 

}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
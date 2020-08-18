import React, { Component } from 'react';
import "../../assets/css/style.css"
import { connect } from 'react-redux';


class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            login: false
        }
    
    }

    render(){
        return(
            <div className = "container-fluid">
                <div className = "row siteLogRow">
                    <h1>HOT FOODS</h1>
                </div>
                <div className = "row productContainer">

                    <div className="col-sm-4">
                        <div className="card">
                            <img className = "card-img-top" style = {{ width: "100%" }} alt = "food-img" src = "https://cdn.tasteatlas.com/images/dishes/d1371c5f8ab043f7b30e2a3b284ed1c0.jpg?mw=1300"></img>
                            <div className="card-body">
                                <h4 className="card-title">Breakfast Sandwich</h4>
                                <p className="card-text">A breakfast sandwich refers to any kind of sandwich filled with foods that are usually considered a breakfast staple such as cured meats, eggs, cheese, and various types of bread. Before the explosion of breakfast sandwiches in the United States, they were often consumed by factory workers of the 19th century London, where they were called bap sandwiches.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <img className = "card-img-top" style = {{ width: "100%" }} alt = "food-img" src = "https://cdn.tasteatlas.com/images/dishes/6c2940a0d7b243df9e92ca6e93d6d304.jpg?mw=1300"></img>
                            <div className="card-body">
                                <h4 className="card-title">Bacon, Egg and Cheese Sandwich</h4>
                                <p className="card-text">This American sandwich belongs to the group of breakfast sandwiches and consists of bread that is often toasted or buttered, crispy bacon, fried or scrambled eggs, and cheese. It is often served with a cup of coffee on the side. There are numerous versions of this sandwich, depending on the types of ingredients used in it.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <img className = "card-img-top" style = {{ width: "100%" }} alt = "food-img" src = "https://cdn.tasteatlas.com/images/ingredients/04a424a08b5e4b2d80b01141907d5e23.jpg?mw=1300"></img>
                            <div className="card-body">
                                <h4 className="card-title">Monterey Jack</h4>
                                <p className="card-text">Monterey Jack is an American cheese made from cow's milk. It originates from Monterey in California, where it was first made by Spanish missionaries under the name queso blanco pais, but it was later taken from them by David Jack, who bought nearly all of Monterey in 1859 and renamed the cheese to Jack's Cheese, soon to be called Monterey Jack's Cheese.</p>
                            </div>
                        </div>
                    </div> 

                    <div className="col-sm-4">
                        <div className="card">
                            <img className = "card-img-top" style = {{ width: "100%" }} alt = "food-img" src = "https://cdn.tasteatlas.com/images/dishes/0709b35b381e4d84923bba4d4f2b6c2b.jpg?mw=1300"></img>
                            <div className="card-body">
                                <h4 className="card-title">Shrimp and Grits</h4>
                                <p className="card-text">What started as a simple fisherman's dish made with shrimp cooked in bacon grease, then served over creamy grits is today a cult Southern dish due to the fact that Craig Claiborne mentioned it in the New York Times in 1985, after he tried the dish at Crook's Corner, a restaurant in North Carolina.</p>
                            </div>
                        </div>
                    </div> 

                    <div className="col-sm-4">
                        <div className="card">
                            <img className = "card-img-top" style = {{ width: "100%" }} alt = "food-img" src = "https://cdn.tasteatlas.com/images/dishes/ac2d10106ddd49fb96e7a44c4288d752.jpg?mw=1300"></img>
                            <div className="card-body">
                                <h4 className="card-title">Chili Dog</h4>
                                <p className="card-text">Chili dog is an American creation consisting of a sausage in a standard bun, topped with chili sauce and other ingredients depending on personal preferences, such as onions or cheese. The dish is often sold at numerous street stands, local eateries, and sports stadiums.</p>
                            </div>
                        </div>
                    </div> 

                    <div className="col-sm-4">
                        <div className="card">
                            <img className = "card-img-top" style = {{ width: "100%" }} alt = "food-img" src = "https://cdn.tasteatlas.com/Images/Dishes/275ee469f2004679b9c1be234767abd1.jpg?mw=1300"></img>
                            <div className="card-body">
                                <h4 className="card-title">Chimichanga</h4>
                                <p className="card-text">Chimichanga is a wrapped, deep-fried flour tortilla filled with a variety of ingredients such as shredded chicken, beef, rice, beans, onions, and cheese. Although the dish is especially popular in the Mexican regions of Sinaloa and Sonora, most people believe that chimichanga was either invented in a Tucson restaurant or in a Phoenix restaurant in the early 1920s.</p>
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        )
    }
}

const stateToProps = (state) => ({
    user: state.user
})

export default connect(stateToProps, null)(Product);
import React from "react";
import './App.css';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                favorites: 0,
            };
        }

        handleFavoriteClick = () => {
            this.setState((prevState) => ({
                favorites: prevState.favorites + 1,
            }));
        };

        render() {
            console.log(this.props.imageUrl);
            return (
                <>
                    <h2>{this.props.title}</h2>
                    <img src={this.props.imageUrl} alt={this.props.title} />
                    <p>{this.props.description}</p>
                    <button onClick={this.handleFavoriteClick}>
                        <span role="img" aria-label="heart">❤️</span> Favorites: {this.state.favorites}
                    </button>
                </>
            );
        }
    }

export default HornedBeast;

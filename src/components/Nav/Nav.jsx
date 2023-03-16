import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


class Nav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (// al ser un componente de clase, las props están en el constructor y this apuntan a esas props
            <div>
                <SearchBar onSearch={this.props.onSearch}/> 
                <Link to="/">
                    LOGOUT
                    </Link>
                <Link to="/about">
                <h3>
                    ABOUT
                </h3>
                </Link>
                <Link to="/home">
                <h3>
                    HOME
                </h3>
                </Link>
            </div>
        );

    }
}

export default Nav;
import React from 'react';
import {Route, Switch} from "react-router";
import {FavoritesPage, HomePage} from "../pages";
import PetDetails from '../pages/petDetails';

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/favoriler" component={FavoritesPage}/>
                <Route exact path="/detay/:id" component={PetDetails} />
            </Switch>
        </div>
    );
}

export default Main;

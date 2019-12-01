import React from 'react';
import Pet from "../components/Pet";
import Axios from "axios"

function FavoritesPage() {
    let dataArrayFromAPI = [];
    let x = [];
    Axios.get(`http://5dd7af92505c590014d3b4ac.mockapi.io/favorites`).then(res => {
        // console.log(res);
        dataArrayFromAPI = res.data;
        dataArrayFromAPI.forEach(item => {
            x.push(item.pet)
        })
        // console.log(dataArrayFromAPI);
        // console.log(x);
    });

    console.log({...x}); 
    console.log(x); 
    const EmptyPets = <div>Bulunamadı</div>;
    const Pets = <h3>Favori Pet Sayısı: 5</h3>;

    return <div>
        {
            x.map((item) => {
                console.log(item)
                return <Pet key={Math.random()} {...item} />
            }
            )
        }
    </div>



}

export default FavoritesPage;

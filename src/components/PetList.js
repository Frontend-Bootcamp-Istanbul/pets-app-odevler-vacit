import React from 'react';
import { Pet } from "../components";
import { getPets } from "../constants";
import { stringContains } from "../helpers";
import Axios from "axios";

class PetList extends React.Component {
    breed;
    constructor(props) {
        super(props);
        
        this.state = {
            _pets: [],
            pets: [],
            yukleniyor: true
        }
    }
    addToFav=(id)=> {
        let dataArrayFromAPI=[];

        const pet =[...this.state.pets].find(p=> p.id===id)
        
        


        Axios.post(`http://5dd7af92505c590014d3b4ac.mockapi.io/favorites`,{owner:"vacit",pet}).then(res => {
            console.log(res);
            console.log(res.data);
        })
        
        // Axios.get(`http://5dd7af92505c590014d3b4ac.mockapi.io/favorites`).then(res=>{
        //     // console.log(res);
        //     dataArrayFromAPI=res.data;
        //     console.log(dataArrayFromAPI);
        //   });

        //   dataArrayFromAPI.forEach(item=>{
        //       Axios.delete(`http://5dd7af92505c590014d3b4ac.mockapi.io/favorites/${item.mockApiId}`).then(res=>{
        //         console.log(res);
        //         console.log(res.data);
        //       })

        // })
        //   Axios.get(`http://5dd7af92505c590014d3b4ac.mockapi.io/favorites`).then(res=>{
        //     console.log(res);
        //     console.log(res.data);
            
        //   })

    }

    componentDidMount() {
        getPets().then((data) => {
            this.setState({
                _pets: data,
                pets: data,
                yukleniyor: false
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeFilter !== this.props.activeFilter) {
            this.filterPets();
        }
        if (prevProps.searchValue !== this.props.searchValue) {
            this.filterPets();
        }
    }

    filterPets = () => {
        if (!this.props.activeFilter) {
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return stringContains(pet.name, this.props.searchValue)
                })
            })
        } else {
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return pet.breed === this.props.activeFilter;
                }).filter((filteredPet) => {
                    return stringContains(filteredPet.name, this.props.searchValue)
                })
            })
        }
    }


    render() {
        const Yukleniyor = <div>Yukleniyor</div>;
        const EmptyPets = <div>Bulunamadı</div>;
        const Pets = [<h3>Gösterilen Pet Sayısı: 5</h3>, <div className="row">
            {
                this.state.pets.map((pet) => {
                    return <Pet key={Math.random()} handleAddToFav={this.addToFav} {...pet} />
                })
            }
        </div>];
        if (this.state.yukleniyor) {
            return Yukleniyor;
        } else if (this.state.pets.length === 0) {
            return EmptyPets
        } else {
            return Pets;
        }
    }
}


export default PetList;

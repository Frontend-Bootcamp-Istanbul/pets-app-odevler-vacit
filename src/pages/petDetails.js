import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { getPetDetails } from "../constants"




class PetDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petDetail: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getPetDetails(id).then((data) => {
            this.setState({
                petDetail: data,

            })
        })
    }

    render() {
        const { name, image, age, description, breed, id } = this.state.petDetail;

        return (
            <div className="col-lg-6 col-md-4 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={image} alt="" style={{ height: "292px" }} />
                    <div className="card-body">
                        <h4 className="card-title">
                            {name}
                            <div>
                                <span className="badge badge-primary" style={{ fontSize: "12px" }}>{breed}</span>
                            </div>
                            <div>
                                <span className="badge badge-warning" style={{ fontSize: "12px" }}>{age}</span>
                            </div>
                        </h4>
                        <p className="card-text">
                            {description}
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="btn btn-success">Favorilere Ekle</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PetDetails

export const rootApiURL = "http://5dd7af92505c590014d3b4ac.mockapi.io/";

export const petsPath = "pets/";
export const petsDetailsPath = "detay/";
export const localPath = "http://localhost:3000/";


export const getPets = () => {
    return fetch(rootApiURL + petsPath)
        .then((resp) => resp.json())
};

export const getPetDetails = (id) => {
    const petDetails = id;

    return fetch(rootApiURL + petsPath + petDetails)
        .then((resp) => resp.json())
};

export const breedOptions = [
    "Cavalier King Charles Spaniel",
    "Golden Retriever",
    "Beagle",
    "French Bulldog"
];
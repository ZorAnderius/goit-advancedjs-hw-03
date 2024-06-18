import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_vrovklV9L79Ajq9ux7mli1DRWWaoX5WqWAzKfKcnwo4TbumJO1IlIsKmUzxBiKlf";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export const fetchBreeds = async() => {
    const { data } = await axios( {
    method: 'GET',
    url: '/breeds'
    });
    return data;
}

export const fetchCatByBreed = async(breedId) => {
    const { data } = await axios({
        method: 'GET',
        url: `/images/search?breed_id=${breedId}`
    })
    return data;
}
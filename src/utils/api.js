import axios from "axios";

const BSAE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU2NGI4MjllYzFkNDVmZjY5ZmIzNzY2YTc4OTVmYiIsInN1YiI6IjY0ZTc5MDE1MDZmOTg0MDBjYTU0ZDU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cBSvwPDJ-A8D0Bi30taV10e3fkC6TvgePh2c-sEb3aQ";

const headers={
    Authorization: "bearer "+TMDB_TOKEN,
};

export const fetchDataFromApi=async(url,params)=>{
    try{
        const{data}=await axios.get(BSAE_URL+url,{
            headers,params
        })
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}
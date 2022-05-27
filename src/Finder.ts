import axios from "axios";
import { news_key} from "./application";

// 'd940ca534a164b2bbfb7d7d3fe267ab2'
// https://api.nasa.gov/planetary/apod?api_key=Z9r1nuPVEG4a98D7h2hUdb7kb3Iqg9p5Hwkr5wd2

// GET
// https://newsapi.org/v2/everything?q=tesla&apikey=$
const findTerm= (term: string) => {
    let data = axios.get(`https://newsapi.org/v2/everything?q=${term}`, {
        params: {
            q: term,
            apiKey: news_key
        }
    })

    console.log(data)
    return data
}

export default findTerm

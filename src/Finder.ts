import axios from "axios";
import { news_key} from "./application";


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

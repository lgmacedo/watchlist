import { Error } from "@/protocols/Error";

const movieNotFound = <Error>{
    type: "movieNotFound",
    message: "Movie required was not found"
}

export default movieNotFound;
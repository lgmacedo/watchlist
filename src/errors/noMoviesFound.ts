import { Error } from "@/protocols/Error";

const noMoviesFound = <Error>{
    type: "noMoviesFound",
    message: "No movies found"
}

export default noMoviesFound;

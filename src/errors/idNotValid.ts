import { Error } from "@/protocols/Error";

const idNotValid = <Error>{
    type: "idNotValid",
    message: "The movie id provided is not valid"
}

export default idNotValid;

import ApolloClient from "apollo-boost";
import {BASE_URL} from "../AC/ActionTypes";

export const client = new ApolloClient({
  uri: BASE_URL,
});
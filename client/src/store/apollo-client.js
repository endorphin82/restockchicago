import ApolloClient from "apollo-boost";
import {BASE_URL} from "../AC/ActionTypes";

export const client = new ApolloClient({
  // uri: BASE_URL,
  uri: process.env.REACT_APP_BASE_URL,
  // uri: 'http://localhost:3005/graphql',
});
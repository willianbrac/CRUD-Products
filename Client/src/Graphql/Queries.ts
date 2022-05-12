import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query {
    findAll {
      id,
      name,
      price,
      stock,
    }
  }
`;

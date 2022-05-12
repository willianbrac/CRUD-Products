import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
mutation ($name: String!, $price: Float!, $stock: Float!){
  create(
    data: {
      name: $name
      price: $price
      stock: $stock
    }){
    name
  }
}
`;

export const UPDATE_PRODUCT = gql`
mutation ($id: String!, $name: String!, $price: Float!, $stock: Float!){
  update(
    id: $id,
    data: {
      name: $name
      price: $price
      stock: $stock
    }
  ){
    name
  }
}
`;

export const DELETE_PRODUCT = gql`
  mutation ($id: ID!) {
    delete(
      id: $id
    )
  }
`;

import { gql } from '@apollo/client';

export const QUERY_ENTRYS = gql`
  query entrys($username: String) {
    entrys(username: $username) {
      _id
      entryText
      createdAt
      username
    }
  }
`;

export const QUERY_ENTRY = gql`
  query entry($id: ID!) {
    entry(_id: $id) {
      _id
      entryText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      entrys {
        _id
        entryText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      entrys {
        _id
        entryText
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

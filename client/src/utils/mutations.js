import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ENTRY = gql`
  mutation addEntry($entryText: String!, $sleepSlider: Int!, $dietSlider: Int!, $moodSlider: Int!) {
    addEntry(entryText: $entryText, sleepSlider: $sleepSlider, dietSlider: $dietSlider, moodSlider: $moodSlider) {
      _id
      entryText
      createdAt
      username
    }
  }
`;





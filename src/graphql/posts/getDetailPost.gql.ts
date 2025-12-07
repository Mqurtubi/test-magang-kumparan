export const GET_DETAIL_POST = `
  query getDetail($id: ID!) {
    post(id: $id) {
      id
      title
      body
      user {
        id
        name
        email
      }
      comments {
        data {
          id
          email
          name
          body
        }
      }
    }
  }
`;

export const MUTATION_CREATE_POST = `
    mutation CreatePost($title: String!, $body: String!) {
        createPost(input: { title: $title, body: $body }) {
            id
            title
            body
        }
    }
`;

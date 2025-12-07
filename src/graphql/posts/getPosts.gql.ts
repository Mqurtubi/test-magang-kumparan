export const GET_POSTS_QUERY = `
query GetPosts ($page: Int, $limit:Int){
    posts(options: {paginate: {page: $page, limit:$limit}}) {
        links {
            first{
                page
                limit
            }
            last{
                page
                limit
            }
            prev{
                page
                limit
            }
            next{
                page
                limit
            }
    }
    data {
        id
        title
        body
        user {
            name
         }
    }
    meta {
      totalCount
    }
  }
}
`;

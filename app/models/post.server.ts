export const getPostsData = async () => {
    const response = await fetch(
        `https://tgh6xlex.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A%20%20%22count%22%3A%20count(*%5B_type%20%3D%3D%20'post'%5D)%2C%0A%20%20%22latestPost%22%3A%20*%5B_type%20%3D%3D%20'post'%5D%7Corder(publishedAt%20desc)%5B0%5D%7Btitle%2C%20slug%2C%20publishedAt%7D%2C%0A%20%20%22allPost%22%3A%20*%5B_type%20%3D%3D%20'post'%5D%5B%5D%7Btitle%2C%20slug%2C%20publishedAt%7D%0A%7D%0A`
      )
    return response.json();
}

export const getPostData = async (slug: string) => {
    const response = await fetch(
        `https://tgh6xlex.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20slug.current%20%3D%3D%20'${slug}'%5D%0A%0A`
    )

    return response.json();
}
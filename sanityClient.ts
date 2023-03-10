import imageUrlBuilder from '@sanity/image-url'

// // Get a pre-configured url-builder from your sanity client
// const client = sanityClient({
//     projectId: 'tgh6xlex',
//     dataset: 'production',
//     apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
//     token: '', // or leave blank for unauthenticated usage
//     useCdn: true, // `false` if you want to ensure fresh data
// })

const client = {
  projectId: 'tgh6xlex',
  dataset: 'production'
}

const builder = imageUrlBuilder(client)


// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:

function urlFor(source) {
  return builder.image(source)
}

export default urlFor;

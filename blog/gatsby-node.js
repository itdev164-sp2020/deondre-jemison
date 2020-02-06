const path = require(`path`);

exports.createPage = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
        {
            {
                allContentfulBlogPost {
                  edges {
                    node {
                      id
                      slug
                    }
                  }
                }
              }
        }
        `).then(result => {
            if (result.errors) {
                reject(result.errors);
            }
            result.data.allContentfulBlogPost.edges.forEach((edge) => {
                createPage({
                    path: edge.node.slug,
                    component: path.resolve(`./src/templtates/blog-post.js`),
                    context: {
                        slug: edge.node.slug
                    }
                })
            })
            resolve();
        })
    })
};
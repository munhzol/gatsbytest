const path = require('path');

module.exports.onCreateNode = ({node,actions}) => {
    
    const { createNodeField } = actions;

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }

};

module.exports.createPages = async ({graphql, actions}) => {
    
    const { createPage } = actions;
    const blogTempate = path.resolve('./src/templates/blog.js');

    // const resp = await graphql(`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    // resp.data.allMarkdownRemark.edges.forEach((edge)=>{
    //     createPage({
    //         component: blogTempate,
    //         path: `/blog/${edge.node.fields.slug}`,
    //         context: {
    //             slug: edge.node.fields.slug
    //         }
    //     })
    // });


    const resp1 = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    resp1.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            component: blogTempate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });

};
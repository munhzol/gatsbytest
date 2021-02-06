import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';

import blogStyle from './blog.module.scss';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    console.log(data);

    return <Layout>
            <h1>Blog Page</h1>
            <ol className={blogStyle.posts}>
                {
                    data.allMarkdownRemark.edges.map((edge)=>{
                        return <li className={blogStyle.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    })
                }
            </ol>
        </Layout>
};

export default BlogPage;
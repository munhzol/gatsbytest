import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';

import blogStyle from './blog.module.scss';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                  fields: publishedDate,
                  order: DESC
                }
              ) {
                edges {
                  node {
                    title
                    slug
                    publishedDate(fromNow:true)
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
                    data.allContentfulBlogPost.edges.map((edge)=>{
                        return <li className={blogStyle.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    })
                }
            </ol>
        </Layout>
};

export default BlogPage;
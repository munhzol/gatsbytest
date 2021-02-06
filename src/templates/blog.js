import React from 'react';

import Layout from '../components/layout';
import {graphql} from 'gatsby';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query ($slug:String!) {
        contentfulBlogPost (
        slug: {
            eq: $slug
        }
        ) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
            raw
        }
        }
    }
`;

const Blog = (props) => {

    const body = JSON.parse(props.data.contentfulBlogPost.body.raw);

    console.log(body);

    const options = {
        renderNode: {
            "embeded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'];
                return <img alt={alt} src={url} />
            }
        }
    };

    return <Layout>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        { documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options) }
    </Layout>
};

export default Blog;
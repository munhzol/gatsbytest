import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

const NotFound = () => {
    return <Layout>
        <h1>This url is not found!</h1>
        <Link to='/'>Go to home</Link>
    </Layout>
}

export default NotFound


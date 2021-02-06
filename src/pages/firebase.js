import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

import firebase from "gatsby-plugin-firebase";


const FireBasePage = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        firebase
          .database()
          .ref("/blah/sms/phone")
          .once("value")
          .then(snapshot => {
            setData(snapshot.val())
          })
      }, [])

    // firebase.database().ref(`/blah`).child('sms').on('value', (v)=>console.log(`******* ${v}`));


    return (
        <Layout>
            <h1>Firebase</h1>
            <p>{data ? data : "Loading..."}</p>
        </Layout>
    );
};

export default FireBasePage;
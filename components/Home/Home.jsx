import React from 'react';
// import styles from './Home.module.scss';
// import useSWR from 'swr';
// import { request } from 'graphql-request';
import {
  // createPod,
  usePods,
} from '../../graphql/api';

function Home() {

  const { data, errorMessage, error } = usePods();

  return (
    <div>

      <h1>Welcome to KidPod</h1>
      <h2>Find, manage and share school pods for your child</h2>

      <ul>
        <li>KidPod is free</li>
        <li>Create a Pod of 1 to 6 children</li>
        <li>Share your Pod with other parents</li>
        <li>Assign a PodLeader for your Pod</li>
        <li>Manage and change your Pod as needed</li>
        <li>Schedule your Pod by day, time and location</li>
      </ul>

      <button>Log In</button>
      <br/>
      <button>Sign Up</button>
      {
        console.log('data:',data),
        console.log('errorMessage:',errorMessage),
        console.log('error:',error)
      }
      <style jsx>{`
        * {
          color: smoke;
        }
        button{
          height: 40px;
          width: 200px;
          margin: 0 0 16px 0;
        }
      `}</style>
    </div>
  );
}

export default Home;

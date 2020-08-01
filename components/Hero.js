import { useState, useEffect } from 'react';
import {
  // useGuestbookEntries,
  // createGuestbookEntry,
  createPod,
  usePods,
} from '../graphql/api';
import Header from './Header';
import {
  hero,
  heroContainer,
  heroForm,
  heroFormFieldset,
  heroFormTextArea,
  heroFormTwitterInput,
  heroFormSubmitButton,
  heroEntries,
} from '../styles/hero';

// function getEntries(data) {
//   return data ? data.entries.data.reverse() : [];
// }
function getPods(data) {
  return data ? data.pods.data.reverse() : [];
}

export default function Hero(props) {
  // 1. run HOOK and receive response
  // const { data, errorMessage } = useGuestbookEntries();
  // const { data, errorMessage } = usePods();
  // const { podData, podErrorMessage } = usePods();
  const { data, errorMessage } = usePods();

  // const [entries, setEntries] = useState([]);
  const [pods, setPods] = useState([]);

  const [leader, setLeader] = useState('');
  const [child1, setChild1] = useState('');

  const [submitting, setSubmitting] = useState(false);

  // 2. When data comes in, IF there's no data in state, set into state
  useEffect(() => {
    if (!pods.length) {
      setPods(getPods(data));
    }
  }, [data, pods.length]);

  function handleCreatePod(event) {
    event.preventDefault();

    if (leader.trim().length === 0) {
      alert('Please provide a leader name :)');
      return;
    }
    if (child1.trim().length === 0) {
      alert('Please provide a child name :');
      return;
    }
    setSubmitting(true);

    // return the response from mutation request
    createPod(leader, child1)
      .then((data) => {
        // add the new pod to
        // entries.unshift(data.data.createPod);
        pods.unshift(data.data.createPod);
        setLeader('');
        setChild1('');
        // setEntries(entries);
        setPods(pods);
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(`boo :( ${error}`);
        alert('🤷‍♀️');
        setSubmitting(false);
      });
  }

  function handleChild1Change(event) {
    setChild1(event.target.value);
  }
  function handleLeaderChange(event) {
    setLeader(event.target.value);
  }

  return (
    <div className={heroContainer.className}>
      {
        (console.log('data!:', data ? JSON.stringify(data) : 'none'),
        console.log('pods local state:', pods ? pods : 'none'))
      }

      <div className={hero.className}>
        <Header />

        <p>PODS:{JSON.stringify(pods)}</p>
        <form className={heroForm.className} onSubmit={handleCreatePod}>
          <fieldset
            className={heroFormFieldset.className}
            disabled={submitting && 'disabled'}
          >
            {/* <input
              className={heroFormTextArea.className}
              rows="5"
              cols="50"
              name="story"
              placeholder="What is your favorite memory as a developer?"
              onChange={handleChild1Change}
              value={child1}
            /> */}
            <input
              className={heroFormTwitterInput.className}
              type="text"
              placeholder="Enter Child name"
              onChange={handleChild1Change}
              value={child1}
              name="child1"
            />
            <input
              className={heroFormTwitterInput.className}
              type="text"
              placeholder="Enter Leader name"
              onChange={handleLeaderChange}
              value={leader}
              name="leader"
            />
            <input
              className={heroFormSubmitButton.className}
              type="submit"
              value="Submit"
            />
          </fieldset>
        </form>
      </div>

      <div className={heroEntries.className}>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : !data ? (
          <p>Loading pods...</p>
        ) : (
          pods.map((pod, index, podsArray) => {
            const date = new Date(pod._ts / 1000);
            return (
              <div key={pod._id}>

                <div>
                  <h6>{pod._id}</h6>
                  <h5>Leader: {pod.leader}</h5>
                  <h5>Child 1: {pod.child1}</h5>
                  {/* <h6>Date{date}</h6> */}
                </div>

                {index < podsArray.length - 1 && "---------"}
              </div>
            );
          })
        )}
      </div>
      {heroEntries.styles}
      {heroFormSubmitButton.styles}
      {heroFormTwitterInput.styles}
      {heroFormTextArea.styles}
      {heroFormFieldset.styles}
      {heroForm.styles}
      {heroContainer.styles}
      {hero.styles}
    </div>
  );
}

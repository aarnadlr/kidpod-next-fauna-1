import { useState, useEffect } from 'react';
import {
  // useGuestbookEntries,
  // createGuestbookEntry,
  createPod,
  usePods,
} from '../graphql/api';
import Header from './Header';
import GuestbookEntry from './GuestbookEntry';
import GuestbookEntryDivider from './GuestbookEntryDivider';
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
  const { data, errorMessage } = usePods();
  const { podData, podErrorMessage } = usePods();

  // const [entries, setEntries] = useState([]);
  const [pods, setPods] = useState([]);

  // const [twitterHandle, setTwitterHandle] = useState('');
  // const [story, setStory] = useState('');
  const [leader, setLeader] = useState('');
  const [child1, setChild1] = useState('');


  const [submitting, setSubmitting] = useState(false);

  // 2. When data comes in, IF there's no data in state, set into state
  // useEffect(() => {
  //   if (!entries.length) {
  //     setEntries(getEntries(data));
  //   }
  // }, [data, entries.length]);
  
  // 2. When data comes in, IF there's no data in state, set into state
  useEffect(() => {
    if (!pods.length) {
      setPods(getPods(podData));
    }
  }, [podData, pods.length]);

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   if (twitterHandle.trim().length === 0) {
  //     alert('Please provide a valid twitter handle :)');
  //     return;
  //   }
  //   if (story.trim().length === 0) {
  //     alert('No favorite memory? This cannot be!');
  //     return;
  //   }
  //   setSubmitting(true);
  //   createGuestbookEntry(twitterHandle, story)
  //     .then((data) => {
  //       entries.unshift(data.data.createGuestbookEntry);
  //       setTwitterHandle('');
  //       setStory('');
  //       setEntries(entries);
  //       setSubmitting(false);
  //     })
  //     .catch((error) => {
  //       console.log(`boo :( ${error}`);
  //       alert('🤷‍♀️');
  //       setSubmitting(false);
  //     });
  // }

  function handleCreatePod(event) {
    event.preventDefault();

    // if (twitterHandle.trim().length === 0) {
    //   alert('Please provide a valid twitter handle :)');
    //   return;
    // }
    // if (story.trim().length === 0) {
    //   alert('No favorite memory? This cannot be!');
    //   return;
    // }
    setSubmitting(true);
    
    // createGuestbookEntry(twitterHandle, story)
    //   .then((data) => {
    //     entries.unshift(data.data.createGuestbookEntry);
    //     setTwitterHandle('');
    //     setStory('');
    //     setEntries(entries);
    //     setSubmitting(false);
    //   })
    //   .catch((error) => {
    //     console.log(`boo :( ${error}`);
    //     alert('🤷‍♀️');
    //     setSubmitting(false);
    //   });

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
        console.log('all data:', data ? JSON.stringify(data) : "none")
        // console.log('podErrorMessage:', errorMessage ? errorMessage: "none")
      }

      <div className={hero.className}>
        <Header />

    {/* <h1>ENTRIES:{
      JSON.stringify(entries)
      }</h1> */}

<h1>PODS:{
      JSON.stringify(pods)
      }</h1>
        <form className={heroForm.className} onSubmit={handleCreatePod}>
          <fieldset
            className={heroFormFieldset.className}
            disabled={submitting && 'disabled'}
          >
            <textarea
              className={heroFormTextArea.className}
              rows="5"
              cols="50"
              name="story"
              placeholder="What is your favorite memory as a developer?"
              onChange={handleChild1Change}
              value={child1}
            />
            <input
              className={heroFormTwitterInput.className}
              type="text"
              placeholder="twitter handle (no '@')"
              onChange={handleLeaderChange}
              value={leader}
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
        {podErrorMessage ? (
          <p>{podErrorMessage}</p>
        ) : !data ? (
          <p>Loading pods...</p>
        ) : (
          pods.map((entry, index, allPods) => {
            const date = new Date(entry._ts / 1000);
            return (
              <div key={entry._id}>
                <GuestbookEntry
                  twitter_handle={entry.twitter_handle}
                  story={entry.story}
                  date={date}
                />
                {index < allPods.length - 1 && <GuestbookEntryDivider />}
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

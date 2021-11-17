import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ENTRY } from "../../utils/mutations";
import { QUERY_ENTRYS, QUERY_ME } from "../../utils/queries";

const EntryForm = () => {
  const [entryText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addEntry, { error }] = useMutation(ADD_ENTRY, {
    update(cache, { data: { addEntry } }) {
      try {
        // update entry array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { entrys } = cache.readQuery({ query: QUERY_ENTRYS });
        cache.writeQuery({
          query: QUERY_ENTRYS,
          data: { entrys: [addEntry, ...entrys] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, entrys: [...me.entrys, addEntry] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addEntry({
        variables: { entryText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }

    // const moodSlider = document.getElementById(mood)
    // const dietSlider = document.getElementById(diet)
    // const sleepSlider = document.getElementById(sleep)
    // const output = document.getElementById(value)
  };

  return(
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="If you can't think of anyhting to write, click on the Affirmations tab to have one generated..."
          value={entryText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <div class="sliders">
          <div className="flex-row justify-center justify-space-between-md align-stretch">
            <h5> How much did you sleep today?</h5>
            <input id="sleep" name="sleep" type="range" min="0" max="20" />
            <span class="w-100"> 😴</span>
            <span class="w-0">😄</span>
          </div>
          <div className="flex-row justify-center justify-space-between-md align-stretch">
            <h5> How much did you eat today?</h5>
            <input id="diet" name="diet" type="range" min="0" max="20" />
            <span class="w-100">🍽</span>
            <span class="w-0">🥞</span>
          </div>
          <div className="flex-row justify-center justify-space-between-md align-stretch">
            <h5> How did you feel today?</h5>
            <input id="mood" name="mood" type="range" min="0" max="20" />
            <span class="w-100">☹️</span>
            <span class="w-0">😁</span>
          </div>
        </div>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EntryForm;

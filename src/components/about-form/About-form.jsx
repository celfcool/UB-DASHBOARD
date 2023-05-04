import React, { useState } from "react";
import axios from "axios";

function AboutForm(props) {
    const [title, setTitle] = useState("");
    const [descriptionShort, setDescriptionShort] = useState("");
    const [descriptionFull, setDescriptionFull] = useState("");
  
    const handleSubmitAbout = (e) => {
      e.preventDefault();
      const dataToUpdate = { title: title, descriptionShort: descriptionShort, descriptionFull: descriptionFull };
      async function postAboutInfo() {
        try {
          const response = await axios({
            method: "PUT",
            url: `${process.env.REACT_APP_API_URL}/about`,
            data: JSON.stringify(dataToUpdate),
            headers: {
              "Content-Type": "application/json",
            },
          });
          return response;
        } catch (error) {
          throw error;
        }
      }
      postAboutInfo()
        .then((response) => {
          console.log("Value updated:", response.data);
          // Update your UI to display the new value
        })
        .catch((error) => console.error("Error updating value:", error));
    };
  return (
    <form onSubmit={handleSubmitAbout}>
        <label>
        New Title:
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <label>
        New description short:
        <input
            type="text"
            value={descriptionShort}
            onChange={(e) => setDescriptionShort(e.target.value)}
        />
        </label>
        <label>
        New description full:
        <input
            type="text"
            value={descriptionFull}
            onChange={(e) => setDescriptionFull(e.target.value)}
        />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AboutForm
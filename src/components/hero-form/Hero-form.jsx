import React, { useState } from "react";
import axios from "axios";

function HeroForm(props) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
  
    const handleSubmitHero = (e) => {
      e.preventDefault();
      const dataToUpdate = { title: title, subtitle: subtitle };
      async function postHeroInfo() {
        try {
          const response = await axios({
            method: "PUT",
            url: `${process.env.REACT_APP_API_URL}/hero`,
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
      postHeroInfo()
        .then((response) => {
          console.log("Value updated:", response.data);
          // Update your UI to display the new value
        })
        .catch((error) => console.error("Error updating value:", error));
    };
  return (
    <form onSubmit={handleSubmitHero}>
        <label>
        New Title:
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <label>
        New subtitle:
        <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
        />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default HeroForm
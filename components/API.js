import React, { useState } from "react";

export function getRandomRecipie() {
  return fetch(
    `https://api.spoonacular.com/recipes/random?number=1&apiKey=fa9a241528c64060acc676e26a8b19fb`
  )
    .then((response) => response.json())
    .then(
      (data) =>
        // setRandomRecipie(data);
        data.results
    )
    .catch(() => {
      console.log("error getting random recipie");
    });
}

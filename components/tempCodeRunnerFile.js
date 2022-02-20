const APIKEY = fa9a241528c64060acc676e26a8b19fb;

function getRandomRecipie() {
  fetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => {
      setRandomRecipie(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error getting random recipie");
    });
}
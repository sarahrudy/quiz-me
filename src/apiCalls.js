export const fetchData = (difficulty) => {
  return fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`)
  .then(response => checkError(response))
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

const checkError = (res) => {
  if (!res.ok) {
    throw new Error(
      "Sorry...Internet Server Error"
    )
  } else {
      return res.json()
  }
}






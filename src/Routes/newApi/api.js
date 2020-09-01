async function doTask() {
  let total = await asyncAdd(values);
  console.log(`Main Total: ${total}`);
}

function App() {
  const saveChanges = async () => {
    await sendToApi();
  };
  return <button onClick={saveChanges}>Save changes</button>;
}

const api = axios.create({
  baseURL: "http://newsapi.org/v2/top-headlines",
  params: {
    country: "kr",
    category: `${category}`,
    apiKey: "5d9e8c471ca74d68bcbbf645878061b0",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
};

export async function fetchTop50Posts() {
  const url =
    "https://rexplore-blog.blogspot.com/feeds/posts/default?alt=json-in-script&callback=binarybiology&max-results=50";
  const response = await fetch(encodeURI(url));
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  console.log(response);
  const data = (await response.text()).split("binarybiology(")[1].slice(0, -2);
  return JSON.parse(data);
}

fetchTop50Posts().then((data) => {
  console.log(data);
});

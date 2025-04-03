const contentContainer = document.getElementById("content");
const loadingIndicator = document.getElementById("loading");

let page = 1;
const limit = 5; // Number of items to load per scroll

async function fetchData() {
  loadingIndicator.style.display = "block";

  // Do the API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  for (let i = 0; i < limit; i++) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `<h3>Post ${
      page * limit + i
    }</h3><p>Dummy content for post ${page * limit + i}.</p>`;
    contentContainer.appendChild(post);
  }

  loadingIndicator.style.display = "none";
  page++;
}

// Detect when user is near the bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    fetchData();
  }
});

// Load initial data
fetchData();

const routes = {
  home: "<h2>Welcome to Home Page</h2><p>This is the home section of our SPA.</p>",
  about:
    "<h2>About Us</h2><p>We are building a simple Single-Page Application using hash-based routing.</p>",
  contact: "<h2>Contact Us</h2><p>Email us to a@b.com</p>",
};

// loads the content based on the current hash in the URL

function loadContent() {
  const hash = window.location.hash.substring(1);
  document.getElementById("app").innerHTML =
    routes[hash] ||
    "<h2>404 Not Found</h2><p>Sorry, the page doesn't exist.</p>";
}

window.addEventListener("hashchange", loadContent);
window.addEventListener("load", loadContent);

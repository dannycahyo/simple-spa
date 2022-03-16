const getContent = (fragmentId, callback) => {
  const pages = {
    home: "Welcome to the home page of my website",
    about: "This is just about page, what r u looking for?",
    contact: "So here we go, I don't have any contact to share",
  };

  return callback(pages[fragmentId]);
};

const loadContent = () => {
  const contentDiv = document.getElementById("app");
  fragmentId = location.hash.substring(1);
  getContent(fragmentId, (content) => {
    contentDiv.innerHTML = content;
  });
};

if (!location.hash) {
  location.hash = "#home";
}
loadContent();

window.addEventListener("hashchange", loadContent);

const entry = document.getElementById('entry').elements;
let data = JSON.parse(localStorage.getItem('blogData')) || [];

function addEntry() {
  const blogEntry = {
    username: entry.username.value,
    title: entry.title.value,
    content: entry.content.value,
  };
  data.push(blogEntry);
  localStorage.setItem('blogData', JSON.stringify(data));
};

addEventListener('submit', function (eventObj) {
  eventObj.preventDefault();
  addEntry();
})

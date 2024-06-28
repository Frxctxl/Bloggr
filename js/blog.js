const entries = JSON.parse(localStorage.getItem('blogData')) || []

function displayEntries() {
  const blogList = document.getElementById('blogEntries')
  blogList.innerHTML = ''
  for (const entry of entries) {
    blogList.insertAdjacentHTML('beforeend', `
    <article>
      <header>
        <h2>${entry.title}</h2>
        <h3>${entry.username}</h3>
      </header>
      <p>${entry.content}</p>
    <article>
`)
  }
}

displayEntries();

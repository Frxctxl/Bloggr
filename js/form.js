// const entry = getElementsByTagName('input');
const submit = document.getElementById('submitBtn');

submit.addEventListener('click', function () {
  const entries = document.getElementsByTagName('input');
  const blogEntry = {
    username: entries[0].value,
    title: entries[1].value,
    content: entries[2].value,
  }
  console.log(blogEntry);
});

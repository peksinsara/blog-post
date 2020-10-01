let postCollection = document.querySelector("#posts-collection");


function createPost(title, time, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  small.textContent = time;
  p.textContent = content;


  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);


  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();

const logout = document.querySelector('#logout-btn');
logout.addEventListener('click', (e) => {
e.preventDefault();

auth.signOut().then(() => {
  console.log('signed out');
  window.location.replace("index.html");
});
});

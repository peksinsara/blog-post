document.querySelector("#submitBtn").addEventListener("click", function () {
  let postAuthor = document.querySelector("#author").value;
  let postTitle = document.querySelector("#postTitle").value;

  let postContent = document.querySelector("#postContent").value;
  let postDate = document.querySelector("#postDate").value;

  if (
    postAuthor === "" ||
    postTitle === "" ||
    postContent === "" ||
    postDate === ""
  ) {
    alert("Fields can't be empty. ");
  } else {
    db.collection("posts").doc().set({
      author: postAuthor,
      postName: postTitle,
      postContent: postContent,
      createdAt: postDate
    })
  }
});


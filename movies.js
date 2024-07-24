$("#movie-form").on("submit", function (e) {
  e.preventDefault();
  let movieTitle = $("#title").val();
  let movieRating = $("#rating").val();
  $("input").val("");

  if (0 <= movieRating && movieRating <= 10 && movieTitle.length >= 2) {
    $("ul").append(
      `<li class="movie-item">Name of Movie: ${movieTitle}. Rating: ${movieRating} <button class="remove">REMOVE</button></li> `
    );
  } else if (!(0 <= movieRating && movieRating <= 10)) {
    alert("Movie rating must be between 0 and 10!");
  } else if (movieTitle.length < 2) {
    alert("Movie length has to be at least 2 characters long!");
  }
});

$("ul").on("click", ".remove", function () {
  $(this).closest("li").remove();
});

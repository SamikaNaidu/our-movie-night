
const movieGenres = {
  romantic: {
    title: "💕 Romantic movie night",
    description: "Warning: excessive heart eyes ahead!",
    movies: [
      ["The Notebook", "Romance · Drama"],
      ["10 Things I Hate About You", "Romantic comedy"],
      ["To All the Boys I've Loved Before", "Teen romance"],
      ["The Idea of You", "Romance · Drama"],
      ["Anyone But You", "Romantic comedy"]
    ]
  },

  comedy: {
    title: "😂 Comedy night",
    description: "Let's find something hilarious!",
    movies: [
      ["The Proposal", "Romantic comedy"],
      ["Game Night", "Comedy · Mystery"],
      ["21 Jump Street", "Comedy · Action"],
      ["The Intern", "Feel-good comedy"],
      ["We're the Millers", "Comedy · Crime"]
    ]
  },

  horror: {
    title: "👻 Horror night",
    description: "Who will get scared first? 👀",
    movies: [
      ["The Conjuring", "Supernatural horror"],
      ["A Quiet Place", "Horror · Thriller"],
      ["Insidious", "Supernatural horror"],
      ["Smile", "Psychological horror"],
      ["Talk to Me", "Supernatural horror"]
    ]
  },

  surprise: {
    title: "🎲 Surprise movie picks",
    description: "A little bit of everything!",
    movies: [
      ["Interstellar", "Sci-fi · Adventure"],
      ["La La Land", "Romance · Musical"],
      ["Knives Out", "Mystery · Comedy"],
      ["Enola Holmes", "Mystery · Adventure"],
      ["The Conjuring", "Horror"]
    ]
  }
};

function showMovies(genre) {
  const data = movieGenres[genre];

  document.getElementById("genreTitle").textContent =
    data.title;

  document.getElementById("genreDescription").textContent =
    data.description;

  const choices = document.getElementById("movieChoices");
  choices.innerHTML = "";

  document.getElementById("selectedMovie").hidden = true;

  data.movies.forEach(([title, category]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "movie-choice";

    const name = document.createElement("strong");
    name.textContent = title;

    const info = document.createElement("small");
    info.textContent = category;

    button.append(name, info);

    button.addEventListener("click", () => {
      document.querySelectorAll(".movie-choice")
        .forEach(item => item.classList.remove("selected"));

      button.classList.add("selected");

      document.getElementById("selectedMovieText").textContent =
        "🎟️ Your pick: " + title;

      document.getElementById("selectedMovie").hidden = false;
    });

    choices.appendChild(button);
  });

  document.getElementById("movieList").hidden = false;

  document.getElementById("movieList").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

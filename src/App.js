import "./styles.css";
import React, { useState } from "react";

const animeDB = {
  Action: [
    {
      name: "Attack on Titan",
      rating: "11/10",
      description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
    },
    {
      name: "Demon Slayer",
      rating: "7/10",
      description:
        "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
    },
    {
      name: "One Punch Man",
      rating: "9.5/10",
      description:
        "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch."
    }
  ],

  Comedy: [
    {
      name: "Love is War",
      rating: "10/10",
      description:
        "The proudly privileged top two students of an elite school each makes it their mission to be the first to extract a confession of love from the other."
    },
    {
      name: "Grand Blue",
      rating: "8/10",
      description:
        "A college student spends his year at the seaside town of Izu, having fun on the beach with his school friends."
    },
    {
      name: "Gintama",
      rating: "9/10",
      description:
        "In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can."
    }
  ],

  Isekai: [
    {
      name: "Re:Zero",
      rating: "9.5  /10",
      description:
        "Shortly after being summoned to a new world, Subaru Natsuki and his new female companion are brutally murdered. But then he awakes to find himself in the same alley, with the same thugs, the same girl, and the day begins to repeat."
    },
    {
      name: "No Game No Life",
      rating: "8.5/10",
      description:
        "Siblings Sora and Shiro together make up the most feared team of pro gamers in the world, The Blank. When they manage to beat god himself in a game of chess, they are sent to a world where all disputes are settled with games."
    },
    {
      name: "Konosuba",
      rating: "7/10",
      description:
        "It was a happy day for Kazuma - right up to the moment he died. A goddess intervenes and offers him a second chance in a magical land."
    }
  ]
};

export default function App() {
  const [selGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> GoodAnimes 👊🏻👨🏻‍🦲</h1>
      <p>Checkout my favorite Animes! Choose a Genre</p>

      <div>
        {Object.keys(animeDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div>
        {animeDB[selGenre].map((anime) => (
          <div className="animelist">
            <div style={{ fontSize: "larger" }}>
              {" "}
              {anime.name} {anime.rating}
            </div>
            <div style={{ fontSize: "small", color: "white" }}>
              {" "}
              {anime.description}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

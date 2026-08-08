// Audio files
//Music from #Uppbeat (free for Creators!):
//https://uppbeat.io/t/pecan-pie/pixel-drift
//License code: IZBJTD93LYKHZP9K
  // Prepare audio 
const audio = new Audio(
    "./audio/game.mp3"
);

audio.loop = true;

audio.play()
    .then(() => {
        console.log("Audio started successfully");
    })
    .catch((error) => {
        console.log(
            "Autoplay was blocked:",
            error
        );
    });

//Game section
const games = [
    {
        name: "Love Snake",
        icon: "🐍",
        description:
            "Collect the hearts and grow your love 💕",
        link:
            "https://ruzrun.github.io/snake-game/",
        available: true
    },
   {
        name: "Block Blast",
        icon: "🧱",
        description:
            "Place the blocks and clear the board ⭐",
        link:
            "https://ruzrun.github.io/Block-Blast/",//https://ruzrun.github.io/Block-Blast/
        available: true
    },
      {
        name: "Card Combine",
        icon: "🃏",
        description:
            "Combine the cards and discover something special 💌",
        link:
            "#",
        available: false
    },
     {
        name: "Tetris",
        icon: "image/tetris.png",
        description:
            "Stack the blocks, clear the lines, and beat your high score! 🧱✨",
        link:
            "https://ruzrun.github.io/Tetris/",
        available: false,
        iconType: "image"
     }
  
];
const gamesContainer =
    document.getElementById(
        "gamesContainer"
    );
games.forEach(
    function(game, index) {
        const card =
            document.createElement(
                "a"
            );
        card.classList.add(
            "game-card"
        );
        card.style.animationDelay =
            `${index * 0.15}s`;
        if (
            game.available
        ) {
            card.href =
                game.link;
        } else {
            card.href =
                "#";
            card.classList.add(
                "coming-soon"
            );
            card.addEventListener(
                "click",
                function(event) {
                    event.preventDefault();
                    showComingSoon();
                }
            );
        }
        card.innerHTML = `
    <div class="game-icon">
        ${
            game.iconType === "image"
                ? `<img src="${game.icon}" alt="${game.name}">`
                : game.icon
        }
    </div>

    <h2>
        ${game.name}
    </h2>

    <p>
        ${game.description}
    </p>

    <div class="play-button">
        ${
            game.available
                ? "Play Game →"
                : "Coming Soon ✨"
        }
    </div>
`;
        gamesContainer.appendChild(
            card
        );
    }
);
function showComingSoon() {
    const messages = [
        "This game is still being created 💕",
        "Coming soon for you 💌",
        "Be patient, little gamer 🥰",
        "I am still making this one ⭐"
    ];
    const randomMessage =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];
    alert(
        randomMessage
    );
}

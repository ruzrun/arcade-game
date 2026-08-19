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
        name: "X O X",
        icon: "image/xox.png",
        description:
            "Challenge a friend or beat the smart computer ✨",
        link:
            "https://ruzrun.github.io/XO-Game/",
        available: true,
        iconType: "image"
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
     },
    {
        name: "Tetris 2",
        icon: "image/tetris2.png",
        description:
            "Drop colourful blocks, build your sand, and connect colours wall to wall! 🌈🏖️",
        link:
            "https://ruzrun.github.io/Tetris-2/",
        available: false,
        iconType: "image"
     },
    {
        name: "2048 Game",
        icon: "image/2048.png",
        description:
            "Combine the numbers and see how far you can go ✨",
        link:
            "https://ruzrun.github.io/2048-Game/",
        available: false,
        iconType: "image"
    },
    {
    name: "Memory Match",
    icon: "🃏",
    description:
        "Flip the cards, find the pairs, and remember them all 💕",
    link:
        "https://ruzrun.github.io/Memory-Match/",
    available: false
    /*iconType: "emoji"*/
},

{
    name: "Minesweeper",
    icon: "💣",
    description:
        "Clear the board, avoid the mines, and survive 💥",
    link:
        "https://ruzrun.github.io/Minesweeper/",
    available: false
   /* iconType: "emoji"*/
},
{
    name: "Solitaire",
    icon: "🃏",
    description:
        "Build your foundations, make your moves, and clear the deck ✨",
    link:
        "https://ruzrun.github.io/Solitaire/",
    available: false
},
  {
    name: "Pac-Man",
    icon: "🟡",
    description:
        "Chomp through the maze, collect pellets, and outsmart the ghosts 👻",
    link:
        "https://ruzrun.github.io/Pac-Man/",
    available: false
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

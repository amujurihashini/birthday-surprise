// BIRTHDAY COUNTDOWN AND LOCK SYSTEM

function updateCountdown() {

    const birthday = new Date(2026, 10, 28, 0, 0, 0);
    const now = new Date();

    const difference = birthday - now;

    const button = document.getElementById("surpriseButton");
    const countdown = document.getElementById("countdown");

    if (difference <= 0) {

        if (countdown) {
            countdown.innerHTML = "🎉 Birthday Surprise Unlocked! ❤️";
        }

        if (button) {
            button.disabled = false;
            button.innerText = "Open Your Surprise 🎁";
        }

        return;
    }

    if (button) {
        button.disabled = true;
        button.innerText = "Locked Until 28 November 🔒";
    }

    if (countdown) {

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}

updateCountdown();

setInterval(updateCountdown, 1000);


// OPEN BIRTHDAY SURPRISE
function openSurprise() {

    const birthday = new Date(2026, 10, 28, 0, 0, 0);
    const now = new Date();

    if (now < birthday) {
        alert("Your surprise is waiting! Come back on November 28 ❤️");
        return;
    }

    document.getElementById("app").innerHTML = `
        <h1>Happy Birthday, na muddula Mavayyaaa! 🎂❤️</h1>

        <p>
            Today is all about you!
            You are someone truly special.
            Nee kosam idantha chala kashtapadi chesa. 💗
        </p>

        <div class="gift-box" id="giftBox">🎁</div>

        <button onclick="openGift()">Open Your Gift 🎁</button>

        <div id="giftMessage" class="hidden">
            <h2>Surprise! ❤️🥹</h2>
            <p>I have something special for you!</p>
            <button onclick="showMemories()">Our Memories 📸</button>
        </div>
    `;
}

function openGift() {
    const gift = document.getElementById("giftBox");

    gift.classList.add("open");

    setTimeout(() => {
        document.getElementById("giftMessage")
            .classList.remove("hidden");
    }, 900);
}



// OUR MEMORIES

function showMemories() {

    document.getElementById("app").innerHTML = `
        <h1>Our Beautiful Memories ❤️</h1>

        <div class="gallery">
            <img src="images/photo1.jpeg">
            <img src="images/photo2.jpeg">
            <img src="images/photo3.jpeg">
            <img src="images/photo4.jpeg">
            <img src="images/photo5.jpeg">
        </div>

        <button onclick="showLetter()">A Letter For You 💌</button>
    `;

    document.querySelector(".gallery").style.display = "flex";
}


// PERSONAL LETTER

function showLetter() {

    document.getElementById("app").innerHTML = `
        <h1>A Little Letter For You 💌</h1>

        <p>
            Dear Kothi ❤️,<br><br>

            Happy Birthday to my all tym favourite!🥰

            You make ordinary moments feel special.✨

            I wish nee life eppudu ilane na matalatho,aatalatho,paatalatho happy ga undali🥰.

            Nenu lekapothe nv intha happy ga undalevu ani naku telusu kani avanni nenu baitiki cheppukonu.

            Enduku ante naku pogadtalu nachavu ani niku kuda telusu kada nanna 🫣.

            Ala ani nenu kakunda ne life loki evaraina ravalani chusina nv vellalani chusina 🙄

            jarupukodaniki niku nxtbday undadhu annamaata😌.

            <br><br>

            Thank you for being someone so special Nannaa🥹🫶🏻

            You deserve all the happiness in the world.

            Avanni nenu nee life lo unte automatic ga untayi anuko..🤭

            <br><br>

            Happy Birthday once again dear!❤️💋

            <br><br>

            With loads of love😘💗

            Nee potti bangaram❤️🧸
        </p>

        <button onclick="showQuestion()">
            One More Surprise🫣💕
        </button>
    `;
}


// INTERACTIVE QUESTION

function showQuestion() {

    document.getElementById("app").innerHTML = `
        <h1>One Little Question ❤️</h1>

        <p>Do you know how special you are to me?🥺</p>

        <button onclick="showFinal()">Yes ❤️</button>

        <button onclick="showFinal()">Of Course! 💗</button>
    `;
}


// FINAL SURPRISE

function showFinal() {

    document.getElementById("app").innerHTML = `
        <h1>One Last Thing! 💖</h1>

        <p>
            Kothii..🙈, this little application
            was made especially for you!

            I hope this birthday becomes
            one of your happiest memories Nannaaa🥰 .

            <br><br>

            HAPPY BIRTHDAY NANNA!🎂❤️

            <br><br>

            You are my favourite person in the entire world!🫀
            Ummmaaahhhhhhh!🥰
        </p>

        <h1>🎈🎉💗🎁</h1>
    `;
}


function createHearts() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHearts, 500);


function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}
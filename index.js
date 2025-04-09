const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = "Masukkan angka antara 1 hingga 10.";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Selamat! Kamu menebak dengan benar dalam ${attempts} percobaan.`;
  } else if (guess < randomNumber) {
    message.textContent = "Terlalu rendah. Coba lagi!";
  } else {
    message.textContent = "Terlalu tinggi. Coba lagi!";
  }
});

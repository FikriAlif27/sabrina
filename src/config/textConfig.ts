export interface ConfigPinGate {
  title: string;
  subtitle: string;
  buttonText: string;
  errorText: string;
  hintButtonShow: string;
  hintButtonHide: string;
  pinHint: string;
}

export interface ConfigGiftBox {
  envelopeSub: string;
  envelopeTitle: string;
  envelopeRetry: string;
  letterDear: string;
  letterSub: string;
  letterText: string;
}

export interface ConfigPage {
  brandName: string;
  navLinks: { id: string; label: string }[];
  dateEst: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroButton1: string;
  heroButton2: string;
}

export interface ConfigMilestones {
  chapter: string;
  titleLine1: string;
  titleHighlight: string;
  cards: { year: string; milestone: string; title: string; message: string }[];
}

export interface ConfigLoveLetter {
  envelopeSub: string;
  letterDear: string;
  paragraphs: string[];
  signature: string;
}

export interface ConfigSoundtrack {
  title: string;
  hintText: string;
}

export const CONFIG_PINGATE: ConfigPinGate = {
  title: "Sabrina's Birthday",
  subtitle: "Enter the birthday PIN to continue",
  buttonText: "UNLOCK YOUR SURPRISE",
  errorText: "Incorrect PIN. Try again 💖",
  hintButtonShow: "Need a hint?",
  hintButtonHide: "Hide hint",
  pinHint: "Sabrina's birth date (MMDD) 🎂"
};

export const CONFIG_GIFTBOX: ConfigGiftBox = {
  envelopeSub: "A birthday letter just for you",
  envelopeTitle: "Tap to open your birthday surprise",
  envelopeRetry: "Tap once more to open",
  letterDear: "Happy Birthday, Sabrina!",
  letterSub: "Today is all about celebrating you.",
  letterText: "Let's open the pages of our beautiful memories..."
};

export const CONFIG_PAGE: ConfigPage = {
  brandName: "SABRINA'S HAVEN",
  navLinks: [
    { id: "#memories", label: "01 / MEMORIES" },
    { id: "#milestones", label: "02 / JOURNEY" },
    { id: "#letter", label: "03 / WISHES" }
  ],
  dateEst: "June 10, 2007",
  heroTitleLine1: "Celebrating",
  heroTitleHighlight: "Sabrina's beautiful existence.",
  heroDescription: "A digital sanctuary filled with our milestones, golden memories, and melodies that speak of how much brighter you make the world. Welcome to your space.",
  heroButton1: "EXPLORE MEMORIES",
  heroButton2: "READ MY WISHES"
};

export const CONFIG_MILESTONES: ConfigMilestones = {
  chapter: "Chapter II",
  titleLine1: "A journey decorated with",
  titleHighlight: "moments of joy",
  cards: [
    {
      year: "Chapter 1",
      milestone: "Awal Mula",
      title: "Kesan Pertama",
      message: "Kesan pertama aku saat mengenal Sabrina adalah dia sosok yang sangat ceria dan penuh energi. Cara dia berbicara, bercanda, dan berinteraksi dengan orang lain membuat suasana terasa hidup. Sebagai seseorang yang cenderung pendiam, aku justru merasa tertarik dengan kepribadiannya yang aktif dan ekspresif. Dari situ, aku mulai merasa nyaman untuk mengenalnya lebih jauh, dan tanpa sadar rasa tertarik itu tumbuh seiring waktu."
    },
    {
      year: "Chapter 2",
      milestone: "Momen Indah",
      title: "Pertemuan di Bandung",
      message: "Bagi aku, hampir semua momen yang pernah kita lalui adalah momen yang indah. Setiap pertemuan, percakapan, dan pengalaman bersama selalu memberikan sesuatu yang membuat kita semakin mengenal satu sama lain. Namun, momen yang paling berkesan adalah ketika pertama kali aku bertemu dengan keluarganya di Bandung. Aku bisa bertemu langsung dengan kakaknya, adiknya, mama, papa, dan keluarga lainnya. Momen itu terasa sangat spesial karena sebelumnya hubungan kami harus dijalani secara diam-diam dan belum mendapatkan izin dari orang tua. Saat itu aku datang dengan prinsip \"take it or leave it\", karena aku sudah memahami segala kemungkinan yang bisa terjadi, termasuk risiko terburuk jika setelah pertemuan itu kami tidak diperbolehkan lagi untuk dekat. Untungnya, momen tersebut justru menjadi salah satu kenangan yang paling berarti dalam hubungan kami."
    },
    {
      year: "Chapter 3",
      milestone: "Saling Mendukung",
      title: "Bertumbuh Bersama",
      message: "Selama menjalani hubungan ini, kami selalu berusaha saling menguatkan di tengah kekurangan masing-masing. Ketika Sabrina bercerita tentang berbagai permasalahan yang dihadapinya, termasuk perjuangannya untuk mengejar impian masuk ke universitas yang diinginkan, aku selalu berusaha memberikan dukungan dan semangat terbaik yang aku bisa. Begitu juga sebaliknya. Aku merasa Sabrina memiliki peran yang sangat besar dalam hidupku. Karena dia, aku belajar lebih mengenal diriku sendiri, mulai dari cara memahami emosi, membangun kepercayaan diri, hingga hal-hal sederhana seperti cara berpakaian dan mengekspresikan diri. Bersamanya, aku banyak bertumbuh menjadi versi diriku yang lebih baik."
    },
    {
      year: "Future",
      milestone: "Masa Depan",
      title: "Harapan & Doa",
      message: "Setelah menjalani hubungan selama tiga tahun, aku bersyukur karena kita berhasil melewati banyak hal bersama. Harapanku ke depan bukan lagi sekadar tentang bertahan, tetapi bagaimana kita bisa terus menjaga hubungan ini agar tetap kuat dan berjalan dengan baik dalam situasi apa pun. Aku juga berharap kita bisa sama-sama meraih impian masing-masing, menyelesaikan setiap proses yang sedang dijalani, mendapatkan pekerjaan yang sesuai dengan harapan, dan membangun masa depan yang lebih baik. Apa pun yang terjadi nanti, semoga kita tetap menjadi dua orang yang saling mendukung, bertumbuh bersama, dan tidak pernah berhenti percaya satu sama lain."
    }
  ]
};

export const CONFIG_LOVELETTER: ConfigLoveLetter = {
  envelopeSub: "Surat Spesial untuk Sabrina",
  letterDear: "Selamat ulang tahun, sayangku Sabrina. ❤️",
  paragraphs: [
    "Hari ini bertambah satu tahun usia kamu, tapi yang paling aku syukuri bukan cuma itu. Aku bersyukur bisa mengenal seseorang yang selalu berusaha jadi versi terbaik dirinya sendiri. Kamu orang yang ambisius, penuh semangat, kritis, dan nggak pernah puas dengan jawaban yang setengah-setengah. Kadang kamu terlalu keras sama diri sendiri, terlalu ingin semuanya sempurna, tapi justru itu yang bikin aku kagum sama perjuanganmu.",
    "Aku tahu nggak semua hal berjalan sesuai yang kamu harapkan. Ada banyak target, mimpi, dan rencana yang terus kamu kejar. Tapi aku harap di usia yang baru ini, kamu juga bisa lebih sering menghargai dirimu sendiri. Karena sejauh ini, kamu sudah berjalan sangat jauh dan berjuang lebih keras daripada yang banyak orang lihat.",
    "Terima kasih karena sudah hadir dalam hidupku. Terima kasih untuk semua cerita, tawa, keluh kesah, dan semua momen yang kita lewati bersama. Aku bangga sama kamu, bukan karena apa yang berhasil kamu capai, tapi karena siapa dirimu sebagai manusia.",
    "Semoga tahun ini membawa lebih banyak kebahagiaan, kesehatan, kesempatan, dan mimpi yang satu per satu menjadi nyata. Dan semoga apa pun yang terjadi nanti, kamu selalu ingat kalau ada aku yang akan terus mendukung dan menemani kamu."
  ],
  signature: "Selamat ulang tahun, Sabrina. Aku sayang kamu, hari ini, besok, dan seterusnya. 🤍"
};

export const CONFIG_SOUNDTRACK: ConfigSoundtrack = {
  title: "Your Birthday Playlist",
  hintText: "Add your favorite track to /public/music/our-song.mp3 to play real audio."
};

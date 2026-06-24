const profile = {
  name: "Zhihua Hua",
  nameCn: "花志华",
  affiliation: "Fudan University",
  location: "Shanghai, China",
  email: "zhhua24@m.fudan.edu.cn",
  avatar: "assets/profile-photo-srgb.jpg",
  links: [
    { label: "Email", icon: "email", url: "mailto:zhhua24@m.fudan.edu.cn" },
    { label: "GitHub", icon: "github", url: "https://github.com/Zhihua-Hua" },
    { label: "Google Scholar", icon: "scholar", url: "https://scholar.google.com/" },
    { label: "CV", icon: "cv", url: "#" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/" },
  ],
};

const about = [
  [
    "I am a second-year master's student at Fudan University, advised by Prof. ",
    { label: "Wenchao Ding", url: "https://wenchaoding.github.io/personal/index.html" },
    " at ",
    { label: "MAGIC LAB", url: "http://www.fudanmagiclab.com/" },
    ".",
  ],
  "My previous research centered on autonomous driving, including end-to-end autonomous driving, VLA, and diffusion-based planning or generation. I am now increasingly focused on embodied AI, especially world action models and reinforcement learning methods that support robust manipulation.",
  "Previously, I received my Bachelor's degree in ME from Tongji University in 2024.",
];

const interests = [
  "Embodied AI, World Action Model, Representation Learning, Reinforcement Learning",
  "Autonomous Driving, VLA, Diffusion Model"
];

const news = [
  {
    date: "Jun. 2026",
    text: "One paper was accepted by ECCV 2026: Beyond Imitation: Learning Safe End-to-End Autonomous Driving from Hard Negatives. 🎉",
  },
  {
    date: "Jun. 2026",
    text: "One paper was accepted by IEEE RA-L: Hammer: Hierarchical Attention Generation Meets Mixture-of-Experts Evaluation for End-to-End Autonomous Driving. ✨",
  },
  {
    date: "Jan. 2026",
    text: "One paper was accepted by ICRA 2026: Unveiling the Surprising Efficacy of Navigation Understanding in End-to-End Autonomous Driving. 🚀",
  },
];

const education = [
  {
    school: "Fudan University",
    years: "2024 - PRESENT",
    location: "Shanghai, China",
    logo: "assets/education-fudan.svg",
  },
  {
    school: "Tongji University",
    years: "2020 - 2024",
    location: "Shanghai, China",
    logo: "assets/education-tongji.png",
  },
];

const publications = [
  {
    title: "Beyond Imitation: Learning Safe End-to-End Autonomous Driving from Hard Negatives",
    authors: "Junli Wang, Zhihua Hua, Xueyi Liu, Zebin Xing, Haochen Tian, Kun Ma, Hangjun Ye, Guang Chen, Long Chen, Qichao Zhang",
    venue: "ECCV 2026",
    image: "assets/publication-eccv-hard-negatives.png",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2605.19771" },
      { label: "PDF", url: "https://arxiv.org/pdf/2605.19771" },
      { label: "Code", url: "https://github.com/wjl2244/BeyondDrive" },
    ],
  },
  {
    title: "Hammer: Hierarchical Attention Generation Meets Mixture-of-Experts Evaluation for End-to-End Autonomous Driving",
    authors: "Junli Wang, Zhihua Hua, Qiang Chen, Xueyi Liu, Wei Zhang, Deheng Qian, Pengfei Li, Junyu Han, Wenchao Ding, Xiaoqing Ye, Yifeng Pan, Qichao Zhang",
    venue: "IEEE RA-L 2026",
    image: "assets/publication-ral-hammer.png",
    links: [],
  },
  {
    title: "Unveiling the Surprising Efficacy of Navigation Understanding in End-to-End Autonomous Driving",
    authors: "Zhihua Hua, Junli Wang, Pengfei Li, Qihao Jin, Bo Zhang, Kehua Sheng, Yilun Chen, Zhongxue Gan, Wenchao Ding",
    venue: "ICRA 2026",
    image: "assets/publication-sng-vla-pipeline.png",
    video: "assets/publication-sng-vla-demo.mp4",
    videoWidth: 1920,
    videoHeight: 1280,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2604.12208" },
      { label: "PDF", url: "https://arxiv.org/pdf/2604.12208" },
      { label: "Code", url: "https://github.com/Zhihua-Hua/SNG-VLA" },
      { label: "Project Page", url: "https://fudan-magic-lab.github.io/SNG-VLA/" },
    ],
  },
];

function text(nodeId, value) {
  const node = document.getElementById(nodeId);
  if (node) node.textContent = value;
}

function link(label, url, className = "") {
  const anchor = document.createElement("a");
  anchor.textContent = label;
  anchor.href = url;
  if (url !== "#") {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  if (className) anchor.className = className;
  return anchor;
}

function titleNode(item) {
  if (item.links.length) {
    return link(item.title, item.links[0].url, "publication-title");
  }

  const heading = document.createElement("span");
  heading.className = "publication-title";
  heading.textContent = item.title;
  return heading;
}

function venueClass(venue) {
  if (venue.includes("ECCV")) return "venue-eccv";
  if (venue.includes("RA-L")) return "venue-ral";
  if (venue.includes("ICRA")) return "venue-icra";
  return "venue-default";
}

function authors(textValue, highlightName) {
  const container = document.createElement("div");
  container.className = "authors";

  textValue.split(highlightName).forEach((part, index, parts) => {
    container.append(document.createTextNode(part));
    if (index < parts.length - 1) {
      const strong = document.createElement("strong");
      strong.textContent = highlightName;
      container.append(strong);
    }
  });

  return container;
}

const icons = {
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 6.6h15.6v10.8H4.2V6.6Zm1.5 1.6 6.3 4.4 6.3-4.4H5.7Zm12.6 7.6v-5.7l-5.9 4.1a.8.8 0 0 1-.9 0l-5.9-4.1v5.7h12.7Z"/></svg>',
  scholar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.5 8.2 12 13.4l9.5-5.2L12 3Z"/><path d="M5.4 10.1v4.5c0 2.1 3 3.9 6.6 3.9s6.6-1.8 6.6-3.9v-4.5L12 13.7l-6.6-3.6Z"/><path d="M20.8 9.1v6.1"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.7a9.3 9.3 0 0 0-2.9 18.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.3 9.3 0 0 0 12 2.7Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 8.9H3.9v10.2h2.9V8.9Z"/><path d="M5.4 4.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Z"/><path d="M20.1 13.3c0-3-1.6-4.6-3.8-4.6-1.8 0-2.6 1-3 1.7V8.9h-2.9v10.2h2.9v-5.7c0-.3 0-.6.1-.8.2-.6.8-1.2 1.8-1.2 1.3 0 1.9 1 1.9 2.5v5.2h3v-5.8Z"/></svg>',
  cv:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 3.4h8l3.2 3.3v13.9H6.4V3.4Z"/><path d="M14.4 3.6v3.5h3.4"/><path d="M8.8 11h6.4M8.8 14.2h6.4M8.8 17.4h3.4"/></svg>',
};

function iconLink(item) {
  const anchor = document.createElement("a");
  anchor.className = "social-icon";
  anchor.href = item.url;
  anchor.title = item.label;
  anchor.setAttribute("aria-label", item.label);
  anchor.innerHTML = `${icons[item.icon] || icons.cv}<span class="social-label">${item.label}</span>`;
  if (item.url !== "#") {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  return anchor;
}

function renderProfile() {
  text("profile-name", profile.name);
  text("profile-name-cn", profile.nameCn);
  text("profile-affiliation", profile.affiliation);
  text("profile-location", profile.location);

  const avatar = document.getElementById("profile-avatar");
  avatar.src = profile.avatar;
  avatar.alt = `${profile.name} avatar`;

  const links = document.getElementById("profile-links");
  profile.links.forEach((item) => links.append(iconLink(item)));
}

function renderAbout() {
  const container = document.getElementById("about-content");
  about.forEach((paragraph) => {
    const p = document.createElement("p");
    if (Array.isArray(paragraph)) {
      paragraph.forEach((part) => {
        if (typeof part === "string") {
          p.append(document.createTextNode(part));
        } else {
          p.append(link(part.label, part.url));
        }
      });
    } else {
      p.textContent = paragraph;
    }
    container.append(p);
  });
}

function renderInterests() {
  const list = document.getElementById("interest-list");
  interests.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });
}

function renderNews() {
  const list = document.getElementById("news-list");
  news.forEach((item) => {
    const li = document.createElement("li");
    const time = document.createElement("time");
    time.textContent = `[${item.date}]`;
    li.append(time, " ", item.text);
    list.append(li);
  });
}

function renderEducation() {
  const list = document.getElementById("education-list");
  education.forEach((item) => {
    const article = document.createElement("article");
    article.className = "education-item";

    const logoWrap = document.createElement("div");
    logoWrap.className = "education-logo";

    const logo = document.createElement("img");
    logo.src = item.logo;
    logo.alt = `${item.school} logo`;
    logo.loading = "lazy";
    logoWrap.append(logo);

    const body = document.createElement("div");
    body.className = "education-body";

    const school = document.createElement("h3");
    school.textContent = item.school;

    const location = document.createElement("p");
    location.className = "education-meta";

    const years = document.createElement("time");
    years.className = "education-years";
    years.textContent = item.years;

    const place = document.createElement("span");
    place.textContent = item.location;

    location.append(years, place);
    body.append(school, location);
    article.append(logoWrap, body);
    list.append(article);
  });
}

function renderPublications() {
  const list = document.getElementById("publication-list");
  publications.forEach((item) => {
    const li = document.createElement("li");
    li.className = "publication";

    const media = item.video
      ? document.createElement("video")
      : item.image
        ? document.createElement("img")
        : document.createElement("div");
    media.className = item.video || item.image
      ? "publication-thumb"
      : "publication-thumb publication-thumb-empty";

    if (item.video) {
      media.src = item.video;
      media.poster = item.image || "";
      if (item.videoWidth && item.videoHeight) {
        media.width = item.videoWidth;
        media.height = item.videoHeight;
        media.style.aspectRatio = `${item.videoWidth} / ${item.videoHeight}`;
      }
      media.muted = true;
      media.defaultMuted = true;
      media.autoplay = true;
      media.loop = true;
      media.playsInline = true;
      media.preload = "metadata";
      media.setAttribute("muted", "");
      media.setAttribute("autoplay", "");
      media.setAttribute("loop", "");
      media.setAttribute("playsinline", "");
      media.title = `${item.title} demo video`;
      media.setAttribute("aria-label", `${item.title} demo video`);
      media.addEventListener("click", () => {
        if (media.paused) {
          media.play().catch(() => {});
        } else {
          media.pause();
        }
      });
    }

    if (!item.video && item.image) {
      media.src = item.image;
      media.alt = "";
      media.loading = "lazy";
    }

    const body = document.createElement("div");
    body.className = "publication-body";

    const title = titleNode(item);
    const venue = document.createElement("span");
    venue.className = `publication-venue ${venueClass(item.venue)}`;
    venue.textContent = item.venue;

    const authorList = authors(item.authors, "Zhihua Hua");

    const links = document.createElement("div");
    links.className = "publication-links";
    links.append(venue);
    item.links.forEach((entry) => links.append(link(entry.label, entry.url)));

    body.append(title, authorList, links);
    li.append(media, body);
    list.append(li);
  });
}

renderProfile();
renderAbout();
renderInterests();
renderNews();
renderEducation();
renderPublications();
text("last-updated", "2026-06-15");

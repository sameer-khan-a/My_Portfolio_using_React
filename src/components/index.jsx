// import express from 'express';

// const app = express();
// const port = 8000;

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.listen(port, () => {
//     console.log(`listening on ${port}`);
// })

document.querySelector(".home").addEventListener("mouseover", () => {
  roleWriter();
});
document.querySelector(".hero").addEventListener("mouseover", () => {
  typeWriter();
});
// document.querySelector('.hero').addEventListener('mouseout', () => {
//   document.querySelector('.about-me').innerText = '';
// })
var text =
  "I am an aspiring Full Stack Developer with a strong passion for web development. My skills include building dynamic and high-performing web applications while optimizing project workflows through effective problem-solving and teamwork. I am eager to contribute and grow in an innovative environment where I can apply my technical and soft skills.";
var index = 0;
var aimIndex = 0;
var speed = 10;
var aim = [
  "Aspiring Full Stack Developer",
  "Passionate about software development",
  "Dedicated to mastering both front-end and back-end skills",
  "Creative problem solver",
  "Detail-oriented with a focus on quality",
  "Keen learner, always seeking to expand knowledge",
  "Results-driven and focused on delivering outcomes",
  "Team player with strong collaboration skills",
  "Adaptable to new tools, technologies, and workflows",
  "Strong communicator with a clear vision",
];

// Example: Display the list
aim.forEach((line) => console.log(line));

function typeWriter() {
  if (index < text.length) {
    document.querySelector(".about-me").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
function roleWriter() {
  aim.forEach((line) => {
    console.log(line.length);
    if (aimIndex < line.length) {
      document.querySelector(".aim").innerHTML += line.charAt(aimIndex);
      aimIndex++;
      setTimeout(roleWriter, 200);
      // if(document.querySelector('.aim').innerHTML == aim) {
      //     document.querySelector('.aim').innerHTML ='';
      // }
    }
  });
}
document.querySelector(".content1").style.display = "none";
document.querySelector(".content2").style.display = "none";
document.querySelector(".content3").style.display = "none";

function displayHandler(container, content) {
  document.querySelector(container).addEventListener("mouseover", () => {
    document.querySelector(container).style.transition = "width 2s";
    document.querySelector(content).style.display = "block";
  });
  document.querySelector(container).addEventListener("mouseout", () => {
    document.querySelector(content).style.display = "none";
  });
}
displayHandler(".skill1", ".content1");
displayHandler(".skill2", ".content2");
displayHandler(".skill3", ".content3");

function hoverHandler(container) {
  document.querySelector(container).addEventListener("mouseover", () => {
    document.querySelector(container).style.boxShadow =
      "10px 10px 10px 10px grey";
    document.querySelector(container).style.borderRadius = "15%";
  });
  document.querySelector(container).addEventListener("mouseout", () => {
    document.querySelector(container).style.boxShadow = "none";
  });
}
hoverHandler(".project1");
hoverHandler(".project2");
hoverHandler(".project3");

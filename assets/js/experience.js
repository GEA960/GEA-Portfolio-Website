AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Academic and Technical Writer",
    cardImage: "assets/images/experience-page/FCO.png",
    place: "Freelancingcareers.org Research Company",
    time: "(Nov, 2020 - present)",
    desp: "<li>Work to provide high-quality papers specifically in the field of Computer Science.</li> <li>I also work with nursing and philosophy fields documents as I have a sufficient knowledge about them.</li>",
  },
  {
    title: "Company Writer",
    cardImage: "assets/images/experience-page/LR.png",
    place: "Livingston Research Company",
    time: "(April, 2021 - present)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Course Certificates

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Computer Networking 1",
    cardImage: "assets/images/experience-page/CISCO1.png",
    description:
      "I had successfully achieved student level credential for completing CCNAv7. It enables me to configure switches and end devices to provide access to local and remote network resources. ",
  },
  {
    title: "Git and GitHub for Beginners-A Udemy Course",
    cardImage: "assets/images/experience-page/git and github.png",
    description:
      "I learned how to use the system of Git and GitHub for Version Control.",
  },
  {
    title: "Computer Literacy Training Program",
    cardImage: "assets/images/experience-page/Computer Literacy.png",
    description:
      "Learned to work using MS Windows Operating System, MS Office Suites, Web Page Design, Adobe Photoshop, and Macromedia Flash at University of Batangas",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The IMPACT Hackaton",
    subtitle: "Programmer/Developer",
    image: "assets/images/experience-page/IMPACT.png",
    desp: "Me and my co-developers/students developed a prototype front-end website system that will be a platform for listing all scholarships available for the students to file their application. It will let them easily track all available scholarships in the province where they resides.",
  }
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

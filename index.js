function loadProjectCards() {
  fetch('./html/project-card.html')
    .then(res => res.text())
    .then(template => {
      const container = document.getElementById('project-cards');

      const projects = [
        {
          title: "How To Make Flyer Design",
          description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit Awd And Lorem Ipsum...",
          image: "assets/proj1.png",
          tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
        },
        {
          title: "How To Make Flyer Design",
          description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit Awd And Lorem Ipsum...",
          image: "assets/proj2.png",
          tags: ["Typescript", "ReactJs", "NextJs", "CSS"]
        },
        {
          title: "How To Make Flyer Design",
          description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit Awd And Lorem Ipsum...",
          image: "assets/proj3.png",
          tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
        },
        {
          title: "How To Make Flyer Design",
          description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit Awd And Lorem Ipsum...",
          image: "assets/proj4.png",
          tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
        },
        {
          title: "How To Make Flyer Design",
          description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit Awd And Lorem Ipsum...",
          image: "assets/proj1.png",
          tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
        },
        {
          title: "How To Make Flyer Design",
          description: "Lorem Ipsum Dolor Sit Amet, Consec Adipiscing Elit Awd And Lorem Ipsum...",
          image: "assets/proj6.png",
          tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
        }
      ];

      projects.forEach(project => {
        const temp = document.createElement('div');
        temp.innerHTML = template;
        const card = temp.firstElementChild;

        card.querySelector('.card-title').textContent = project.title;
        card.querySelector('.card-description').textContent = project.description;
        card.querySelector('.card-image').src = project.image;
        card.querySelector('.card-image').alt = project.title;

        const tagsContainer = card.querySelector('.card-tags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
          const span = document.createElement('span');
          span.className = 'tag';
          span.textContent = tag;
          tagsContainer.appendChild(span);
        });

        container.appendChild(card);
      });
    })
    .catch(err => console.error("Error loading project cards:", err));
}

function loadRecommendationCards() {
  fetch('./html/recommendation-card.html')
    .then(res => res.text())
    .then(template => {
      const container = document.getElementById('recommendation-cards');

      const recommendations = [
        {
          title: "Great Quality!",
          description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...",
          image: "assets/people1.png",
          name: "James Gouse",
          profession: "Graphic Designer"
        },
        {
          title: "Amazing Work!",
          description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...",
          image: "assets/people2.png",
          name: "Tiana Philips",
          profession: "Photographer"
        },
        {
          title: "Great Quality!",
          description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...",
          image: "assets/people3.png",
          name: "Talan Westervelt",
          profession: "Business Man"
        },
        {
          title: "Excellent Service!",
          description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...",
          image: "assets/people1.png",
          name: "Sarah Johnson",
          profession: "Web Developer"
        },
        {
          title: "Highly Recommended!",
          description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...",
          image: "assets/people2.png",
          name: "Michael Brown",
          profession: "Marketing Specialist"
        }
      ];

      recommendations.forEach(recommendation => {
        const temp = document.createElement('div');
        temp.innerHTML = template;
        const card = temp.firstElementChild;

        card.querySelector('.recommendation-title').textContent = recommendation.title;
        card.querySelector('.recommendation-description').textContent = recommendation.description;
        card.querySelector('.profile-image').src = recommendation.image;
        card.querySelector('.profile-image').alt = recommendation.name;
        card.querySelector('.recommendation-name').textContent = recommendation.name;
        card.querySelector('.recommendation-profession').textContent = recommendation.profession;

        container.appendChild(card);
      });

      // Initialize Slick Slider
      $('#recommendation-cards').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    })
    .catch(err => console.error("Error loading recommendation cards:", err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjectCards();
  loadRecommendationCards();
});
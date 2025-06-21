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
        },
        // Add more project objects as needed
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


document.addEventListener('DOMContentLoaded', () => {
  loadProjectCards();
});
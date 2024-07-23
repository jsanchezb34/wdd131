document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.gallery');

    const sections = [
        {
            title: 'Web Design',
            filter: 'web-design',
            projects: [
                { title: 'Rafting site', mainImage: 'images/rafting-site1.png', 
                  secondaryImages: ['images/rafting-site2.png', 'images/rafting-site3.png'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Temple', mainImage: 'images/temples-album1', 
                  secondaryImages: ['images/temples-album2', 'images/temples-album3'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            ]
        },
        {
            title: 'Photography',
            filter: 'photography',
            projects: [
                { title: 'Project 4', mainImage: 'https://via.placeholder.com/400x300.png?text=Main+Image+4', secondaryImages: ['https://via.placeholder.com/200x150.png?text=Secondary+Image+4-1', 'https://via.placeholder.com/200x150.png?text=Secondary+Image+4-2'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Project 5', mainImage: 'https://via.placeholder.com/400x300.png?text=Main+Image+5', secondaryImages: ['https://via.placeholder.com/200x150.png?text=Secondary+Image+5-1', 'https://via.placeholder.com/200x150.png?text=Secondary+Image+5-2'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Project 6', mainImage: 'https://via.placeholder.com/400x300.png?text=Main+Image+6', secondaryImages: ['https://via.placeholder.com/200x150.png?text=Secondary+Image+6-1', 'https://via.placeholder.com/200x150.png?text=Secondary+Image+6-2'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
            ]
        },
        {
            title: 'Illustration',
            filter: 'illustration',
            projects: [
                { title: 'Project 7', mainImage: 'https://via.placeholder.com/400x300.png?text=Main+Image+7', secondaryImages: ['https://via.placeholder.com/200x150.png?text=Secondary+Image+7-1', 'https://via.placeholder.com/200x150.png?text=Secondary+Image+7-2'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Project 8', mainImage: 'https://via.placeholder.com/400x300.png?text=Main+Image+8', secondaryImages: ['https://via.placeholder.com/200x150.png?text=Secondary+Image+8-1', 'https://via.placeholder.com/200x150.png?text=Secondary+Image+8-2'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Project 9', mainImage: 'https://via.placeholder.com/400x300.png?text=Main+Image+9', secondaryImages: ['https://via.placeholder.com/200x150.png?text=Secondary+Image+9-1', 'https://via.placeholder.com/200x150.png?text=Secondary+Image+9-2'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
            ]
        }
    ];

    function createGallerySections() {
        sections.forEach(section => {
            const sectionElement = document.createElement('div');
            sectionElement.className = `section ${section.filter}`;

            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = section.title;
            sectionElement.appendChild(sectionTitle);

            section.projects.forEach(project => {
                const card = document.createElement('div');
                card.className = `gallerycard ${section.filter}`;

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = project.title;
                card.appendChild(projectTitle);

                const mainImage = document.createElement('img');
                mainImage.src = project.mainImage;
                mainImage.alt = `Main Image for ${project.title}`;
                card.appendChild(mainImage);

                const secondaryImagesDiv = document.createElement('div');
                secondaryImagesDiv.className = 'secondary-images';

                project.secondaryImages.forEach(imgSrc => {
                    const secondaryImage = document.createElement('img');
                    secondaryImage.src = imgSrc;
                    secondaryImage.alt = `Secondary Image for ${project.title}`;
                    secondaryImagesDiv.appendChild(secondaryImage);
                });

                card.appendChild(secondaryImagesDiv);

                const description = document.createElement('p');
                description.textContent = project.description;
                card.appendChild(description);

                sectionElement.appendChild(card);
            });

            galleryContainer.appendChild(sectionElement);
        });
    }

    function filterGallery(filter) {
        const allCards = document.querySelectorAll('.gallerycard');
        allCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('.gallery-nav button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.gallery-nav button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterGallery(button.getAttribute('data-filter'));
        });
    });

    createGallerySections();
    filterGallery('all');
});

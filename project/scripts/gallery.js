document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.gallery');

    const sections = [
        {
            title: 'Web Design',
            filter: 'web-design',
            projects: [
                { title: 'Rafting site', mainImage: 'images/rafting-site1.png', 
                  secondaryImages: ['images/rafting-site2.png', 'images/rafting-site3.png'], description: 'The site features an engaging design with easy navigation, showcasing detailed information about different rafting trips, including descriptions, images, and safety guidelines. ' },
                { title: 'Temples album', mainImage: 'images/temples-album1.png', 
                  secondaryImages: ['images/temples-album2.png', 'images/temples-album3.png'], description: 'The site features an intuitive filtering system that allows users to sort images based on construction year, area or size. This makes it easy for visitors to explore and appreciate the diverse architectural details and artistic elements of each temple.' },
            ]
        },
        {
            title: 'Photography',
            filter: 'photography',
            projects: [
                { title: 'Cactus', mainImage: 'images/cactus1.png', secondaryImages:
                ['images/cactus2.png', 'images/cactus3.png'], description: 'This photo series that highlights the unique and diverse shapes of cacti. Each image captures the intricate details and varied forms of these plants, showcasing their striking textures and patterns.' },
            ]
        },
        {
            title: 'Design',
            filter: 'illustration',
            projects: [
                { title: 'Fundraising Week Campaign', mainImage:'images/design2.png', secondaryImages: ['images/design4.png', 'images/design3.png'] ,description: 'The project involved creating visually compelling graphics that effectively communicate the campaigns message and appeal.' },
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

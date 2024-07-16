const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Cochabamba Bolivia Temple",
      location: "Cochabamba, Bolivia",
      dedicated: "2000, April, 30",
      area: 33302,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/e012ebb4075dc7976a314471fc0a3b3058e37c1a/full/320%2C/0/default"
  },
  {
      templeName: "Boise Idaho Temple",
      location: "Boise, Idaho",
      dedicated: "1984, May, 25",
      area: 35868,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/800x500/1-Boise-Idaho-Temple-1968984.jpg"
  },
  {
      templeName: "Logan Utah Temple",
      location: "Logan, Utah",
      dedicated: "1884, May, 17",
      area: 1119619,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/800x500/logan-temple-lds-776133-wallpaper.jpg"
  }
];

function displayTemples(filteredTemples) {
  const container = document.getElementById('temples-container');
  container.innerHTML = '';
  filteredTemples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.className = 'temple-card';

      templeCard.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.templeName}">
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
      `;

      container.appendChild(templeCard);
  });
}

function filterTemples(criteria) {
  let filteredTemples;
  switch (criteria) {
      case 'old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
      case 'new':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
      case 'large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
      case 'small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
      default:
          filteredTemples = temples;
          break;
  }
  displayTemples(filteredTemples);
}

document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);
  
  document.getElementById('home-link').addEventListener('click', () => displayTemples(temples));
  document.getElementById('old-link').addEventListener('click', () => filterTemples('old'));
  document.getElementById('new-link').addEventListener('click', () => filterTemples('new'));
  document.getElementById('large-link').addEventListener('click', () => filterTemples('large'));
  document.getElementById('small-link').addEventListener('click', () => filterTemples('small'));
});

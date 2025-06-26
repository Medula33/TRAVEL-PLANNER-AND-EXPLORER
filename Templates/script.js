const featuredDeals = [
  {
    title: "Paris Getaway",
    image: "https://tse1.mm.bing.net/th?id=OIP.yB1MCLlnyqlRYGJrWIaPJAHaHm&pid=Api&P=0&h=180",
    description: "Experience the romantic city of Paris with exclusive deals."
  },
  {
    title: "Explore Tokyo",
    image: "https://tse4.mm.bing.net/th?id=OIP.HsSeAKp6etOFuskUNDuvawHaEW&pid=Api&P=0&h=180",
    description: "Discover the vibrant culture and cuisine of Tokyo."
  },
  {
    title: "New York Adventure",
    image: "https://tse2.mm.bing.net/th?id=OIP._gjt9vKTJJCTbyDrrI_eLQHaEK&pid=Api&P=0&h=180",
    description: "Enjoy the bustling life of New York City with our special offers."
  }
];

// Sample data for popular destinations
const popularDestinations = [
  {
    name: "Bali",
    image: "https://tse2.mm.bing.net/th?id=OIP.YJAcaaf5RNEDnCRzy5q4zAHaE7&pid=Api&P=0&h=180",
    description: "Relax on the beautiful beaches of Bali."
  },
  {
    name: "London",
    image: "https://tse2.mm.bing.net/th?id=OIP.D6nDBZj92c9H59IFlGZ50gHaE8&pid=Api&P=0&h=180",
    description: "Explore the historic landmarks of London."
  },
  {
    name: "Sydney",
    image: "https://tse1.mm.bing.net/th?id=OIP.pIbUpRIBiC6nFbUEutlldAHaC1&pid=Api&P=0&h=180",
    description: "Experience the iconic Sydney Opera House and harbor."
  }
];

// Function to display featured deals
function displayFeaturedDeals() {
  const dealsContainer = document.querySelector('.deals-container');
  featuredDeals.forEach(deal => {
    const dealCard = document.createElement('div');
    dealCard.classList.add('deal-card');
    dealCard.innerHTML = `
      <img src="${deal.image}" alt="${deal.title}">
      <h3>${deal.title}</h3>
      <p>${deal.description}</p>
    `;
    dealsContainer.appendChild(dealCard);
  });
}

const stories = [
  {
    title: "Exploring the Alps",
    description: "An unforgettable journey through the snow-capped mountains and charming villages of Switzerland."
  },
  {
    title: "A Week in Tokyo",
    description: "From sushi to skyscrapers – my adventure discovering Japan's futuristic capital city."
  },
  {
    title: "Desert Dreams in Dubai",
    description: "Riding camels, luxury shopping, and watching the sunset from the Burj Khalifa."
  }
];

const storiesContainer = document.getElementById('storiesContainer');

stories.forEach(story => {
  const div = document.createElement('div');
  div.className = 'story-card';
  div.innerHTML = `<h3>${story.title}</h3><p>${story.description}</p>`;
  storiesContainer.appendChild(div);
});

// Function to display popular destinations
function displayPopularDestinations() {
  const destinationsContainer = document.querySelector('.destination-cards');
  popularDestinations.forEach(destination => {
    const destinationCard = document.createElement('div');
    destinationCard.classList.add('destination-card');
    destinationCard.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
    `;
    destinationsContainer.appendChild(destinationCard);
  });
}

// Initialize the content on page load
window.addEventListener('DOMContentLoaded', () => {
  displayFeaturedDeals();
  displayPopularDestinations();
});

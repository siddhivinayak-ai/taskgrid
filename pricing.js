document.addEventListener('DOMContentLoaded', function() {
  const pricingCardsContainer = document.getElementById('pricing-cards');

  const plans = [
      {
          name: 'Basic',
          priceUSD: 50,
          priceINR: 4000,
          features: [
              {
                  text: 'Zoho CRM',
                  icon: 'fa-solid fa-users',
                  description: 'Manage customer relationships, track leads, and close deals efficiently.'
              },
              {
                  text: 'Zoho Mail',
                  icon: 'fa-solid fa-envelope',
                  description: 'Secure and reliable email hosting for your business communication.'
              },
              {
                  text: 'Zoho Projects',
                  icon: 'fa-solid fa-tasks',
                  description: 'Collaborate on projects, track tasks, and manage timelines effectively.'
              },
              {
                  text: 'Zoho Forms',
                  icon: 'fa-solid fa-file-alt',
                  description: 'Create and embed online forms for data collection and surveys.'
              },
          ],
          buttonLink: 'contact.html'
      },
      {
          name: 'Standard',
          priceUSD: 100,
          priceINR: 8000,
          features: [
              {
                  text: 'All Basic Features',
                  icon: 'fa-solid fa-check',
                  description: 'Includes all the features from the Basic plan.'
              },
              {
                  text: 'Zoho Books',
                  icon: 'fa-solid fa-book',
                  description: 'Manage your finances, track expenses, and generate invoices with ease.'
              },
              {
                  text: 'Zoho Analytics',
                  icon: 'fa-solid fa-chart-line',
                  description: 'Visualize data, create reports, and gain insights for informed decision-making.'
              },
              {
                  text: 'Zoho Desk',
                  icon: 'fa-solid fa-headset',
                  description: 'Provide exceptional customer support with a comprehensive help desk solution.'
              },
              {
                  text: 'Zoho Flows',
                  icon: 'fa-solid fa-stream',
                  description: 'Automate workflows and connect applications for seamless business processes.'
              }
          ],
          buttonLink: 'contact.html'
      },
      {
          name: 'Premium',
          priceUSD: 150,
          priceINR: 12000,
          features: [
              {
                  text: 'All Standard Features',
                  icon: 'fa-solid fa-check',
                  description: 'Includes all the features from the Standard plan.'
              },
              {
                  text: 'Zoho Creator',
                  icon: 'fa-solid fa-code',
                  description: 'Build custom applications and automate business processes with a low-code platform.'
              },
              {
                  text: 'Zoho Marketing Automation',
                  icon: 'fa-solid fa-bullhorn',
                  description: 'Automate marketing campaigns, nurture leads, and drive customer engagement.'
              },
              {
                  text: 'Zoho People',
                  icon: 'fa-solid fa-users-gear',
                  description: 'Manage your HR processes, track employee performance, and streamline workflows.'
              },
              {
                  text: 'Zoho SalesIQ-Chatbot',
                  icon: 'fa-solid fa-comment-dots',
                  description: 'Engage website visitors with live chat and automated chatbots for instant support and lead generation.'
              }
          ],
          buttonLink: 'contact.html'
      }
  ];

  plans.forEach(plan => {
      const card = document.createElement('div');
      card.classList.add('pricing-card');

      let featuresHTML = plan.features.map(feature => {
          return `
              <li title="${feature.description}">
                  <i class="${feature.icon}"></i> ${feature.text}
              </li>
          `;
      }).join('');

      card.innerHTML = `
          <div class="pricing-card-header">
              <h2>${plan.name}</h2>
          </div>
          <div class="pricing-card-price">
              <p>Starts from</p>
              <p>$${plan.priceUSD}</p>
            <p>( Rs ${plan.priceINR} )</p>
              
          </div>
          <div class="pricing-card-features">
              <ul>
                  ${featuresHTML}
              </ul>
          </div>
          <div class="pricing-card-button">
              <a href="${plan.buttonLink}">Choose Plan</a>
          </div>
      `;

      pricingCardsContainer.appendChild(card);
  });
});











// sidebar
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');

    menuIcon.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });
});
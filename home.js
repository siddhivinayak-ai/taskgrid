// home.js
document.addEventListener('DOMContentLoaded', function() {

  // const serviceGrid = document.getElementById('serviceGrid');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  const services = [
      {
          title: 'Zoho CRM Customization',
          description: 'Maximize sales and customer relationships with tailored CRM solutions.',
          image: 'data:image/png;base64,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',
          subServices: [
              {
                  title: 'Configuration & Setup',
                  items: [
                      { icon: 'ri-settings-3-line', text: 'Custom Fields & Layouts' },
                      { icon: 'ri-user-add-line', text: 'User Roles & Permissions' },
                      { icon: 'ri-list-settings-line', text: 'Workflow Rules & Automation' }
                  ]
              },
              {
                  title: 'Integration & Reporting',
                  items: [
                      { icon: 'ri-exchange-line', text: 'Zoho App Integrations' },
                      { icon: 'ri-dashboard-line', text: 'Custom Dashboards & Reports' },
                      { icon: 'ri-mail-send-line', text: 'Email Marketing Integration' }
                  ]
              }
          ]
      },
      {
          title: 'Zoho Creator Apps',
          description: 'Build custom applications to automate your unique business processes.',
          image: 'data:image/png;base64,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',
          subServices: [
              {
                  title: 'Application Development',
                  items: [
                      { icon: 'ri-code-s-slash-line', text: 'Custom App Design & Development' },
                      { icon: 'ri-database-2-line', text: 'Data Modeling & Management' },
                      { icon: 'ri-file-code-line', text: 'Deluge Scripting' }
                  ]
              },
              {
                  title: 'Deployment & Integration',
                  items: [
                      { icon: 'ri-cloud-line', text: 'Cloud Deployment & Hosting' },
                      { icon: 'ri-plug-2-line', text: 'API & Webhook Integrations' },
                      { icon: 'ri-phone-line', text: 'Mobile App Development' }
                  ]
              }
          ]
      },
      {
          title: 'Zoho Flow',
          description: 'Automate workflows with seamless integrations across applications.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPk_jr574nqjlz932iwNdnt_Wxy7W8pu4cA&s',
          subServices: [
              {
                  title: 'Workflow Automation',
                  items: [
                      { icon: 'ri-route-line', text: 'Automated Data Transfers' },
                      { icon: 'ri-timer-2-line', text: 'Scheduled Tasks & Triggers' },
                      { icon: 'ri-notification-line', text: 'Real-time Notifications' }
                  ]
              },
              {
                  title: 'Integration & Logic',
                  items: [
                      { icon: 'ri-plug-2-line', text: 'API & Third-Party Integrations' },
                      { icon: 'ri-code-line', text: 'Custom Logic & Scripting' },
                      { icon: 'ri-layout-grid-line', text: 'Complex Workflow Design' }
                  ]
              }
          ]
      },
      {
          title: 'Zoho Forms',
          description: 'Create powerful forms for data collection and automation.',
          image: 'data:image/png;base64,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',
          subServices: [
              {
                  title: 'Form Creation & Design',
                  items: [
                      { icon: 'ri-input-line', text: 'Custom Form Fields' },
                      { icon: 'ri-layout-column-line', text: 'Conditional Logic & Layouts' },
                      { icon: 'ri-file-edit-line', text: 'Form Themes & Branding' }
                  ]
              },
              {
                  title: 'Data Management & Integration',
                  items: [
                      { icon: 'ri-database-line', text: 'Data Storage & Export' },
                      { icon: 'ri-mail-send-line', text: 'Automated Email Notifications' },
                      { icon: 'ri-plug-2-line', text: 'Zoho App Integrations' }
                  ]
              }
          ]
      },
      {
          title: 'Zoho SalesIQ',
          description: 'Engage website visitors and improve customer support with live chat and analytics.',
          image: 'data:image/png;base64,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',
          subServices: [
              {
                  title: 'Chat & Visitor Tracking',
                  items: [
                      { icon: 'ri-chat-1-line', text: 'Live Chat Setup & Customization' },
                      { icon: 'ri-eye-line', text: 'Website Visitor Tracking' },
                      { icon: 'ri-robot-line', text: 'Chatbot Implementation' }
                  ]
              },
              {
                  title: 'Analytics & Automation',
                  items: [
                      { icon: 'ri-bar-chart-line', text: 'Real-time Analytics & Reporting' },
                      { icon: 'ri-notification-line', text: 'Automated Visitor Triggers' },
                      { icon: 'ri-customer-service-2-line', text: 'Customer Support Automation' }
                  ]
              }
          ]
      }
  ];

  const serviceGrid = document.getElementById('serviceGrid');

  services.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.classList.add('service-item');
      serviceItem.innerHTML = `
          <img src="${service.image}" alt="${service.title}">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          ${service.subServices.map(subService => `
              <h4>${subService.title}</h4>
              <ul>
                  ${subService.items.map(item => `
                      <li><i class="${item.icon}"></i> ${item.text}</li>
                  `).join('')}
              </ul>
          `).join('')}
      `;
      serviceGrid.appendChild(serviceItem);
  });


  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        serviceGrid.scrollBy({
            left: -430, // Adjust scroll amount as needed (width + gap)
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        serviceGrid.scrollBy({
            left: 430, // Adjust scroll amount as needed (width + gap)
            behavior: 'smooth'
        });
    });
}


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














document.addEventListener("DOMContentLoaded", function() {
  const servicesData = [
      {
          industry: "E-commerce & Retail",
          image: "https://img.freepik.com/premium-vector/online-shopping-customers-browse-buy-with-ease_123891-157899.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
          needs: "Online store automation, inventory management, customer engagement.",
          solutions: "Manage orders, automate marketing, track inventory in real-time.",
          tools: ["Zoho Commerce", "Zoho Inventory", "Zoho CRM", "Zoho SalesIQ", "Zoho Marketing Automation"],
          toolImages: ["https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a5b97dfdf4162440267019e8dc75b1b5/zoho-commerce.png",
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcJb1mTAiSk-L6dD7fgVHqDWWLrIJp4Y0bg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTl7VjK_b2fYDEkXuxTn3yHK8vLuT12VoLg&s", "https://pbs.twimg.com/profile_images/1390183217051758594/i9qvRKff_400x400.jpg",
            "https://flow-in-public.nimbuspop.com/flow-apps/zoho_marketing_automation.png"]
      },
      {
          industry: "Real Estate & Property",
          image: "https://img.freepik.com/premium-vector/real-estate-appraisal-professionals-inspecting-property-using-mobile-devices_1263357-7594.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
          needs: "Lead tracking, property management, automated follow-ups.",
          solutions: "Automate client inquiries, contracts, and customer relationships.",
          tools: ["Zoho CRM", "Zoho Sign", "Zoho Desk", "Zoho SalesIQ", "Zoho Forms"],
          toolImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTl7VjK_b2fYDEkXuxTn3yHK8vLuT12VoLg&s",
           "https://play-lh.googleusercontent.com/MGC9NL6o2zwMzqJGMB1KxVxXdmwo2vG_EWirbcP_S7MvidqdX1FOiol_7GDKONGVYg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4e8AjmkclmRR1wLy7jYiS4zFSWeeANRg4Dw&s",
             "https://pbs.twimg.com/profile_images/1390183217051758594/i9qvRKff_400x400.jpg",
              "https://ps.w.org/zoho-forms/assets/icon-256x256.png?rev=2487515"]
      },
      {
          industry: "Healthcare & Clinics",
          image: "https://img.freepik.com/premium-vector/online-doctor-work-illustration-concept-with-characters_269730-103.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
          needs: "Patient record management, appointment scheduling, billing automation.",
          solutions: "Streamline patient bookings, automate billing, and manage records securely.",
          tools: ["Zoho Creator", "Zoho CRM", "Zoho Books", "Zoho Forms", "Zoho People"],
          toolImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXKw39bdIyuhefcVJUA8N0Or6mtoYUn8aNA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTl7VjK_b2fYDEkXuxTn3yHK8vLuT12VoLg&s",
          "https://5.imimg.com/data5/SELLER/Default/2024/5/422928668/KG/DE/OQ/160316899/zoho-books-accounting-software-250x250.png",
          "https://ps.w.org/zoho-forms/assets/icon-256x256.png?rev=2487515",
          "https://store-images.s-microsoft.com/image/apps.19071.0081b760-2601-4483-b69f-a3627b1a1b36.c381bc22-ca81-493f-aa31-6177a0c5a47d.eafacce7-825d-46fe-a2bf-182c9e3df4db"]
      },
      {
        industry: "Financial Services & Banking",
        image: "https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-mobile-banking_516790-2105.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
        needs: "Client management, billing automation, compliance tracking.",
        solutions: "Securely manage financial data, automate workflows, and enhance client servicing.",
        tools: ["Zoho Books", "Zoho CRM", "Zoho Analytics", "Zoho Vault", "Zoho Expense"],
        toolImages: [
            "https://5.imimg.com/data5/SELLER/Default/2024/5/422928668/KG/DE/OQ/160316899/zoho-books-accounting-software-250x250.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTl7VjK_b2fYDEkXuxTn3yHK8vLuT12VoLg&s",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/analytics.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/vault.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/expense.png"
        ]
    },
    {
        industry: "Manufacturing & Logistics",
        image: "https://img.freepik.com/premium-vector/engineer-operating-robotic-arm-while-assembling-mechanical-components-modern-workspace_771357-14234.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
        needs: "Supply chain automation, production tracking, inventory control.",
        solutions: "Optimize logistics, automate production tracking, and manage supply chains efficiently.",
        tools: ["Zoho Inventory", "Zoho Creator", "Zoho CRM", "Zoho Projects", "Zoho Analytics"],
        toolImages: [
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/inventory.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/creator.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/crm.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/projects.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/analytics.png"
        ]
    },
    {
        industry: "IT & Software Development",
        image: "https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
        needs: "Project collaboration, bug tracking, cloud applications.",
        solutions: "Enhance team collaboration, track software bugs, and manage cloud-based projects.",
        tools: ["Zoho Sprints", "Zoho Projects", "Zoho Desk", "Zoho Creator", "Zoho Cliq"],
        toolImages: [
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/sprints.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/projects.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/desk.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/creator.png",
            "https://www.zohowebstatic.com/sites/zweb/images/app-images/cliq.png"
        ]
    }
      
  ];

  const servicesContainer = document.getElementById("services-list");

  servicesData.forEach(service => {
      let card = document.createElement("div");
      card.classList.add("card");

      let toolsHTML = service.tools.map((tool, index) => 
          `<img src="${service.toolImages[index]}" title="${tool}" alt="${tool}">`
      ).join("");

      card.innerHTML = `
          <img src="${service.image}" alt="${service.industry}">
          <h2>${service.industry}</h2>
          <p><strong>Business Needs:</strong> ${service.needs}</p>
          <p><strong>Solutions:</strong> ${service.solutions}</p>
          <div class="tool-icons">${toolsHTML}</div>
          <div class="card-buttons">
              <button onclick="window.location.href='test.html'">Read More</button>
              <button onclick="window.location.href='contact.html'">Get Started</button>
          </div>
      `;

      servicesContainer.appendChild(card);
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
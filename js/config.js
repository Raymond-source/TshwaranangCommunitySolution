// config.js - Central configuration for Tshwaranang Community Solution

const siteConfig = {
  companyName: "Tshwaranang Community Solution",
  tagline: "DRIVE for Success",
  whatsappNumber: "27655634365",
  phoneNumber: "0655634365",
  email: "info@tsharanang.org.za",
  address: "13303 Extension 13, Soshanguve South, Pretoria, 0152",

  // Slideshow Images (update paths when images are available)
  slides: [
    {
      title: "Transforming Lives",
      subtitle: "HIV Prevention, Treatment & Care at Major Taxi Ranks",
      bg: "https://picsum.photos/id/104/1600/600",
    },
    {
      title: "1 Million HIV/TB Campaign",
      subtitle:
        "Reaching 1 Million People with HIV Prevention, Treatment & Care",
      bg: "https://picsum.photos/id/15/1600/600",
    },
    {
      title: "Health Hubs at Taxi Ranks",
      subtitle:
        "5 Major Locations: Marabastad, Bosman, Bloedmall, Mabopane, Donneboom",
      bg: "https://picsum.photos/id/116/1600/600",
    },
  ],

  // Core Values
  values: [
    {
      icon: "fas fa-hand-sparkles",
      title: "Dignity",
      description: "Treating everyone with respect and honor",
    },
    {
      icon: "fas fa-clock",
      title: "Reliable",
      description: "Consistent and trustworthy service",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Integrity",
      description: "Honest and ethical practices",
    },
    {
      icon: "fas fa-star",
      title: "Excellency",
      description: "Striving for the highest quality",
    },
  ],

  // Services List
  services: [
    "HTS (HIV Testing Services)",
    "HIV Prevention",
    "Treatment and Care",
    "Online NaTIS Booking",
    "Online Roadworthy Booking",
    "Climate Change Education",
    "Chronic Diagnosis and Treatment",
    "Family Planning",
    "Immunisation",
    "Home Visit",
    "M&E Training",
    "QI Training",
    "Basic Nursing Training",
    "Acute and Minor Alignment Treatment",
  ],

  // Team Members with PNG images and detailed bios for modal (ordered by position)
  team: [
    {
      name: "Mr Xolani Nkosi",
      role: "Secretary, Founder & Director",
      shortBio:
        "BA Psychology | PMTCT Specialist | Strategic Information Project Manager",
      fullBio: `
        <p><strong>Education:</strong> BA Psychology (1997-1999)</p>
        <p><strong>Experience:</strong></p>
        <ul>
          <li>Theuraptic Counselor - Implementation of PMTCT (2002-2006) at Amajuba District Department of Health KZN</li>
          <li>HIV in Workplace SMME Project Supervisor at The Aurum (2007-2010)</li>
          <li>Gene-Expert Research Assistant Supervisor at The Aurum (Helen Joseph) (2011-2012)</li>
          <li>Tier Implementer at Dr Kenneth Kaunda District Wits RHI (2013-2015)</li>
          <li>Daplap/CCMDD Data Coordinator at City of Johannesburg (2016-2017)</li>
          <li>Strategic Information Project Manager at Decanting City of Tshwane, later SI Project Manager Region Tshwane (2018-2024)</li>
          <li>Secretary, Founder and Director at Tshwaranang Community Solution (2025 - Present)</li>
        </ul>
      `,
      image: "images/team/xolani-nkosi.png",
      alt: "Mr Xolani Nkosi - Secretary, Founder & Director",
    },
    {
      name: "Phumi Phogole",
      role: "Chairperson & Co-founder",
      shortBio:
        "Professional Nurse | Founder & CEO Phomelelong Wellness Clinic",
      fullBio: `
        <p><strong>Professional Title:</strong> Professional Registered Nurse</p>
        <p><strong>Current Roles:</strong> Founder and CEO of Phomelelong Wellness Clinic, Founder and Director at Tshwaranang Community Solutions NPO</p>
        <p>Phumi Phogole is a Professional Registered Nurse at Phomelelong Wellness Clinic where she specializes in comprehensive Healthcare management for Community members including newborn babies. With over 15 years in Nursing, Phumi has built a reputation for her client-centric approach and a deep understanding of health and welfare.</p>
        <p><strong>Education:</strong></p>
        <ul>
          <li>Diploma in General Nursing Science (2012)</li>
          <li>Diploma in Midwifery (2019)</li>
          <li>Certified Nimart Nurse (2025)</li>
          <li>Certified Beauty and Aesthetician (2025)</li>
        </ul>
        <p><strong>Achievements:</strong> Throughout her career, she has successfully impacted countless clients and their families positively through their health issues and needs, ensuring they receive personalized health care. Her dedication to nursing clients back to life has earned her numerous accolades including "Best Nurse of the Year 2022" by Mediclinic Southern Africa Magazine.</p>
        <p><strong>Community Involvement:</strong> Outside of work, she is passionate about giving back to the community, which led her to co-found Tshwaranang Community Solutions NPO. This NPO strives to help underserved populations get access to healthcare, food security, and the ability to survive. She is also a Sunday school teacher at a local church to help kids off the streets.</p>
      `,
      image: "images/team/phumi-phogole.png",
      alt: "Phumi Phogole - Chairperson & Co-founder",
    },
    {
      name: "Amanda Kubeka",
      role: "Deputy Chairperson",
      shortBio: "Community Mobilization & Outreach Expert",
      fullBio: `
        <p><strong>Role:</strong> Deputy Chairperson</p>
        <p>Amanda Kubeka is a dedicated Community Mobilization & Outreach Expert with extensive experience in grassroots engagement. She specializes in building strong community connections and ensuring that health services reach the most underserved populations.</p>
        <p><strong>Expertise:</strong></p>
        <ul>
          <li>Community Outreach and Engagement</li>
          <li>Stakeholder Relationship Management</li>
          <li>Program Coordination and Implementation</li>
          <li>Health Education and Awareness Campaigns</li>
        </ul>
        <p>Amanda's passion for community development drives her work in ensuring that Tshwaranang Community Solution's services effectively reach taxi operators, street vendors, and commuters across Tshwane's major taxi ranks.</p>
      `,
      image: "images/team/amanda-kubeka.png",
      alt: "Amanda Kubeka - Deputy Chairperson",
    },
    {
      name: "Thato Dingilizwe",
      role: "Deputy Secretary",
      shortBio: "Professional Nurse",
      fullBio: `
        <p><strong>Role:</strong> Deputy Secretary</p>
        <p>Hold a Diploma in Nursing Science ( General, Psychiatry, Community) and Midwifery 2008.</p>
        <p><strong>Expertise:</strong></p>
        <ul>
          <li>18 years of experience in Nursing.</li>
          <li>Worked in both public and private health care.</li>
        </ul>
      `,
      image: "images/team/thato-dingilizwe.png",
      alt: "Thato Dingilizwe - Deputy Secretary",
    },
  ],
};

// WhatsApp URL
function getWhatsAppUrl() {
  const message =
    "Hello Tshwaranang Community Solution, I'd like more information about your services.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Initialize slideshow
function initSlideshow() {
  const container = document.getElementById("slideshowContainer");
  if (!container) return;

  container.innerHTML = siteConfig.slides
    .map(
      (slide) => `
        <div class="swiper-slide" style="background-image: url('${slide.bg}')">
            <div class="slide-overlay">
                <h2>${slide.title}</h2>
                <p>${slide.subtitle}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

// Render values
function renderValues(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = siteConfig.values
    .map(
      (value) => `
        <div class="value-card">
            <i class="${value.icon}"></i>
            <h3>${value.title}</h3>
            <p>${value.description}</p>
        </div>
    `,
    )
    .join("");
}

// Render services
function renderServices(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = siteConfig.services
    .map(
      (service) => `
        <div class="service-card">
            <div class="service-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>${service}</h3>
            <p>Professional, stigma-free service delivery.</p>
        </div>
    `,
    )
    .join("");
}

// Render team with actual images, short bio, and modal trigger button
function renderTeam(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = siteConfig.team
    .map(
      (member, index) => `
        <div class="team-member" data-member-index="${index}">
            <div class="member-img">
                <img src="${member.image}" alt="${member.alt}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\\'fas fa-user-circle\\' style=\\'font-size: 5rem; color: var(--primary);\\'></i>';">
            </div>
            <div class="member-info">
                <h4>${member.name}</h4>
                <p class="role">${member.role}</p>
                <div class="short-bio">${member.shortBio}</div>
                <button class="btn-view-bio" data-member="${index}">
                    <i class="fas fa-info-circle"></i> View Full Bio
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}

// config.js - Central configuration for Tshwaranang Community Solution

const siteConfig = {
  companyName: "Tshwaranang Community Solution",
  tagline: "DRIVE for Success",
  whatsappNumber: "27655634365",
  phoneNumber: "0655634365",
  email: "info@tsharanang.org.za",
  address: "13303 Extension 13, Soshanguve South, Pretoria, 0152",

  // Registration Details
  registration: {
    npoNumber: "333-527-NPO",
    npcNumber: "2026/121811/08",
    pboNumber: "930088793",
    cdsNumber: "MAAA1697303",
    taxNumber: "9248008287",
    section22B: "Active",
  },

  // Slideshow Images (update paths when images are available)
  slides: [
    {
      title: "Transforming Lives",
      subtitle: "HIV Prevention, Treatment & Care at Major Taxi Ranks",
      bg: "images/slideshow/slide1.jpg",
      fallbackBg: "https://picsum.photos/id/104/1600/600",
    },
    {
      title: "1 Million HIV/TB Campaign",
      subtitle:
        "Reaching 1 Million People with HIV Prevention, Treatment & Care",
      bg: "images/slideshow/slide2.jpg",
      fallbackBg: "https://picsum.photos/id/15/1600/600",
    },
    {
      title: "Health Hubs at Taxi Ranks",
      subtitle:
        "5 Major Locations: Marabastad, Bosman, Bloedmall, Mabopane, Donneboom",
      bg: "images/slideshow/slide3.jpg",
      fallbackBg: "https://picsum.photos/id/116/1600/600",
    },
    {
      title: "Climate Action Initiative",
      subtitle: "Greening taxi ranks for a healthier environment",
      bg: "images/slideshow/slide4.jpg",
      fallbackBg: "https://picsum.photos/id/29/1600/600",
    },
  ],

  // Strategic Partners Data
  partners: [
    {
      name: "DEKRA",
      logo: "images/partners/DEKRA.png",
      description: "Online Roadworthy Booking Partner",
      website: "https://www.dekra.co.za",
    },
    {
      name: "Department of Transport",
      logo: "images/partners/Department of Transport.png",
      description: "Strategic Alliance",
      website: "https://www.transport.gov.za",
    },
    {
      name: "DTI",
      logo: "images/partners/DTI.png",
      description: "Strategic Business Support",
      website: "https://www.dti.gov.za",
    },
    {
      name: "RTMC",
      logo: "images/partners/rtmc-logo.png",
      description: "Road Traffic Management Corporation",
      website: "https://www.rtmc.co.za",
    },
    {
      name: "SANTACO",
      logo: "images/partners/SANTACO.png",
      description: "Gauteng PEC Partnership",
      website: "https://www.santaco.co.za",
    },
    {
      name: "Wits RHI",
      logo: "images/partners/Wits RHI.png",
      description: "Gophelega Project Collaboration",
      website: "https://www.witsrhi.co.za",
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
    {
      icon: "fas fa-heart",
      title: "Compassion",
      description:
        "We serve with empathy and genuine care for every individual",
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainability",
      description: "Creating lasting solutions for community well-being",
    },
  ],

  // Services List with detailed descriptions
  services: [
    {
      name: "HIV Testing Services (HTS)",
      description:
        "Confidential and stigma-free HIV testing with immediate results",
      icon: "fas fa-heartbeat",
    },
    {
      name: "HIV Prevention",
      description:
        "Comprehensive prevention services including PrEP and condom distribution",
      icon: "fas fa-hand-holding-heart",
    },
    {
      name: "Treatment and Care",
      description:
        "ART initiation, adherence support, and ongoing medical care",
      icon: "fas fa-stethoscope",
    },
    {
      name: "Online NaTIS Booking",
      description: "Convenient online booking for NaTIS services",
      icon: "fas fa-car",
    },
    {
      name: "Online Roadworthy Booking",
      description: "Quick and easy roadworthy test bookings",
      icon: "fas fa-clipboard-list",
    },
    {
      name: "Climate Change Education",
      description:
        "Workshops and training on climate action and environmental sustainability",
      icon: "fas fa-leaf",
    },
    {
      name: "Chronic Diagnosis & Treatment",
      description:
        "Management of chronic conditions including hypertension and diabetes",
      icon: "fas fa-chart-line",
    },
    {
      name: "Family Planning",
      description: "Comprehensive family planning services and counseling",
      icon: "fas fa-female",
    },
    {
      name: "Immunisation",
      description: "Vaccination services for children and adults",
      icon: "fas fa-syringe",
    },
    {
      name: "Home Visit",
      description: "Outreach services for homebound community members",
      icon: "fas fa-home",
    },
    {
      name: "M&E Training",
      description: "Monitoring and Evaluation training for healthcare workers",
      icon: "fas fa-chalkboard-teacher",
    },
    {
      name: "QI Training",
      description: "Quality Improvement training for better service delivery",
      icon: "fas fa-chart-bar",
    },
    {
      name: "Basic Nursing Training",
      description: "Foundational nursing skills development",
      icon: "fas fa-user-md",
    },
    {
      name: "Acute & Minor Alignment",
      description: "Treatment for acute conditions and minor injuries",
      icon: "fas fa-briefcase-medical",
    },
  ],

  // Team Members with PNG images and detailed bios
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
          <li>Therapeutic Counselor - Implementation of PMTCT (2002-2006) at Amajuba District Department of Health KZN</li>
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
      order: 1,
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
      order: 2,
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
      order: 3,
    },
    {
      name: "Thato Dingilizwe",
      role: "Deputy Secretary",
      shortBio: "Professional Nurse with 18 years experience",
      fullBio: `
        <p><strong>Role:</strong> Deputy Secretary</p>
        <p>Hold a Diploma in Nursing Science (General, Psychiatry, Community) and Midwifery 2008.</p>
        <p><strong>Expertise:</strong></p>
        <ul>
          <li>18 years of experience in Nursing</li>
          <li>Worked in both public and private healthcare sectors</li>
          <li>Specialized in community health and patient care</li>
        </ul>
      `,
      image: "images/team/thato-dingilizwe.png",
      alt: "Thato Dingilizwe - Deputy Secretary",
      order: 4,
    },
    {
      name: "Nail Makgalatiba",
      role: "Deputy Treasury",
      shortBio: "Financial Management Specialist",
      fullBio: `
        <p><strong>Role:</strong> Deputy Treasury</p>
        <p><strong>Qualifications:</strong> Financial Management and Accounting</p>
        <p><strong>Expertise:</strong></p>
        <ul>
          <li>Financial Planning and Analysis</li>
          <li>Budget Management</li>
          <li>NPO Financial Compliance</li>
          <li>Grant Management and Reporting</li>
        </ul>
      `,
      image: "images/team/nail-makgalatiba.png",
      alt: "Nail Makgalatiba - Deputy Treasury",
      order: 5,
    },
  ],

  // Health Hub Locations
  healthHubs: [
    {
      name: "Marabastad Taxi Rank",
      address: "Marabastad, Pretoria",
      status: "Active",
    },
    {
      name: "Bosman Taxi Rank",
      address: "Bosman Street, Pretoria CBD",
      status: "Active",
    },
    {
      name: "Bloedmall Taxi Rank",
      address: "Bloed Street, Pretoria",
      status: "Active",
    },
    {
      name: "Mabopane Interchange",
      address: "Mabopane, Pretoria",
      status: "Active",
    },
    {
      name: "Donneboom Taxi Rank",
      address: "Donneboom, Pretoria",
      status: "Active",
    },
  ],

  // Campaign Statistics
  stats: [
    {
      icon: "fas fa-users",
      number: 15000,
      label: "Taxi Operators in Tshwane",
    },
    {
      icon: "fas fa-bus",
      number: 121000,
      label: "Daily Commuters",
    },
    {
      icon: "fas fa-heartbeat",
      number: 1000000,
      label: "Health Campaigns",
      suffix: "+",
    },
    {
      icon: "fas fa-hospital-user",
      number: 5,
      label: "Major Taxi Ranks",
    },
  ],
};

// WhatsApp URL
function getWhatsAppUrl() {
  const message =
    "Hello Tshwaranang Community Solution, I'd like more information about your services and how I can get involved.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Render Partners with enhanced styling and error handling
function renderPartners(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = siteConfig.partners
    .map(
      (partner) => `
        <div class="swiper-slide partner-slide">
          <div class="partner-card-slide">
            <div class="partner-logo">
              <img 
                src="${partner.logo}" 
                alt="${partner.name}" 
                onerror="this.src='https://placehold.co/200x150/1a7b4a/white?text=${encodeURIComponent(partner.name)}'"
              >
            </div>
            <div class="partner-info">
              <h3>${partner.name}</h3>
              <p>${partner.description}</p>
              ${partner.website ? `<a href="${partner.website}" target="_blank" rel="noopener noreferrer" class="partner-link">Visit Website <i class="fas fa-external-link-alt"></i></a>` : ""}
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

// Initialize slideshow with fallback images
function initSlideshow() {
  const container = document.getElementById("slideshowContainer");
  if (!container) return;

  container.innerHTML = siteConfig.slides
    .map(
      (slide) => `
        <div class="swiper-slide" style="background-image: url('${slide.bg}'), url('${slide.fallbackBg}')">
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

// Render services with icons
function renderServices(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = siteConfig.services
    .map(
      (service) => `
        <div class="service-card">
          <div class="service-icon">
            <i class="${service.icon}"></i>
          </div>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
        </div>
      `,
    )
    .join("");
}

// Render team with actual images, short bio, and modal trigger button
function renderTeam(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Sort team by order
  const sortedTeam = [...siteConfig.team].sort((a, b) => a.order - b.order);

  container.innerHTML = sortedTeam
    .map(
      (member, index) => `
        <div class="team-member" data-member-index="${index}">
          <div class="member-img">
            <img 
              src="${member.image}" 
              alt="${member.alt}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='https://placehold.co/400x300/1a7b4a/white?text=${encodeURIComponent(member.name)}'"
            >
          </div>
          <div class="member-info">
            <h4>${member.name}</h4>
            <p class="role">${member.role}</p>
            ${member.shortBio ? `<div class="short-bio">${member.shortBio}</div>` : ""}
            <button class="btn-view-bio" data-member="${index}">
              <i class="fas fa-info-circle"></i> View Full Bio
            </button>
          </div>
        </div>
      `,
    )
    .join("");
}

// Render health hub locations
function renderHealthHubs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = siteConfig.healthHubs
    .map(
      (hub) => `
        <div class="location-card">
          <i class="fas fa-map-marker-alt"></i>
          <h3>${hub.name}</h3>
          <p>${hub.address}</p>
          <span class="hub-status ${hub.status.toLowerCase()}">${hub.status}</span>
        </div>
      `,
    )
    .join("");
}

// Render stats with animation support
function renderStats(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = siteConfig.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <i class="${stat.icon}"></i>
          <h3><span class="stat-number" data-target="${stat.number}">0</span>${stat.suffix || ""}</h3>
          <p>${stat.label}</p>
        </div>
      `,
    )
    .join("");
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    siteConfig,
    getWhatsAppUrl,
    renderPartners,
    initSlideshow,
    renderValues,
    renderServices,
    renderTeam,
    renderHealthHubs,
    renderStats,
  };
}

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist", "services");
const siteUrl = "https://julioolivodeveloper.github.io/pavers-crete-llc";

const services = [
  {
    slug: "paver-patios",
    icon: "blocks",
    title: "Paver Patios",
    description: "Paver patio installation for new outdoor areas and patio extensions, with options for patterns, borders, edges, and transitions.",
    heroImage: "hero-pergola.jpg",
    heroAlt: "Paver patio and outdoor living area with pergola and stonework",
    lead: "Planning a new patio or looking to extend an existing paved area? We can talk through the layout, pattern, borders, and how the patio will connect to your home and yard.",
    overviewTitle: "Start with how you want to use the patio.",
    overview: "Think about where people will walk, where you want seating, and how the patio will meet the house, steps, and yard. We review the footprint and edges, then discuss paver patterns, border options, base preparation, grade, and water flow before installation. The final scope and material choices depend on the site.",
    bullets: ["New patio installations and additions to existing paving", "Patterns, colors, borders, and edge details", "Base preparation, grade, and drainage considerations", "Cuts around steps, walls, and existing features"],
    detailImage: "project-patio-wide.jpg",
    detailAlt: "Wide paver patio with a stone border and outdoor seating wall",
    proofPoints: ["Paver pattern and border choices", "Base and water flow considered", "Edges and transitions finished"],
    methodIntro: "A patio project starts by sorting out the layout, then preparing the area and completing the surface details.",
    methodSteps: [
      { title: "Set the layout", body: "Discuss the patio size, how you plan to use it, and where it will meet the house, steps, lawn, or existing paving." },
      { title: "Prepare the area", body: "Review access, grade, and water flow, then prepare the base for the agreed paver layout." },
      { title: "Install and finish", body: "Lay the pavers, complete the planned cuts and borders, finish the joints, and review the patio with you." },
    ],
    relatedCopy: "A patio can connect with steps, a pool deck, or a retaining wall. Browse related work if those areas are part of your plan.",
    planningTitle: "Make room for the way you spend time outside.",
    planningCopy: "Before choosing a pattern, think about how people will move through the space and what should fit there. Those everyday details help shape the footprint, the edges, and the connection to the rest of the yard.",
    planningItems: [
      { title: "How you will use it", body: "Plan for dining, seating, a grill, or a clear route through the yard, then allow those uses to guide the patio size." },
      { title: "Where the edges meet", body: "Consider the transition at the house, lawn, steps, existing concrete, and any nearby walls or planting beds." },
      { title: "The site underfoot", body: "Access, existing grade, and water movement can affect preparation and layout. These are worth reviewing before materials are selected." },
    ],
    faqs: [
      { question: "What affects the scope of a paver patio?", answer: "The patio dimensions, existing surface, access, base preparation, paver choice, borders, steps, and transitions all matter. The site needs to be reviewed before the work can be scoped accurately." },
      { question: "Can a new patio connect to an existing paved area?", answer: "Often the two areas can be planned together. The height, condition, pattern, and edge of the existing surface will help determine how the connection should be handled." },
      { question: "Can I choose a pattern and border?", answer: "Yes. Pattern, color, and border options can be discussed for the project. The final choices depend on the available materials and how the patio meets nearby surfaces." },
    ],
  },
  {
    slug: "pool-decks",
    icon: "waves",
    title: "Pool Decks",
    description: "Paver pool decks and pool surrounds, planned around the coping, access points, surrounding yard, and surface drainage.",
    heroImage: "hero-pool.jpg",
    heroAlt: "Swimming pool bordered by a finished paver deck",
    lead: "A pool deck connects the pool area to the house and yard. We install paver pool decks and can talk through the coping, walking space, access, and transitions around your pool.",
    overviewTitle: "Plan the deck around the pool edge.",
    overview: "Pool shape, existing coping, doors, and yard access all affect the layout. We discuss how much deck space you need, where paths should run, which edges need attention, and how water moves across the area. Paver patterns and material choices depend on the project and the surrounding surfaces.",
    bullets: ["Paver pool decks and pool surrounds", "Coping, steps, and transitions at the pool edge", "Walking areas and access points around the pool", "Borders, cuts, and surface drainage considerations"],
    detailImage: "project-pool-brick.jpg",
    detailAlt: "Pool deck with a brick paver surround and curved layout",
    proofPoints: ["Pool edge and coping reviewed", "Access and walking space planned", "Deck and yard transitions considered"],
    methodIntro: "The pool edge sets many of the decisions for a deck. The layout, access, and surrounding yard are reviewed together.",
    methodSteps: [
      { title: "Review the pool area", body: "Discuss the pool shape, existing coping, access from the house, and how much paved space you want around the water." },
      { title: "Plan edges and flow", body: "Consider the paver layout, steps, transitions, and how water will move across the deck and adjoining yard." },
      { title: "Install the deck", body: "Set the agreed pavers and edge details, finish the connections around the pool, and review the completed area." },
    ],
    relatedCopy: "Pool projects may also involve a patio, walkway, steps, or retaining wall. Explore another service if your plans include those areas.",
    planningTitle: "Start at the pool edge, then work outward.",
    planningCopy: "A pool deck has several transitions to coordinate: the pool edge, the route from the house, and the boundary where paving meets the yard. Looking at them together makes it easier to plan comfortable walking space and a layout that fits the property.",
    planningItems: [
      { title: "Coping and pool shape", body: "The pool outline and the condition of the existing edge influence the cuts, borders, and connection around the water." },
      { title: "Room to move", body: "Think about gates, doors, loungers, and the paths people use to get around the pool before settling on the deck footprint." },
      { title: "Water and transitions", body: "The surrounding grade, drainage, steps, and edges at the lawn or house should be reviewed as part of the layout." },
    ],
    faqs: [
      { question: "Can pavers be installed around an existing pool?", answer: "An existing pool can be reviewed for a paver deck. The coping, current surface, elevations, access, and condition of the area help determine what preparation and transitions are needed." },
      { question: "How much space should the deck leave around the pool?", answer: "That depends on how the pool area is used, the space available, and the placement of doors, furniture, and paths. Discussing those uses during the site review helps set a practical layout." },
      { question: "Can the deck connect to a patio or walkway?", answer: "Yes, connected surfaces can be planned together. Their elevations, edges, materials, and water flow should be considered so the transitions fit the site." },
    ],
  },
  {
    slug: "walkways-steps",
    icon: "route",
    title: "Walkways and Steps",
    description: "Paver walkways, entry paths, steps, and landings planned for the route, grade, and nearby outdoor surfaces.",
    heroImage: "project-sidewalk.jpg",
    heroAlt: "Side-yard walkway installed with pavers and a contrasting border",
    lead: "Need a path to the front entry, through a side yard, or between outdoor areas? We install paver walkways, steps, and landings planned for the space.",
    overviewTitle: "Plan the route before choosing the pattern.",
    overview: "The path should connect the places you need to reach and fit the slope and access of the yard. We can discuss its route, curves, landings, step locations, borders, and how it meets nearby patios or concrete. Lighting-ready details can also be considered when they are part of the plan.",
    bullets: ["Front entries, side yards, and garden paths", "Steps, landings, and changes in grade", "Curves, borders, and paver patterns", "Connections to patios, driveways, and existing surfaces"],
    detailImage: "project-lit-steps.jpg",
    detailAlt: "Paver steps with integrated warm lighting at night",
    proofPoints: ["Route and access planned", "Steps and grade changes reviewed", "Borders and transitions coordinated"],
    methodIntro: "For a path or set of steps, the route and elevation changes are worked out before the pavers are laid.",
    methodSteps: [
      { title: "Choose the route", body: "Identify where the path starts and ends, how people will use it, and where it meets doors or other paved areas." },
      { title: "Review grade changes", body: "Plan curves, steps, landings, and borders around the slope and available space." },
      { title: "Lay the path", body: "Install the pavers and planned transitions, finish the edges and joints, and review the route with you." },
    ],
    relatedCopy: "Walkways often connect a patio, pool deck, or retaining wall. Browse those services if your project covers more than the path.",
    planningTitle: "A good path begins with where it needs to go.",
    planningCopy: "An entry path, side-yard walkway, or set of garden steps should suit the route people actually take. The turns, slope, landing areas, and connections to doors and paved spaces all help determine the final layout.",
    planningItems: [
      { title: "Route and width", body: "Identify the start and destination, how the path will be used, and where it needs to pass existing trees, beds, or utilities." },
      { title: "Slope and steps", body: "Changes in elevation, landings, and the available run affect how a walkway or stair connection can be laid out." },
      { title: "Finishing the connections", body: "Borders and transitions at a driveway, patio, porch, or lawn help the route feel connected to the property." },
    ],
    faqs: [
      { question: "Can a walkway be built on a sloped yard?", answer: "A sloped site can be reviewed to see how the route, grade, steps, and landings should work together. The possible layout depends on the space and the amount of elevation change." },
      { question: "Can steps and a walkway be part of the same project?", answer: "Yes. They can be planned as one continuous route, including where steps begin, where a landing may help, and how the path meets the home or another paved area." },
      { question: "Can a new walkway match my patio?", answer: "The team can discuss paver colors, patterns, and borders that coordinate with an existing patio. Matching depends on the original material and what is currently available." },
    ],
  },
  {
    slug: "retaining-walls",
    icon: "landmark",
    title: "Retaining Walls",
    description: "Stone retaining walls, seat walls, columns, and borders coordinated with the site grade and nearby paving.",
    heroImage: "project-retaining-wall.jpg",
    heroAlt: "Stone retaining wall built beside a paver patio",
    lead: "We install retaining walls, seat walls, columns, and low borders. Tell us what needs to change in the yard and we can discuss how the wall connects to nearby paving.",
    overviewTitle: "Start with the grade and wall location.",
    overview: "The slope, wall height, boundaries, and nearby patios or walkways all affect the plan. We review the area and discuss the wall's placement, finish, and connections to existing surfaces. The layout and scope depend on site conditions, so discuss them with the team before work begins.",
    bullets: ["Retaining walls alongside patios and walkways", "Seat walls, columns, and low borders", "Wall placement in relation to the site grade", "Caps, edges, and connections to nearby paving"],
    detailImage: "project-column.jpg",
    detailAlt: "Stone column and wall detail in a finished outdoor living space",
    proofPoints: ["Wall position and grade reviewed", "Nearby hardscape considered", "Caps and edges coordinated"],
    methodIntro: "Wall projects are planned around where the grade changes and what the wall needs to connect to.",
    methodSteps: [
      { title: "Review the site", body: "Discuss the slope, wall location, intended use, and nearby patios, paths, or landscape features." },
      { title: "Coordinate the design", body: "Consider wall height, material, cap, ends, and how the wall will meet the surrounding surfaces." },
      { title: "Build and finish", body: "Install the agreed wall and finishing details, tidy the work area, and review the completed work with you." },
    ],
    relatedCopy: "Retaining walls can be part of a patio, walkway, or step project. Explore those pages if the grade change involves other outdoor work.",
    planningTitle: "Understand the change in grade before choosing the finish.",
    planningCopy: "A retaining wall affects more than the line where the yard changes height. Its location, ends, cap, nearby paving, and how water moves around the area all deserve attention while the scope is being discussed.",
    planningItems: [
      { title: "Height and placement", body: "The slope, boundaries, and purpose of the wall help define where it belongs and how it relates to the usable yard." },
      { title: "What the wall connects to", body: "Patios, paths, steps, fences, and planting areas can affect the wall's ends, cap, and finished appearance." },
      { title: "Site conditions", body: "Access, grade, and water movement should be reviewed before materials and scope are finalized. Requirements can vary by property and wall." },
    ],
    faqs: [
      { question: "Can a retaining wall create a more usable level area?", answer: "A wall may help define a change in grade and the space around it. Whether that is practical depends on the slope, available room, drainage, and the intended wall scope." },
      { question: "Can the wall include a cap, columns, or a seat wall?", answer: "Those details can be discussed as part of the design. The layout and material need to suit the wall, nearby paving, and how the area will be used." },
      { question: "What should be reviewed before building a wall?", answer: "The wall location, height, site access, surrounding grade, water movement, and nearby structures should be reviewed. Any project-specific requirements should be confirmed for the property before work begins." },
    ],
  },
  {
    slug: "concrete-installation",
    icon: "square-stack",
    title: "Concrete Installation",
    description: "Concrete patios, slabs, pool surrounds, and flatwork, with the surface use, edges, joints, and finish discussed up front.",
    heroImage: "project-stone-patio.jpg",
    heroAlt: "Finished outdoor patio and hardscape surface beside the water",
    lead: "Need a concrete patio, slab, pool surround, or another flat surface? We can discuss how the area will be used and which finish and edges fit the job.",
    overviewTitle: "Decide what the surface needs to do.",
    overview: "The size and use of the area help determine the concrete work. Before installation, discuss the finish, edges, joints, and how the new surface will meet a house, pool, steps, or existing paving. Broom and stamped finishes are options to discuss for the site and scope.",
    bullets: ["Concrete patios, slabs, and pool surrounds", "Broom and stamped finish options", "Edges, joints, and connections to existing work", "Coordination with nearby pavers and steps"],
    detailImage: "project-stairs.jpg",
    detailAlt: "Finished exterior steps and hardscape transition",
    proofPoints: ["Use and finish discussed", "Edges and joints planned", "Existing features considered"],
    methodIntro: "Concrete work begins with the intended use and the way the surface connects to the rest of the property.",
    methodSteps: [
      { title: "Define the area", body: "Discuss dimensions, intended use, access, and where the concrete will meet buildings or other surfaces." },
      { title: "Select the finish", body: "Review available finishes, edges, joints, and transitions for the project scope and site." },
      { title: "Place and review", body: "Complete the agreed concrete work, attend to the planned edges and connections, and review the area with you." },
    ],
    relatedCopy: "Concrete can meet pavers, steps, a pool deck, or a patio. Browse related services if your plan includes more than one surface.",
    planningTitle: "Choose the surface for what it needs to handle.",
    planningCopy: "A concrete patio, pool surround, or slab starts with its intended use and the surfaces around it. Dimensions, access, finish, edges, and joints are easier to discuss together than as last-minute details.",
    planningItems: [
      { title: "Use and dimensions", body: "Decide what the area will support and where it should begin and end. Those details help establish the footprint and access needs." },
      { title: "Finish and appearance", body: "Broom and stamped finishes are options to ask about. The suitable finish depends on the project, available choices, and surrounding surfaces." },
      { title: "Joints and transitions", body: "Edges and joints, plus connections to a house, pool, pavers, or steps, should be part of the initial scope discussion." },
    ],
    faqs: [
      { question: "What information helps plan a concrete estimate?", answer: "Share the approximate dimensions, intended use, access to the work area, preferred finish, and what the new surface will connect to. A site review helps confirm the details." },
      { question: "What is the difference between broom and stamped finishes?", answer: "A broom finish has a textured appearance, while a stamped finish creates a pattern in the concrete. Ask which finish options fit the project and what is available for the site." },
      { question: "Can concrete meet an existing paver area?", answer: "The two surfaces can be considered together. Their heights, edges, drainage, and the condition of the existing paving affect how the transition should be planned." },
    ],
  },
  {
    slug: "finishing-details",
    icon: "sparkles",
    title: "Finishing Details",
    description: "Paver borders, cuts, joints, steps, and transitions, plus cleanup and coordination of finishing details.",
    heroImage: "project-lit-steps.jpg",
    heroAlt: "Illuminated stone steps showing careful paver finishing details",
    lead: "We handle borders, joints, edges, and transitions as part of the overall paver or concrete project. Tell us which details you want to include.",
    overviewTitle: "Talk through the edges and connections.",
    overview: "The finish includes more than the main paving pattern. Edges, cuts around steps or walls, joints, changes in elevation, and connections between materials all need to be considered. Lighting-ready layouts or sealing coordination can also be discussed when they are relevant to the project.",
    bullets: ["Paver borders, cuts, and edge restraint", "Joints and transitions between materials", "Connections around steps and walls", "Cleanup and discussion of sealing options"],
    detailImage: "project-night-path.jpg",
    detailAlt: "Curved paver walkway with warm lighting along the edge",
    proofPoints: ["Borders and edges reviewed", "Joints and transitions checked", "Cleanup and sealing discussed"],
    methodIntro: "Finishing details are reviewed in relation to the larger surface, so edges and transitions are part of the plan.",
    methodSteps: [
      { title: "Identify the details", body: "Look at borders, cuts, joints, edges, steps, and places where the surface meets another material." },
      { title: "Coordinate the finish", body: "Discuss how each edge and transition should look, along with any lighting-ready or sealing details in scope." },
      { title: "Complete the closeout", body: "Finish the agreed details, clean the work area, and review the completed surfaces with you." },
    ],
    relatedCopy: "Finishing details are part of patio, pool deck, walkway, wall, and concrete projects. Browse a specific service for more information.",
    planningTitle: "The edges are part of the design, not an afterthought.",
    planningCopy: "Borders, cuts, joints, and transitions shape how a finished hardscape reads. Reviewing these details alongside the main surface helps keep the pattern and connections consistent across the project.",
    planningItems: [
      { title: "Borders and edges", body: "A border can define the paved area or create a visual frame. Its material and layout should suit the field pattern and edge conditions." },
      { title: "Cuts and transitions", body: "Steps, walls, drains, and adjoining surfaces can require careful cuts and changes in material or elevation." },
      { title: "Final coordination", body: "Joint finish, cleanup, and any discussion of sealing can be included in the project conversation, depending on the agreed scope." },
    ],
    faqs: [
      { question: "Can I add a contrasting paver border?", answer: "A contrasting border may be an option. The layout depends on the shape of the surface, the field pattern, available materials, and the edges it needs to meet." },
      { question: "Are finishing details part of a larger patio or walkway project?", answer: "They can be planned as part of the overall scope. Discuss edges, cuts, joints, and transitions before work begins so they are accounted for in the project." },
      { question: "Do you include sealing?", answer: "Sealing needs and options vary by surface and material. Ask the team whether it is suitable and available for the specific project; it should not be assumed as part of every installation." },
    ],
  },
];

const googleReviews = [
  { name: "P.E. Gates", summary: "The reviewer praised the team's punctuality and attention to detail on entrance pavers and a patio extension." },
  { name: "James Lambert", summary: "Two larger projects were completed on the estimated schedule and budget, with no surprises." },
  { name: "Mike Duskus", summary: "The reviewer appreciated the setup and cleanup on a paver patio by the pond." },
  { name: "John Livingston", summary: "The project finished ahead of schedule, and the reviewer was happy with the clean work and final result." },
  { name: "Kathy Spinozzi", summary: "The reviewer praised the workmanship and follow-through, and said they would consider the team for future work." },
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function renderServicePage(service, index) {
  const related = [services[(index + 1) % services.length], services[(index + 2) % services.length]];
  const title = escapeHtml(service.title);
  const description = escapeHtml(service.description);
  const pageUrl = `${siteUrl}/services/${service.slug}.html`;
  const imageUrl = `${siteUrl}/assets/${service.heroImage}`;
  const imageAlt = escapeHtml(service.heroAlt);
  const bullets = service.bullets.map((item) => `<li><i data-lucide="check" aria-hidden="true"></i><span>${escapeHtml(item)}</span></li>`).join("\n            ");
  const proofPoints = service.proofPoints.map((item) => `<span><i data-lucide="check" aria-hidden="true"></i>${escapeHtml(item)}</span>`).join("\n          ");
  const methodSteps = service.methodSteps.map((step, stepIndex) => `<article class="service-method-step reveal"><span>${String(stepIndex + 1).padStart(2, "0")}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.body)}</p></article>`).join("\n            ");
  const planningItems = service.planningItems.map((item, itemIndex) => `<article class="service-planning-item reveal"><span>${String(itemIndex + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div></article>`).join("\n            ");
  const faqs = service.faqs.map((faq) => `<details class="service-faq-item"><summary><span>${escapeHtml(faq.question)}</span><i data-lucide="plus" aria-hidden="true"></i></summary><p>${escapeHtml(faq.answer)}</p></details>`).join("\n            ");
  const reviewCards = googleReviews.map((review) => `<article class="review-card reveal" data-review-slide><div class="stars" aria-label="5 star review">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>${escapeHtml(review.summary)}</p><footer>${escapeHtml(review.name)} <span>Google review summary</span></footer></article>`).join("\n            ");
  const serviceMenuLinks = services.map((item) => `
          <a href="./${item.slug}.html"${item.slug === service.slug ? ' aria-current="page"' : ""}><i class="nav-icon" data-lucide="${item.icon}" aria-hidden="true"></i><span>${escapeHtml(item.title)}</span></a>`).join("");
  const relatedLinks = related.map((item) => `
            <a class="service-related-link" href="./${item.slug}.html">
              <span>${escapeHtml(item.title)}</span><i data-lucide="arrow-up-right" aria-hidden="true"></i>
            </a>`).join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${description}" />
    <title>${title} | Pavers' Crete LLC</title>
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Pavers' Crete LLC" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:title" content="${title} | Pavers' Crete LLC" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:secure_url" content="${imageUrl}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="${imageAlt}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title} | Pavers' Crete LLC" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:image:alt" content="${imageAlt}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&amp;family=Manrope:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
    <link rel="icon" href="../assets/logo.jpg" />
    <link rel="stylesheet" href="../styles.css?v=24" />
  </head>
  <body class="service-detail-page">
    <header class="site-header" data-header>
      <a class="brand" href="../index.html#home" aria-label="Pavers' Crete LLC home">
        <img class="brand-mark" src="../assets/logo.jpg" alt="" aria-hidden="true" />
        <span><strong>Pavers' Crete LLC</strong><small>Paving Stones and Concrete Installation</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-nav-toggle><i data-lucide="menu"></i></button>
      <nav class="main-nav" data-nav aria-label="Main navigation">
        <a href="../index.html#about"><i class="nav-icon" data-lucide="info" aria-hidden="true"></i><span>About</span></a>
        <a class="nav-services-link" href="../index.html#services"><i class="nav-icon" data-lucide="blocks" aria-hidden="true"></i><span>Services</span></a>
        <button class="nav-services-toggle" type="button" aria-expanded="false" aria-controls="mobile-service-menu" data-services-toggle>
          <i class="nav-icon" data-lucide="blocks" aria-hidden="true"></i><span>Services</span><i class="nav-chevron" data-lucide="chevron-down" aria-hidden="true"></i>
        </button>
        <div class="nav-service-submenu" id="mobile-service-menu" data-services-menu hidden>${serviceMenuLinks}
        </div>
        <a href="../index.html#process"><i class="nav-icon" data-lucide="list-checks" aria-hidden="true"></i><span>Process</span></a>
        <a href="../portfolio.html#projects"><i class="nav-icon" data-lucide="images" aria-hidden="true"></i><span>Work</span></a>
        <a href="#reviews"><i class="nav-icon" data-lucide="star" aria-hidden="true"></i><span>Reviews</span></a>
        <button class="nav-cta contact-trigger" type="button"><i class="nav-icon" data-lucide="message-circle" aria-hidden="true"></i><span>Contact</span></button>
      </nav>
    </header>

    <main>
      <section class="service-page-hero" style="--service-page-image: url('../assets/${service.heroImage}')" aria-label="${title}">
        <div class="service-page-hero-inner section-shell">
          <p class="service-page-kicker reveal">Pavers' Crete LLC Services</p>
          <h1 class="service-page-title reveal">${title}</h1>
          <p class="service-page-lead reveal">${escapeHtml(service.lead)}</p>
          <div class="service-page-actions reveal">
            <button class="primary-btn contact-trigger" type="button"><i data-lucide="message-circle"></i>Discuss Your Project</button>
            <a class="secondary-btn" href="../index.html#services"><i data-lucide="arrow-left"></i>All Services</a>
          </div>
          <nav class="service-breadcrumb" aria-label="Breadcrumb">
            <a href="../index.html">Home</a><span aria-hidden="true">/</span>
            <a href="../index.html#services">Services</a><span aria-hidden="true">/</span>
            <span aria-current="page">${title}</span>
          </nav>
        </div>
      </section>

      <div class="service-proof-strip">
        <div class="section-shell service-proof-list">
          ${proofPoints}
        </div>
      </div>

      <section class="service-overview section-shell">
        <div class="service-overview-copy">
          <p class="section-kicker reveal">${title}</p>
          <h2 class="section-title reveal">${escapeHtml(service.overviewTitle)}</h2>
          <p class="section-copy reveal">${escapeHtml(service.overview)}</p>
          <ul class="service-feature-list">${bullets}</ul>
          <button class="text-link contact-trigger reveal" type="button">Talk through your project<i data-lucide="arrow-up-right" aria-hidden="true"></i></button>
        </div>
        <figure class="service-overview-image reveal">
          <img src="../assets/${service.detailImage}" alt="${escapeHtml(service.detailAlt)}" loading="lazy" />
        </figure>
      </section>

      <section class="service-planning">
        <div class="section-shell service-planning-layout">
          <div class="service-planning-intro">
            <p class="section-kicker reveal">A Few Things to Think Through</p>
            <h2 class="section-title reveal">${escapeHtml(service.planningTitle)}</h2>
            <p class="section-copy reveal">${escapeHtml(service.planningCopy)}</p>
            <button class="text-link contact-trigger reveal" type="button">Talk through the details<i data-lucide="arrow-up-right" aria-hidden="true"></i></button>
          </div>
          <div class="service-planning-list">
            ${planningItems}
          </div>
        </div>
      </section>

      <section class="service-method">
        <div class="section-shell">
          <div class="service-method-heading">
            <p class="service-page-kicker reveal">How the Work Comes Together</p>
            <h2 class="section-title reveal">The steps for this project.</h2>
            <p class="section-copy reveal">${escapeHtml(service.methodIntro)}</p>
          </div>
          <div class="service-method-grid">
            ${methodSteps}
          </div>
        </div>
      </section>

      <section class="service-related section-shell">
        <div class="service-related-heading">
          <p class="section-kicker reveal">Related Services</p>
          <h2 class="section-title reveal">Other work to consider</h2>
          <p class="section-copy reveal">${escapeHtml(service.relatedCopy)}</p>
        </div>
        <div class="service-related-links">${relatedLinks}
          <a class="service-related-link" href="../index.html#services"><span>View all services</span><i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
        </div>
      </section>

      <section class="service-faq-section" aria-labelledby="service-faq-title">
        <div class="section-shell service-faq-layout">
          <div class="service-faq-heading">
            <p class="section-kicker reveal">Questions About ${title}</p>
            <h2 class="section-title reveal" id="service-faq-title">A few useful things to know.</h2>
            <p class="section-copy reveal">Every property is different. These answers can help you prepare for a conversation about the site and the work.</p>
          </div>
          <div class="service-faq-list">
            ${faqs}
          </div>
        </div>
      </section>

      <section class="reviews section-shell service-reviews" id="reviews" aria-labelledby="service-reviews-title">
        <div class="review-head">
          <div>
            <p class="section-kicker reveal">Google Reviews</p>
            <h2 class="section-title reveal" id="service-reviews-title">What customers say about the work.</h2>
            <p class="section-copy reveal">These are summaries of customer reviews, not direct quotes. Read the original reviews on Google.</p>
          </div>
          <div class="review-actions">
            <div class="review-carousel-controls" role="group" aria-label="Review carousel controls">
              <span class="review-count" data-review-count aria-live="polite">01-03 / 05</span>
              <button class="review-arrow" type="button" data-review-prev aria-label="Previous reviews" title="Previous reviews" disabled><i data-lucide="arrow-left"></i></button>
              <button class="review-arrow" type="button" data-review-next aria-label="Next reviews" title="Next reviews"><i data-lucide="arrow-right"></i></button>
            </div>
            <a class="google-btn reveal" href="https://www.google.com/maps?cid=13667308921485443592" target="_blank" rel="noopener"><i data-lucide="external-link"></i>View on Google</a>
          </div>
        </div>
        <div class="review-viewport" data-review-viewport role="region" aria-label="Pavers' Crete LLC customer reviews carousel" tabindex="0">
          <div class="review-grid review-track" data-review-track>
            ${reviewCards}
          </div>
        </div>
      </section>

      <section class="contact-band service-page-contact" id="contact">
        <div class="contact-bg"></div>
        <div class="section-shell contact-content">
          <p class="section-kicker reveal">Contact Pavers' Crete LLC</p>
          <h2 class="section-title reveal">Let's talk about your project.</h2>
          <p class="section-copy reveal">No form to fill out. Call, text, or send a WhatsApp message to (843) 251-8864. Tell the team what you are planning and where the project is located.</p>
          <button class="primary-btn contact-trigger reveal" type="button"><i data-lucide="phone-call"></i>Contact the Team</button>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <a class="brand footer-brand" href="../index.html#home" aria-label="Pavers' Crete LLC home">
          <img class="brand-mark" src="../assets/logo.jpg" alt="" aria-hidden="true" />
          <span><strong>Pavers' Crete LLC</strong><small>Paving Stones and Concrete Installation</small></span>
        </a>
        <button class="footer-contact contact-trigger" type="button"><i data-lucide="phone"></i>(843) 251-8864</button>
      </div>
    </footer>

    <button class="chat-launcher" type="button" aria-label="Ask a question" aria-expanded="false" aria-controls="faq-chat" data-chat-toggle><i data-lucide="messages-square"></i><span>Ask a question</span></button>

    <section class="faq-chat" id="faq-chat" aria-label="Frequently asked questions assistant" aria-hidden="true" data-chat-panel>
      <header class="chat-header">
        <span class="chat-avatar" aria-hidden="true"><i data-lucide="message-circle"></i></span>
        <div class="chat-heading"><strong>Project Questions</strong><span><i></i>Quick answers</span></div>
        <button class="chat-close" type="button" aria-label="Close assistant" data-chat-close><i data-lucide="x"></i></button>
      </header>
      <div class="chat-log" role="log" aria-live="polite" aria-relevant="additions" data-chat-log>
        <article class="chat-message is-bot"><p>Hi! Ask about services, estimates, timing, or service areas. For details about your property, I can connect you with the team.</p></article>
        <div class="chat-suggestions" data-chat-suggestions aria-label="Popular questions">
          <button type="button" data-chat-question="What services do you offer?">Services</button>
          <button type="button" data-chat-question="How can I get an estimate?">Estimates</button>
          <button type="button" data-chat-question="How long does a project take?">Timing</button>
          <button type="button" data-chat-question="What areas do you serve?">Service area</button>
        </div>
      </div>
      <form class="chat-composer" data-chat-form>
        <label class="visually-hidden" for="chat-question">Ask a question</label>
        <input id="chat-question" name="question" type="text" placeholder="Type your question..." autocomplete="off" data-chat-input />
        <button type="submit" aria-label="Send question"><i data-lucide="arrow-up"></i></button>
      </form>
      <div class="chat-contact-row"><span>Rather talk with someone?</span><button type="button" data-chat-contact>Contact the team</button></div>
    </section>

    <div class="contact-modal" data-modal aria-hidden="true">
      <div class="modal-backdrop" data-close-modal></div>
      <section class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button class="modal-close" type="button" aria-label="Close contact options" data-close-modal><i data-lucide="x"></i></button>
        <p class="section-kicker">Contact Options</p>
        <h2 id="contact-modal-title">Reach Pavers' Crete LLC</h2>
        <p class="modal-copy">No form to fill out. Choose call, text, or WhatsApp and tell the team what you are planning. Reach Pavers' Crete LLC at (843) 251-8864.</p>
        <div class="modal-actions">
          <a href="tel:+18432518864"><i data-lucide="phone-call"></i>Call</a>
          <a href="sms:+18432518864"><i data-lucide="message-square"></i>Text</a>
          <a href="https://wa.me/18432518864" target="_blank" rel="noopener"><i data-lucide="send"></i>WhatsApp</a>
        </div>
      </section>
    </div>

    <script src="../assets/lucide.min.js"></script>
    <script src="../script.js?v=13"></script>
  </body>
</html>
`;
}

await mkdir(outputDirectory, { recursive: true });
for (const [index, service] of services.entries()) {
  const html = renderServicePage(service, index);
  await writeFile(path.join(outputDirectory, `${service.slug}.html`), html);
}
console.log(`Generated ${services.length} service pages in ${outputDirectory}`);

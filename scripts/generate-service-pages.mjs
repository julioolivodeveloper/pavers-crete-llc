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
  },
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
    <link rel="stylesheet" href="../styles.css?v=21" />
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
        <a href="../index.html#work"><i class="nav-icon" data-lucide="images" aria-hidden="true"></i><span>Work</span></a>
        <a href="../index.html#reviews"><i class="nav-icon" data-lucide="star" aria-hidden="true"></i><span>Reviews</span></a>
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

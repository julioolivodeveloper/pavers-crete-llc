import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist", "services");

const services = [
  {
    slug: "paver-patios",
    title: "Paver Patios",
    description: "Custom paver patio installation with thoughtful layouts, borders, transitions, and detailed finishing for outdoor living spaces.",
    heroImage: "hero-pergola.jpg",
    heroAlt: "Paver patio and outdoor living area with pergola and stonework",
    lead: "A patio should feel like a natural extension of your home. We plan paver layouts around the way you gather, move, and spend time outdoors.",
    overviewTitle: "A patio shaped around your home and lifestyle.",
    overview: "From a simple sitting area to a larger outdoor room, a finished patio depends on the preparation below the surface as much as the pavers you see. We focus on layout, stable base preparation, clean edges, and careful transitions so the space feels considered from every angle.",
    bullets: ["Custom patterns, borders, and color combinations", "Base preparation and attention to drainage", "Precise cuts around steps, columns, and existing features", "Edging, jointing, and a clean final walkthrough"],
    detailImage: "project-patio-wide.jpg",
    detailAlt: "Wide paver patio with a stone border and outdoor seating wall",
  },
  {
    slug: "pool-decks",
    title: "Pool Decks",
    description: "Paver pool deck installation with coordinated coping, considered transitions, and careful attention to drainage and finish.",
    heroImage: "hero-pool.jpg",
    heroAlt: "Swimming pool bordered by a finished paver deck",
    lead: "Create a comfortable, polished setting around the pool with pavers and details planned to work together with the waterline and surrounding yard.",
    overviewTitle: "Bring the pool area together with a finished deck.",
    overview: "Poolside spaces connect the home, the water, and the yard. We help coordinate the deck layout with the pool edge, access points, drainage, and existing hardscape, then carry those choices through the cuts and finishing details.",
    bullets: ["Paver layouts for new or refreshed pool areas", "Coping and deck transitions planned as one composition", "Drainage-aware surface and edge details", "Borders and patterns that complement the property"],
    detailImage: "project-pool-brick.jpg",
    detailAlt: "Pool deck with a brick paver surround and curved layout",
  },
  {
    slug: "walkways-steps",
    title: "Walkways and Steps",
    description: "Paver walkways, entry paths, and steps designed to connect outdoor spaces with clean lines and considered transitions.",
    heroImage: "project-sidewalk.jpg",
    heroAlt: "Side-yard walkway installed with pavers and a contrasting border",
    lead: "Clear paths and well-planned steps make a property easier to move through while adding a strong visual connection between outdoor spaces.",
    overviewTitle: "Make every transition feel intentional.",
    overview: "From a front entry to a side-yard path or a set of garden steps, we plan walkways around the route, grade, and materials already on site. Curves, landings, borders, and lighting-ready details can bring the path into harmony with nearby patios and walls.",
    bullets: ["Entry paths, side-yard walkways, and garden routes", "Steps, landings, and grade transitions", "Curves, borders, and coordinated paver patterns", "Lighting-ready details and clean connections to existing surfaces"],
    detailImage: "project-lit-steps.jpg",
    detailAlt: "Paver steps with integrated warm lighting at night",
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    description: "Stone retaining and seat walls, borders, and columns integrated with the grade and overall outdoor layout.",
    heroImage: "project-retaining-wall.jpg",
    heroAlt: "Stone retaining wall built beside a paver patio",
    lead: "Use walls and vertical stonework to define outdoor rooms, shape transitions, and make more of the layout of your property.",
    overviewTitle: "Structure and stonework, considered together.",
    overview: "A retaining wall changes both the form and the flow of an outdoor space. We consider the grade, wall placement, adjacent pavers, and drainage details as part of the overall project plan. Seat walls, columns, and low borders can extend the same material language through the space.",
    bullets: ["Retaining walls coordinated with patios and walkways", "Seat walls, columns, and low landscape borders", "Attention to grade, drainage, and adjoining surfaces", "Stone color and finish choices that fit the property"],
    detailImage: "project-column.jpg",
    detailAlt: "Stone column and wall detail in a finished outdoor living space",
  },
  {
    slug: "concrete-installation",
    title: "Concrete Installation",
    description: "Concrete patios, slabs, pool surrounds, and flatwork with planned edges, finishes, and transitions.",
    heroImage: "project-stone-patio.jpg",
    heroAlt: "Finished outdoor patio and hardscape surface beside the water",
    lead: "For a clean, durable surface, we plan concrete work around the purpose of the space, the site conditions, and the finishes that complete it.",
    overviewTitle: "Concrete surfaces planned for everyday use.",
    overview: "Concrete can be the right foundation for a patio, slab, pool surround, or other outdoor surface. We discuss the size and use of the area, tie-ins to existing structures, edges, joints, and finish options before work begins so the finished surface fits its setting.",
    bullets: ["Patios, slabs, pool surrounds, and flatwork", "Broom, stamped, and other finish options", "Edges, joints, and tie-ins planned for the site", "Coordination with adjacent pavers and landscape features"],
    detailImage: "project-stairs.jpg",
    detailAlt: "Finished exterior steps and hardscape transition",
  },
  {
    slug: "finishing-details",
    title: "Finishing Details",
    description: "Paver borders, edge details, transitions, lighting-ready layouts, cleanup, and final project presentation.",
    heroImage: "project-lit-steps.jpg",
    heroAlt: "Illuminated stone steps showing careful paver finishing details",
    lead: "The small details make an outdoor project feel complete. We coordinate the edges, transitions, and finishing touches with the larger layout.",
    overviewTitle: "The final details that bring the whole project together.",
    overview: "Borders, edge restraint, joints, steps, and transitions are part of how a hardscape performs and looks over time. We plan these details alongside the main installation and coordinate lighting-ready layouts or sealing options when they suit the project.",
    bullets: ["Paver borders, cuts, and edge restraint", "Clean transitions between materials and elevations", "Lighting-ready details and finishing coordination", "Jointing, cleanup, and final presentation"],
    detailImage: "project-night-path.jpg",
    detailAlt: "Curved paver walkway with warm lighting along the edge",
  },
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function renderServicePage(service, index) {
  const related = [services[(index + 1) % services.length], services[(index + 2) % services.length]];
  const title = escapeHtml(service.title);
  const description = escapeHtml(service.description);
  const bullets = service.bullets.map((item) => `<li><i data-lucide="check" aria-hidden="true"></i><span>${escapeHtml(item)}</span></li>`).join("\n            ");
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;family=Oswald:wght@500;600;700&amp;display=swap" rel="stylesheet" />
    <link rel="icon" href="../assets/logo.jpg" />
    <link rel="stylesheet" href="../styles.css?v=10" />
  </head>
  <body class="service-detail-page">
    <header class="site-header" data-header>
      <a class="brand" href="../index.html#home" aria-label="Pavers' Crete LLC home">
        <img class="brand-mark" src="../assets/logo.jpg" alt="" aria-hidden="true" />
        <span><strong>Pavers' Crete LLC</strong><small>Paving Stones and Concrete Installation</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-nav-toggle><i data-lucide="menu"></i></button>
      <nav class="main-nav" data-nav aria-label="Main navigation">
        <a href="../index.html#about">About</a>
        <a href="../index.html#services">Services</a>
        <a href="../index.html#process">Process</a>
        <a href="../index.html#work">Work</a>
        <a href="../index.html#reviews">Reviews</a>
        <button class="nav-cta contact-trigger" type="button">Contact</button>
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
          <span><i data-lucide="layers" aria-hidden="true"></i>Careful site preparation</span>
          <span><i data-lucide="ruler" aria-hidden="true"></i>Thoughtful layout and detail</span>
          <span><i data-lucide="sparkles" aria-hidden="true"></i>Clean project finish</span>
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
            <p class="service-page-kicker reveal">From First Conversation to Finished Surface</p>
            <h2 class="section-title reveal">A considered process, built around your property.</h2>
          </div>
          <div class="service-method-grid">
            <article class="service-method-step reveal"><span>01</span><h3>Understand the space</h3><p>We discuss how you want to use the area and review the layout, access, and site conditions.</p></article>
            <article class="service-method-step reveal"><span>02</span><h3>Plan the details</h3><p>Materials, boundaries, transitions, and finishing choices are considered together before installation.</p></article>
            <article class="service-method-step reveal"><span>03</span><h3>Install and review</h3><p>The team completes the agreed work, tidies the site, and walks through the finished project with you.</p></article>
          </div>
        </div>
      </section>

      <section class="service-related section-shell">
        <div class="service-related-heading">
          <p class="section-kicker reveal">More Ways to Improve Your Outdoor Space</p>
          <h2 class="section-title reveal">Related services</h2>
        </div>
        <div class="service-related-links">${relatedLinks}
          <a class="service-related-link" href="../index.html#services"><span>View all services</span><i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
        </div>
      </section>

      <section class="contact-band service-page-contact" id="contact">
        <div class="contact-bg"></div>
        <div class="section-shell contact-content">
          <p class="section-kicker reveal">Let's Talk Details</p>
          <h2 class="section-title reveal">Planning ${title.toLowerCase()} for your property?</h2>
          <p class="section-copy reveal">Start a direct conversation with Pavers' Crete LLC. Call, text, or reach the team on WhatsApp.</p>
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

    <button class="floating-contact contact-trigger" type="button" aria-label="Contact Pavers' Crete LLC"><i data-lucide="phone-call"></i></button>
    <button class="chat-launcher" type="button" aria-label="Ask a question" aria-expanded="false" aria-controls="faq-chat" data-chat-toggle><i data-lucide="messages-square"></i><span>Ask a question</span></button>

    <section class="faq-chat" id="faq-chat" aria-label="Frequently asked questions assistant" aria-hidden="true" data-chat-panel>
      <header class="chat-header">
        <span class="chat-avatar" aria-hidden="true"><i data-lucide="message-circle"></i></span>
        <div class="chat-heading"><strong>Pavers' Crete Assistant</strong><span><i></i>Here to help</span></div>
        <button class="chat-close" type="button" aria-label="Close assistant" data-chat-close><i data-lucide="x"></i></button>
      </header>
      <div class="chat-log" role="log" aria-live="polite" aria-relevant="additions" data-chat-log>
        <article class="chat-message is-bot"><p>Hi! I can help with services, estimates, project timing, and more. What would you like to know?</p></article>
        <div class="chat-suggestions" data-chat-suggestions aria-label="Popular questions">
          <button type="button" data-chat-question="What services do you offer?">Services</button>
          <button type="button" data-chat-question="How can I get an estimate?">Estimates</button>
          <button type="button" data-chat-question="How long does a project take?">Timing</button>
          <button type="button" data-chat-question="What areas do you serve?">Service area</button>
        </div>
      </div>
      <form class="chat-composer" data-chat-form>
        <label class="visually-hidden" for="chat-question">Ask a question</label>
        <input id="chat-question" name="question" type="text" placeholder="Ask a question..." autocomplete="off" data-chat-input />
        <button type="submit" aria-label="Send question"><i data-lucide="arrow-up"></i></button>
      </form>
      <div class="chat-contact-row"><span>Need help with your project?</span><button type="button" data-chat-contact>Contact the team</button></div>
    </section>

    <div class="contact-modal" data-modal aria-hidden="true">
      <div class="modal-backdrop" data-close-modal></div>
      <section class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button class="modal-close" type="button" aria-label="Close contact options" data-close-modal><i data-lucide="x"></i></button>
        <p class="section-kicker">Contact Options</p>
        <h2 id="contact-modal-title">Reach Pavers' Crete LLC</h2>
        <p class="modal-copy">Choose how you want to connect with the team at (843) 251-8864.</p>
        <div class="modal-actions">
          <a href="tel:+18432518864"><i data-lucide="phone-call"></i>Call</a>
          <a href="sms:+18432518864"><i data-lucide="message-square"></i>Text</a>
          <a href="https://wa.me/18432518864" target="_blank" rel="noopener"><i data-lucide="send"></i>WhatsApp</a>
        </div>
      </section>
    </div>

    <script src="../assets/lucide.min.js"></script>
    <script src="../script.js?v=9"></script>
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

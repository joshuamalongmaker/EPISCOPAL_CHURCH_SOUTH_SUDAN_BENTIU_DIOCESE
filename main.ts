export {};

const imageBase = 'https://bentiu.anglican.org/wp-content/uploads/sites/52/2020/06/';
const images = {
  crest: `${imageBase}Logo-BDioces-4.png`,
  gathering: `${imageBase}Bentiu-Diocese-Photos-3b-e1592563240895.jpg`,
  congregation: `${imageBase}Bentiu-Diocese-Photos-7b-768x576.jpg`,
  profile: `${imageBase}Rev-John-Gattek-Web-Post-2.jpg`,
};

type TimelineItem = { year: string; detail: string };
type ArchiveStory = { date: string; title: string; summary: string; url: string };
type WordPressPost = {
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

const storiesApi = 'https://bentiu.anglican.org/wp-json/wp/v2/posts';
const firstStoryYear = 2009;
const lastStoryYear = 2026;

const milestones: TimelineItem[] = [
  { year: '2009', detail: 'Established as an area diocese' },
  { year: '2013', detail: 'Elevated to full diocesan status' },
  { year: '2017', detail: 'Inaugurated on 20 December' },
];

const stories: ArchiveStory[] = [
  {
    date: '18 June 2020',
    title: 'Congregation life in Bentiu POC',
    summary: 'A reflection on worship, fellowship and the church’s presence among displaced communities in Bentiu.',
    url: 'https://bentiu.anglican.org/2020/06/18/bentiu-diocese-congregation-lifestyle-in-bentiu-poc/',
  },
  {
    date: '8 June 2020',
    title: 'Profile of the Diocese',
    summary: 'The origins of the Diocese of Bentiu and its place in the Episcopal Church of South Sudan.',
    url: 'https://bentiu.anglican.org/2020/06/08/profile-of-dob/',
  },
  {
    date: '16 July 2019',
    title: 'Welcome to Bentiu',
    summary: 'An introduction to the Diocese of Bentiu and its place in the wider Anglican Communion.',
    url: 'https://bentiu.anglican.org/2019/07/16/hello-world/',
  },
];

const externalLink = (url: string, label: string, className = '') =>
  `<a class="${className}" href="${url}" target="_blank" rel="noreferrer">${label} <span aria-hidden="true">↗</span></a>`;

const header = `
  <div class="utility-bar">
    <span>Episcopal Church of South Sudan</span>
    <span>Anglican Communion <i aria-hidden="true">·</i> Upper Nile Internal Province</span>
  </div>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Diocese of Bentiu home">
      <img src="${images.crest}" alt="" width="52" height="52">
      <span class="brand-copy"><strong>Diocese of Bentiu</strong><small>Faith · Fellowship · Service</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Open navigation">
      <span></span><span></span>
    </button>
    <nav class="site-navigation" id="site-navigation" aria-label="Main navigation">
      <a href="#story">The Diocese</a>
      <a href="#ministry">Our community</a>
      <a href="#news">News &amp; stories</a>
      <a class="nav-cta" href="#story">Discover Bentiu <span aria-hidden="true">→</span></a>
    </nav>
  </header>`;

const hero = `
  <section class="hero" id="top" aria-labelledby="hero-title">
    <img class="hero-image" src="${images.gathering}" alt="The Diocese of Bentiu gathered together" fetchpriority="high">
    <div class="hero-shade"></div>
    <div class="hero-content">
      <p class="eyebrow"><span class="eyebrow-rule"></span> A church in the Anglican Communion</p>
      <h1 id="hero-title">Diocese<br>of <em>Bentiu.</em></h1>
      <p class="hero-intro">A community of faith within the Anglican Communion, walking alongside the people of Bentiu.</p>
      <a class="text-link light-link" href="#story">Discover our story <span aria-hidden="true">↓</span></a>
    </div>
    <div class="hero-caption"><span>Upper Nile Internal Province</span><span>Episcopal Church of South Sudan</span></div>
  </section>`;

const storySection = `
  <section class="story-section section-pad" id="story" aria-labelledby="story-title">
    <div class="section-heading">
      <p class="eyebrow dark-eyebrow">A diocese with deep roots</p>
      <h2 id="story-title">Growing in faith,<br><em>serving together.</em></h2>
    </div>
    <div class="story-copy">
      <p class="lead">The Diocese of Bentiu belongs to the Anglican Communion and the Province of the Episcopal Church of South Sudan.</p>
      <p>Founded as an area diocese in December 2009, Bentiu was elevated to full diocesan status in 2013. Its inauguration followed on 20 December 2017, marking a new chapter in the life of the church and its congregations.</p>
      ${externalLink(stories[1].url, 'Read the diocesan profile', 'text-link dark-link')}
    </div>
    <div class="timeline" aria-label="Diocese history">
      ${milestones.map(({ year, detail }) => `
        <div class="timeline-item"><span class="timeline-year">${year}</span><span class="timeline-dot"></span><p>${detail}</p></div>`).join('')}
    </div>
    <figure class="profile-photo">
      <img src="${images.profile}" alt="Rt Rev John Gattek and diocesan clergy, pictured in the 2020 diocesan profile" loading="lazy">
      <figcaption>Rt Rev John Gattek and diocesan clergy · 2020 profile</figcaption>
    </figure>
  </section>`;

const ministrySection = `
  <section class="ministry-section" id="ministry" aria-labelledby="ministry-title">
    <div class="ministry-photo-wrap">
      <img src="${images.congregation}" alt="A congregation gathering in Bentiu" loading="lazy">
      <span class="photo-label">Congregation life in Bentiu</span>
    </div>
    <div class="ministry-copy">
      <p class="eyebrow light-eyebrow">Faith beside our neighbours</p>
      <h2 id="ministry-title">A place of prayer.<br><em>A people of hope.</em></h2>
      <p>In a 2020 account, the diocese described congregations gathering in the Protection of Civilians site and offering comfort to families displaced by conflict.</p>
      ${externalLink(stories[0].url, 'Read the 2020 account', 'text-link light-link')}
    </div>
    <div class="ministry-aside">
      <span class="aside-mark" aria-hidden="true">“</span>
      <blockquote>To God be the Glory; His Name be Praised for Ever and Ever.</blockquote>
      <span class="aside-caption">From the Diocese of Bentiu profile</span>
      <span class="aside-cross" aria-hidden="true">✳</span>
    </div>
  </section>`;

const archiveSection = `
  <section class="archive-section section-pad" id="news" aria-labelledby="archive-title">
    <div class="archive-heading">
      <div><p class="eyebrow dark-eyebrow">Live from the Diocese</p><h2 id="archive-title">Stories, ${firstStoryYear}–${lastStoryYear}</h2></div>
      <span class="live-indicator"><i aria-hidden="true"></i> Live archive</span>
    </div>
    <div class="stories-toolbar">
      <p class="archive-note">Published stories from the Diocese of Bentiu, updated from its live archive.</p>
      <div class="story-controls">
        <label class="visually-hidden" for="story-year">Filter stories by year</label>
        <select id="story-year" aria-label="Filter stories by year"><option value="all">All years · ${firstStoryYear}–${lastStoryYear}</option></select>
        <button class="refresh-stories" id="refresh-stories" type="button" aria-label="Refresh stories" title="Refresh stories">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5M4.9 9a7.5 7.5 0 0 1 12.7-2L20 12M4 17v-5h5m10.1 3a7.5 7.5 0 0 1-12.7 2L4 12"/></svg>
          <span>Refresh</span>
        </button>
      </div>
    </div>
    <p class="story-status" id="story-status" role="status" aria-live="polite">Connecting to the Diocese archive…</p>
    <div class="archive-grid" id="archive-grid" aria-live="polite"></div>
  </section>`;

const footer = `
  <footer class="site-footer">
    <a class="footer-brand" href="#top">Diocese <em>of</em> Bentiu<span>.</span></a>
    <div class="footer-meta"><p>Episcopal Church of South Sudan</p><p>Anglican Communion · South Sudan</p></div>
    <a class="footer-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
    <div class="footer-bottom"><span>Rooted in faith. Present in Bentiu.</span><span>© Diocese of Bentiu</span></div>
  </footer>`;

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root was not found.');

app.innerHTML = `${header}<main id="main">${hero}
  <section class="intro-band" aria-label="Diocesan identity">
    <p>Faith in community</p><span aria-hidden="true">✳</span><p>Hope through fellowship</p><span aria-hidden="true">✳</span><p>Present in Bentiu</p>
  </section>
  ${storySection}${ministrySection}${archiveSection}</main>${footer}`;

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#site-navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !isExpanded);
  });

  navigation.addEventListener('click', (event) => {
    if (!(event.target instanceof Element) || !event.target.closest('a')) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
}

const storyYear = document.querySelector<HTMLSelectElement>('#story-year');
const refreshStoriesButton = document.querySelector<HTMLButtonElement>('#refresh-stories');
const storyStatus = document.querySelector<HTMLParagraphElement>('#story-status');
const archiveGrid = document.querySelector<HTMLDivElement>('#archive-grid');
let publishedStories = [...stories];

const plainText = (html: string) =>
  new DOMParser().parseFromString(html, 'text/html').body.textContent?.replace(/\s+/g, ' ').trim() ?? '';

const renderYearOptions = () => {
  if (!storyYear) return;
  const counts = new Map<number, number>();
  for (const story of publishedStories) {
    const year = Number(story.date.slice(-4));
    counts.set(year, (counts.get(year) ?? 0) + 1);
  }

  storyYear.replaceChildren(new Option(`All years · ${firstStoryYear}–${lastStoryYear} (${publishedStories.length})`, 'all'));
  for (let year = lastStoryYear; year >= firstStoryYear; year -= 1) {
    storyYear.add(new Option(`${year} (${counts.get(year) ?? 0})`, String(year)));
  }
};

const renderStories = () => {
  if (!storyYear || !archiveGrid) return;
  const selectedYear = storyYear.value;
  const visibleStories = selectedYear === 'all'
    ? publishedStories
    : publishedStories.filter((story) => story.date.endsWith(selectedYear));
  archiveGrid.replaceChildren();

  if (visibleStories.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'archive-empty';
    emptyMessage.textContent = selectedYear === 'all'
      ? 'No published stories are currently available in the Diocese archive.'
      : `No published stories are available for ${selectedYear} in the Diocese archive.`;
    archiveGrid.append(emptyMessage);
    return;
  }

  for (const [index, story] of visibleStories.entries()) {
    const article = document.createElement('article');
    article.className = 'archive-item';

    const number = document.createElement('div');
    number.className = 'archive-number';
    number.textContent = `${String(index + 1).padStart(2, '0')} / ${String(visibleStories.length).padStart(2, '0')}`;

    const date = document.createElement('p');
    date.className = 'archive-date';
    date.append(document.createTextNode(`${story.date} `));
    const dateLine = document.createElement('span');
    dateLine.className = 'date-line';
    dateLine.setAttribute('aria-hidden', 'true');
    date.append(dateLine);

    const title = document.createElement('h3');
    title.textContent = story.title;

    const summary = document.createElement('p');
    summary.textContent = story.summary;

    const link = document.createElement('a');
    link.className = 'archive-link';
    link.href = story.url;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.append(document.createTextNode('Read story '));
    const arrow = document.createElement('span');
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    link.append(arrow);

    article.append(number, date, title, summary, link);
    archiveGrid.append(article);
  }
};

const loadStories = async () => {
  if (!refreshStoriesButton || !storyStatus || !storyYear) return;
  refreshStoriesButton.disabled = true;
  refreshStoriesButton.classList.add('is-refreshing');
  storyStatus.textContent = 'Checking the Diocese archive…';
  storyStatus.classList.remove('is-error');

  try {
    const allPosts: WordPressPost[] = [];
    let totalPages = 1;

    for (let page = 1; page <= totalPages; page += 1) {
      const url = new URL(storiesApi);
      url.search = new URLSearchParams({
        after: `${firstStoryYear - 1}-12-31T23:59:59`,
        before: `${lastStoryYear + 1}-01-01T00:00:00`,
        orderby: 'date',
        order: 'desc',
        page: String(page),
        per_page: '100',
        _fields: 'date,link,title,excerpt',
      }).toString();
      url.searchParams.set('_refresh', String(Date.now()));

      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) throw new Error(`The archive responded with ${response.status}.`);
      const posts = await response.json() as WordPressPost[];
      if (!Array.isArray(posts)) throw new Error('The archive returned an unexpected response.');
      allPosts.push(...posts);
      totalPages = Number(response.headers.get('X-WP-TotalPages')) || 1;
    }

    publishedStories = allPosts.flatMap((post) => {
      const year = Number(post.date?.slice(0, 4));
      let url: URL;
      try {
        url = new URL(post.link);
      } catch {
        return [];
      }
      if (year < firstStoryYear || year > lastStoryYear || url.origin !== 'https://bentiu.anglican.org') return [];

      const dateParts = post.date.slice(0, 10).split('-').map(Number);
      const publishedAt = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]));
      const excerpt = plainText(post.excerpt?.rendered ?? '').replace(/(?:…|\.\.\.)?\s*Continue reading\b[\s\S]*$/i, '').trim();
      return [{
        date: new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(publishedAt),
        title: plainText(post.title?.rendered ?? ''),
        summary: excerpt.length > 220 ? `${excerpt.slice(0, 217).trimEnd()}…` : excerpt || 'Read the full story from the Diocese of Bentiu.',
        url: url.href,
      }];
    });

    renderYearOptions();
    renderStories();
    const checkedAt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(new Date());
    storyStatus.textContent = `${publishedStories.length} published ${publishedStories.length === 1 ? 'story' : 'stories'} · Last checked ${checkedAt}`;
  } catch {
    renderYearOptions();
    renderStories();
    storyStatus.textContent = `Could not reach the live archive. Showing ${publishedStories.length} saved ${publishedStories.length === 1 ? 'story' : 'stories'} instead.`;
    storyStatus.classList.add('is-error');
  } finally {
    refreshStoriesButton.disabled = false;
    refreshStoriesButton.classList.remove('is-refreshing');
  }
};

storyYear?.addEventListener('change', renderStories);
refreshStoriesButton?.addEventListener('click', () => void loadStories());
renderYearOptions();
renderStories();
void loadStories();
window.setInterval(() => void loadStories(), 5 * 60 * 1000);
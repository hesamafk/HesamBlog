(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });
  const search = document.querySelector('#post-search');
  const posts = [...document.querySelectorAll('.searchable-post')];
  const status = document.querySelector('#search-status');
  const noResults = document.querySelector('#no-results');
  if (search && posts.length) {
    const filterPosts = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      posts.forEach(post => {
        const haystack = `${post.dataset.search || ''} ${post.textContent}`.toLocaleLowerCase();
        const match = !query || haystack.includes(query);
        post.hidden = !match;
        if (match) visible += 1;
      });
      if (status) status.textContent = query ? `${visible} article${visible === 1 ? '' : 's'} found` : 'Showing all articles';
      if (noResults) noResults.hidden = visible !== 0;
    };
    search.addEventListener('input', filterPosts);
    filterPosts();
  }
})();


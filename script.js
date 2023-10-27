
const navHeader = document.querySelector('header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navHeader.before(scrollWatcher);

navObserver = new IntersectionObserver(() => {
    console.log(entries);
    primaryHeader.classList.toggle('sticking')
});

navObserver.observe(scrollWatcher)
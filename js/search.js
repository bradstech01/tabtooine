function createListener() {
    const form = document.getElementById('bar');
    const input = document.getElementById('searchbar');

    input.addEventListener('focus', e => {input.value = ''});

    form.addEventListener('submit',e => {
        e.preventDefault();
        window.location.replace('https://www.google.com/search?q='+input.value)
    });
}

createListener();
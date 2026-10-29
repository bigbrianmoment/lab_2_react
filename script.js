const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages.join(', '),
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    cpuThreads: navigator.hardwareConcurrency,
    screen: `${screen.width}x${screen.height}`,
    deviceMemory: navigator.deviceMemory ?? 'недоступно'
};

for (const [key, value] of Object.entries(info)) {
    localStorage.setItem(key, String(value));
}

const list = document.getElementById('system-info');
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    li.textContent = `${key}: ${localStorage.getItem(key)}`;
    list.appendChild(li);
}

async function loadComments() {
    const list = document.getElementById('reviews-list');
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/18/comments`
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const comments = await response.json();

        comments.forEach((c) => {
            const card = document.createElement('article');
            card.className = 'job';
            const title = document.createElement('h3');
            title.textContent = c.name;
            const author = document.createElement('p');
            author.textContent = c.email;
            const body = document.createElement('p');
            body.textContent = c.body;
            card.append(title, author, body);
            list.appendChild(card);
        });
    } catch (error) {
        list.textContent = 'Не вдалося завантажити відгуки.';
        console.error(error);
    }
}

loadComments();
const modal = document.getElementById('modal');

setTimeout(() => {
    modal.hidden = false;
}, 60000);

document.getElementById('modal-close').addEventListener('click', () => {
    modal.hidden = true;
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const result = document.getElementById('form-result');
    const formData = new FormData(contactForm);
    formData.append('access_key', '0802b2c0-a36e-432f-8947-b3a17e59613b');

    submitButton.disabled = true;
    result.textContent = 'Надсилання...';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.message || `HTTP ${response.status}`);
        }

        result.textContent = 'Повідомлення успішно надіслано.';
        contactForm.reset();
    } catch (error) {
        console.error('Не вдалося надіслати повідомлення:', error);
        result.textContent = 'Не вдалося надіслати повідомлення. Спробуйте ще раз.';
    } finally {
        submitButton.disabled = false;
    }
});

function themeByTime() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

document.body.classList.toggle('dark', themeByTime() === 'dark');

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
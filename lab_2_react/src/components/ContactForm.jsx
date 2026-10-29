import { useEffect, useState } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('contactFormClosed')) return;
        const timer = setTimeout(() => setIsOpen(true), 60000);
        return () => clearTimeout(timer);
    }, []);

    function close() {
        sessionStorage.setItem('contactFormClosed', 'true');
        setIsOpen(false);
    }

    async function onSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            setResult('Форму не налаштовано: відсутній ключ Web3Forms.');
            return;
        }

        const formData = new FormData(form);
        formData.append('access_key', accessKey);
        setIsSubmitting(true);
        setResult('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || `HTTP ${response.status}`);
            }

            setResult('Повідомлення успішно надіслано.');
            form.reset();
        } catch (error) {
            console.error('Не вдалося надіслати повідомлення:', error);
            setResult('Не вдалося надіслати повідомлення. Спробуйте ще раз.');
        } finally {
            setIsSubmitting(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-11/12 max-w-md p-6 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl">
                <button type="button" onClick={close} className="mb-4">Закрити</button>
                <h2 className="text-xl font-semibold text-brand-900 dark:text-emerald-200 mb-4">
                    Зворотний зв'язок
                </h2>
                <form onSubmit={onSubmit} className="grid gap-3">
                    <label htmlFor="contact-name">Ім'я</label>
                    <input id="contact-name" name="name" type="text" required className="rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2" />
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" name="email" type="email" required className="rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2" />
                    <label htmlFor="contact-phone">Номер телефону</label>
                    <input id="contact-phone" name="phone" type="tel" className="rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2" />
                    <label htmlFor="contact-message">Повідомлення</label>
                    <textarea id="contact-message" name="message" required rows="4" className="rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2" />
                    <button type="submit" disabled={isSubmitting} className="rounded-lg bg-brand-700 px-5 py-2 font-medium text-white hover:bg-brand-800 disabled:opacity-60">
                        {isSubmitting ? 'Надсилання…' : 'Надіслати'}
                    </button>
                    {result && <p role="status">{result}</p>}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
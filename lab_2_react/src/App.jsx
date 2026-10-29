import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { useEffect, useState } from 'react';
import Reviews from './components/reviews';

function App() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const hour = new Date().getHours();
        setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);
    const toggleTheme = () =>
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    return (
        <div className="min-h-screen flex flex-col bg-stone-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
            <Header theme={theme} onToggle={toggleTheme} />
            <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:items-start">
                <About />
                <Education />
                <Skills />
                <Experience />
                <Contacts />
                
            </main>
            <Footer />
            <ContactForm />
        </div>
    );
}

export default App;
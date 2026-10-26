import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-stone-100 text-slate-800">
            <Header />
            <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:items-start">
                <About />
                <Education />
                <Skills />
                <Experience />
                <Contacts />
            </main>
            <Footer />
        </div>
    );
}

export default App;
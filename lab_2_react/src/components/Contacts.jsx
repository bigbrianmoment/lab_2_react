function Contacts() {
    return (
        <section className="md:col-span-2 p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <h2 className="text-2xl font-semibold text-brand-900 mb-4">Контакти</h2>
            <ul className="flex flex-wrap gap-4">
                <li>
                    <a
                        href="mailto:oleksandr.nesterenko.kb.2026@lpnu.ua"
                        className="inline-block px-5 py-2 bg-brand-700 text-white font-medium rounded-lg shadow hover:bg-brand-800 hover:scale-105 transition"
                    >
                        Email
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/bigbrianmoment"
                        className="inline-block px-5 py-2 bg-slate-800 text-white font-medium rounded-lg shadow hover:bg-slate-900 hover:scale-105 transition"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Contacts;
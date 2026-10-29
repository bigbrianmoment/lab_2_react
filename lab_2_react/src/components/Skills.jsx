const skillGroups = [
    {
        title: 'Мови програмування та вебтехнології',
        items: ['HTML, CSS, JavaScript', 'Python', 'C / C++ / C#', 'SQL'],
    },
    {
        title: 'Бази даних',
        items: ['MariaDB', 'Microsoft Access'],
    },
    {
        title: 'Веброзробка та CMS',
        items: [
            'WordPress, тема Astra',
            'WooCommerce – налаштування інтернет-магазину',
            'Apache – розгортання та конфігурація',
        ],
    },
    {
        title: 'Адміністрування',
        items: [
            'Адміністрування вебхостингу та ігрових серверів (Minecraft)',
            'Забезпечення безперервної роботи сервісів',
            'Вирішення інцидентів та модерація користувацьких спільнот',
        ],
    },
    {
        title: 'Графіка та офісні програми',
        items: [
            'Adobe Photoshop',
            'ibisPaint',
            'Пакет офісних програм (Word, Excel, PowerPoint)',
        ],
    },
];

function Skills() {
    return (
        <section className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-brand-900 dark:text-emerald-200 mb-4">Технічні навички</h2>

            {skillGroups.map((group) => (
                <div key={group.title} className="mb-4 last:mb-0">
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {group.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                            <li
                                key={item}
                                className="px-3 py-1 text-sm bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Skills;
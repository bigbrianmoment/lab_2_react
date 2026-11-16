function Languages() {
    return (
        <section className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-brand-900 dark:text-emerald-200 mb-3">
                Знання мов
            </h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Українська — рідна.</li>
                <li>
                    Англійська — B2 (без офіційного підтвердження). За шкалою EF
                    SET: читання — 78 (C2), аудіювання — 95 (C2), письмо — 59
                    (B2), говоріння — 56 (B2).
                </li>
            </ul>
        </section>
    );
}

export default Languages;

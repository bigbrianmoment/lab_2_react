function Experience() {
    return (
        <section className="md:col-span-2 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-brand-900 dark:text-emerald-200 mb-4">Досвід</h2>

            <div className="grid gap-4 md:grid-cols-3">
                <article className="p-4 border-l-4 border-brand-700 bg-slate-50 dark:bg-slate-700 rounded-r-lg hover:bg-brand-50 dark:hover:bg-slate-600 hover:scale-105 transition">
                    <h3 className="text-lg font-semibold mb-2">Розробка сайту на WordPress</h3>
                    <p className="text-sm leading-relaxed">
                        Побудова та налаштування сайту на WordPress із темою
                        Astra, інтеграція WooCommerce для функціоналу
                        інтернет-магазину: каталог товарів, кошик, оформлення
                        замовлень.
                    </p>
                </article>

                <article className="p-4 border-l-4 border-brand-700 bg-slate-50 dark:bg-slate-700 rounded-r-lg hover:bg-brand-50 dark:hover:bg-slate-600 hover:scale-105 transition">
                    <h3 className="text-lg font-semibold mb-2">
                        Адміністрування хостингу та Minecraft-сервера
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Підтримка ігрового сервера: моніторинг стабільності,
                        вирішення технічних інцидентів, керування доступом
                        користувачів.
                    </p>
                </article>

                <article className="p-4 border-l-4 border-brand-700 bg-slate-50 dark:bg-slate-700 rounded-r-lg hover:bg-brand-50 dark:hover:bg-slate-600 hover:scale-105 transition">
                    <h3 className="text-lg font-semibold mb-2">
                        Розробка та адміністрування баз даних
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Створення та оптимізація баз даних у MariaDB та
                        Microsoft Access, забезпечення цілісності даних,
                        написання SQL-запитів, звітів для отримання необхідної
                        інформації, розробка десктопного застосунку для
                        взаємодії з базами даних (C#, Windows Forms).
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Experience;
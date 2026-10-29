function Header({ theme, onToggle }) {
    return (
        <header className="flex flex-col items-center bg-brand-900 text-white px-6 py-10 shadow-lg">
            <button onClick={onToggle} className="...">
                {theme === 'light' ? 'Нічна тема' : 'Денна тема'}
            </button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">
                Нестеренко Олександр
            </h1>
            <p className="text-lg md:text-xl opacity-90">
                Fullstack-розробник / System Administrator
            </p>
        </header>
    );
}

export default Header;
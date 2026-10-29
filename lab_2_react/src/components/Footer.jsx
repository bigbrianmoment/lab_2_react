import { useEffect, useState } from 'react';

function Footer() {
    const [info, setInfo] = useState({});

    useEffect(() => {
        localStorage.setItem('userAgent', navigator.userAgent);
        localStorage.setItem('platform', navigator.platform);
        setInfo({
            userAgent: localStorage.getItem('userAgent'),
            platform: localStorage.getItem('platform'),
        });
    }, []);

    return (
        <footer className="...">
            <p>&copy; 2026 Нестеренко Олександр</p>
            <p>Платформа: {info.platform}</p>
            <p>Браузер: {info.userAgent}</p>
        </footer>
    );
}

export default Footer;
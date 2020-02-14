import {useState, useEffect } from 'react';

const useDarkMode = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        if (dark === true) {
            bodyElement.classList.add('dark-mode');
        } else {
            bodyElement.classList.remove('dark-mode');
        }
    }, [dark]);

    return [dark, setDark];
}

export default useDarkMode;
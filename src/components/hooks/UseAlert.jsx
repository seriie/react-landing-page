import { useState } from 'react';

export default function useAlert() {
    const [alert, setAlert] = useState(null);

    function showAlert(text) {
        setAlert(text);
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return {
        alert,
        showAlert,
    };
}

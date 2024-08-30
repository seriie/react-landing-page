import React, { useEffect, useState } from 'react';
import '../style/my_alerts.css'; // Import CSS

export default function MyAlerts({ alert }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (alert) {
            setIsActive(true);
            const timer = setTimeout(() => {
                setIsActive(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <div className={`alert-box min-w-[400px] bg-green-300 rounded-[10px] z-50 ${isActive ? 'active' : ''}`}>
            <div className="alert-text py-[50px] px-[20px] text-center text-green-900 text-[20px]">
                {alert}
            </div>
        </div>
    );
}

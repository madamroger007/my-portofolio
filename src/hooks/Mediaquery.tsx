import React from 'react';
import { Children } from '../types/types';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }: Children) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? <>{children}</> : null;
};

const Tablet = ({ children }: Children) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? <>{children}</> : null;
};

const Mobile = ({ children }: Children) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? <>{children}</> : null;
};

const Default = ({ children }: Children) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? <>{children}</> : null;
};

// Fungsi untuk mendapatkan status media query
const useMediaQueries = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
    const isDefault = useMediaQuery({ minWidth: 768 });
    const isBigScreen = useMediaQuery({ minWidth: 1824 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isRetina = useMediaQuery({ minResolution: '2dppx' });

    return {
        isDesktopOrLaptop,
        isDefault,
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina
    };
};

export { Default, Desktop, Mobile, Tablet, useMediaQueries };

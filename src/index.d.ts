import React from 'react';

export interface AppConfig {
    id: string;
    name: string;
    path: string;
    icon?: string;
}

export interface DrawerMenuProps {
    apps?: AppConfig[];
    logo?: React.ReactNode;
}

declare const PwaSidebar: React.FC<DrawerMenuProps>;

export default PwaSidebar;
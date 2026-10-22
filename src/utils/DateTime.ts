// utils/formatDate.ts

import { Project } from "../types/types";

export const formatDate = (dateString: string): string => {
    // Expect input "YYYY-MM-DD", "YYYY-MM-DDTHH:mm:ssZ", atau "DD/MM/YYYY"
    const date = new Date(dateString);

    if (isNaN(date.getTime())) return "invalid date";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};


export const formatYear = (date?: string | null | undefined) => {
    if (!date) {
        return "Project";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "Project";
    }

    return parsedDate.getFullYear().toString();
};

export const getIconName = (icon: Project["icons"][number]) => {
    if (typeof icon !== "string") {
        return icon.name;
    }

    const iconString = icon as unknown as string;
    const nameMatch = iconString.match(/name:\s*"([^"]+)"/);
    return nameMatch?.[1] ?? iconString;
};
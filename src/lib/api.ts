import { Experience, Certification, Skills, Project } from "../types/types";
export async function getExperience(): Promise<Experience[]> {
    try {
        const response = await fetch(`${process.env.API_URL}/experience`, {
            method: "GET",
            next: {
                revalidate: 3600,
                tags: ['experience']
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TOKEN_ACCESS_API}`,
                "x-app-token": process.env.TOKEN_APP!
            }
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching experience data:", error);
        return [];
    }
}


export async function getCertification(): Promise<Certification[]> {
    try {
        const response = await fetch(`${process.env.API_URL}/certification`, {
            method: "GET",
            next: {
                revalidate: 3600,
                tags: ['certification']
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TOKEN_ACCESS_API}`,
                "x-app-token": process.env.TOKEN_APP!
            }
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching certification data:", error);
        return [];
    }
}

export async function getSkills(): Promise<Skills[]> {
    try {
        const response = await fetch(`${process.env.API_URL}/skill`, {
            method: "GET",
            next: {
                revalidate: 3600,
                tags: ['skill']
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TOKEN_ACCESS_API}`,
                "x-app-token": process.env.TOKEN_APP!
            }
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching skill data:", error);
        return [];
    }

}


export async function getProject(): Promise<Project[]> {
    try {
        const response = await fetch(`${process.env.API_URL}/project`, {
            method: "GET",
            next: {
                revalidate: 3600,
                tags: ['project']
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TOKEN_ACCESS_API}`,
                "x-app-token": process.env.TOKEN_APP!
            }
        });
        const data = await response.json();
        return Array.isArray(data.data) ? data.data : [];
    } catch (error) {
        console.error("Error fetching project data:", error);
        return [];
    }

}



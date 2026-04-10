export const getDestinations = async () => {
    try {
        const response = await fetch('data/destinations.json');

        if (!response.ok) {
            throw new Error("Error fetching data: " + response.status);
        }

        const data = await response.json();
        return data;
    }
    
    catch (error) {
        console.error("Error fetching destinations:", error);
        return [];
    }
};
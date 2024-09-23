interface Pet {
    id: number;
    name: string;
    status: string;
    category?: {
        id: number;
        name: string;
    };
    photoUrls: string[];
    tags?: {
        id: number;
        name: string;
    }[];
}

async function fetchPetsByStatus(status: string): Promise<void> {
    try {
        const response = await fetch(
            `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Pet[] = await response.json();
        console.log('Received data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchPetsByStatus('available');

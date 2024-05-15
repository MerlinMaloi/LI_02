/**
 * 
 * @returns {string} activity or null if there was error
 */
async function fetchData() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export { fetchData }; // Экспортируем функцию для возможного использования в других файлах

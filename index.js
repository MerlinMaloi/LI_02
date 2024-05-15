import { fetchData } from './activity.js';

/**
 *   
 * @param {string} activity
 */
function updateActivity(activity) {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = activity;
}

/**
 * 
 */
async function updateDataPeriodically() {
    try {
        const data = await fetchData();
        if (data) {
            updateActivity(data.activity);
        } else {
            updateActivity('К сожалению, произошла ошибка');
        }
    } catch (error) {
        console.log('Error updating data:', error);
        updateActivity('К сожалению, произошла ошибка');
    } finally {
        setTimeout(updateDataPeriodically, 60000); // Обновление каждую минуту (60000 миллисекунд)
    }
}

// Запуск обновления данных при загрузке страницы
updateDataPeriodically();

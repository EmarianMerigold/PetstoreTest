//Импорт библиотеки 'axios' для работы с http-запросами.
import axios from 'axios';
//Импорт типов
import { Pet } from '../types';

describe('DELETE: /pet/{petId} | Расширенные тесты для удаления данных о питомце по ID:', () => {

    test('1. Удаление данных о питомце по несуществующему ID', async () => {
        //ОР: код 404
        
        const petId = 99999999;
        try {
            const response = await axios.delete<Pet>(`https://petstore.swagger.io/v2/pet/${petId}`);
            // Если запрос не выбрасывает исключение, проверяется статус
            expect(response.status).not.toBe(200); // Не ожидаем успешного ответа
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                expect(error.response.status).toBe(404);
            } else {
                throw error; // Перебрасываем ошибку, если это не HTTP ошибка
            }
        }
    });

});
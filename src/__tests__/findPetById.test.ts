
//Импорт библиотеки 'axios' для работы с http-запросами.
import axios from 'axios';
//Импорт типов
import { Pet } from '../types';

describe('GET: /pet/{petId} | Расширенные тесты для поиска питомца по ID:', () => {

    test('1. Поиск питомца по несуществующему ID', async () => {
        //ОР: код 404
        
        const petId = 99999999;
        try {
            const response = await axios.get<Pet>(`https://petstore.swagger.io/v2/pet/${petId}`);
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
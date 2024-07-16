//Импорт библиотеки 'axios' для работы с http-запросами.
import axios from 'axios';
//Импорт типов
import { Pet } from '../types';

describe('POST: /pet/{petId} | Расширенные тесты для редактирования информации о статусе питомца с помощью данных формы:', () => {

    test('1. Редактирование информации о статусе питомца с несуществующим ID', async () => {
        //ОР: код 404
        
        const petId = 99999999999999;

        // Создание объекта FormData для передачи статуса в заголовке
        const formData = new URLSearchParams();
        formData.append('status', 'sold');
    
        // Создание конфигурации заголовков
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
          }
        };
    
        try {
            const response = await axios.post<Pet>(`https://petstore.swagger.io/v2/pet/${petId}`, formData.toString(), config);
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


    test('2. Редактирование информации о статусе питомца с несуществующим статусом', async () => {
        //ОР: код 404
        
        const petId = 11133322278;

        // Создание объекта FormData для передачи статуса в заголовке
        const formData = new URLSearchParams();
        formData.append('status', 'neizvestniy');
    
        // Создание конфигурации заголовков
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
          }
        };
    
        try {
            const response = await axios.post<Pet>(`https://petstore.swagger.io/v2/pet/${petId}`, formData.toString(), config);
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
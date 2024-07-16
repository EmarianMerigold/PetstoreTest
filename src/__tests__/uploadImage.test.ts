//Импорт библиотеки 'axios' для работы с http-запросами.
import axios from 'axios';

//Импорт модулей для работы с FormData
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

//Импорт типов
import { Pet } from '../types';

describe('POST: /pet/{petId}/uploadImage | Расширенные тесты загрузки изображений питомца:', () => {

    test('1. Отправка запроса без форм-даты', async () => {
        //ОР: код 415
        
        const petId = 11133322278;
        try {
            const response = await axios.post<Pet>(`https://petstore.swagger.io/v2/pet/${petId}/uploadImage`)
            // Если запрос не выбрасывает исключение, проверяется статус
            expect(response.status).not.toBe(200); // Не ожидаем успешного ответа
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                expect(error.response.status).toBe(415);
            } else {
                throw error; // Перебрасываем ошибку, если это не HTTP ошибка
            }
        }
    });

});
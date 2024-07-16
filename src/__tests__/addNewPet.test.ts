//Импорт библиотеки 'axios' для работы с http-запросами.
import axios from 'axios';
//Импорт типов
import { Pet } from '../types';

describe('POST: /pet} | Расширенные тесты для добавления нового питомца:', () => {

    test('1. Добавление нового питомца с уже существующим ID', async () => {
        //ОР: код 404

        //Создание объекта newPet структуры Pet
        const newPet: Pet = {
            id: 5,
            category: {
                id: 1,
                name: 'cat'
            },
            name: 'Vasya',
            photoUrls: ['string'],
            tags: [
                {
                    id: 2,
                    name: 'Big cat'
                }
            ],
            status: 'available'
        };

        const response = await axios.post<Pet>('https://petstore.swagger.io/v2/pet', newPet);

        //Проверка ответа
        expect(response.status).toBe(404);

    });

    test('2. Отправка запроса без body-параметров', async () => {
        //ОР: код 415

        try {
            const response = await axios.post('https://petstore.swagger.io/v2/pet');
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

    test('3. Добавление нового питомца с хаотичным порядком body-параметров', async () => {
        //ОР: код 200

        //Создание объекта newPet структуры Pet
        const newPet: Pet = {
            category: {
                id: 1,
                name: 'cat'
            },
            id: 11133322278,
            photoUrls: ['string'],
            status: 'available',
            tags: [
                {
                    id: 2,
                    name: 'Big cat'
                }
            ],
            name: 'Vasya',
        };

        const response = await axios.post<Pet>('https://petstore.swagger.io/v2/pet', newPet);

        //Проверка ответа
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({
            id: 11133322278,
            category: { id: 1, name: 'cat' },
            name: 'Vasya',
            photoUrls: ['string'],
            tags: [{ id: 2, name: 'Big cat' }],
            status: 'available'
          });

    });

});
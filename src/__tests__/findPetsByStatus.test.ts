
//Импорт библиотеки 'axios' для работы с http-запросами.
import axios from 'axios';
//Импорт типов
import { Pet } from '../types';

describe('GET: /pet/findByStatus | Расширенные тесты для поиска питомцев по статусу:', () => {

    test('1. Поиск питомцев по несуществующему статусу', async () => {
       //ОР: код 200, пустое тело ответа

        const status = "vactivnompoiske";
        //try {
            const response = await axios.get<Pet>(`https://petstore.swagger.io/v2/pet/findByStatus?${status}`)
        // Проверяем, что тело ответа пустое (если API возвращает пустой список)
        expect(response.status).toBe(200);
        expect(response.data).toEqual([]);
    });

});
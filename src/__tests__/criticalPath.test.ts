//Тест критического пути. Проверка того, что последовательное выполнение основных сценариев
// с валидными данными выполняется успешно.
// ОР: в ответе на каждый запрос категории PET приходит код 200.

//Импорт библиотеки 'axios' для работы с http-запросами.
import axios from 'axios';

//Импорт модулей для работы с FormData
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

//Импорт типов
import { Pet } from '../types';

describe('Тест критического пути для Petstore API:', () => {


  test('1. Добавление нового питомца', async () => {

    //Создание объекта newPet структуры Pet
    const newPet: Pet = {
      id: 545,
      category: {
        id: 1,
        name: 'cat'
      },
      name: 'Momo',
      photoUrls: ['string'],
      tags: [
        {
          id: 10,
          name: 'Black cat'
        }
      ],
      status: 'available'
    };

    const response = await axios.post<Pet>('https://petstore.swagger.io/v2/pet', newPet);

    //Проверка ответа
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      id: 545,
      category: { id: 1, name: 'cat' },
      name: 'Momo',
      photoUrls: ['string'],
      tags: [{ id: 10, name: 'Black cat' }],
      status: 'available'
    });
  });


  test('2. Редактирование информации о питомце', async () => {
    //Изменение клички питомца
    //Изменение id и название тега
    //Изменение статуса

    //Создание объекта updatedPet структуры Pet
    const updatedPet: Pet = {
      id: 545,
      category: {
        id: 1,
        name: 'cat'
      },
      name: 'Mumu',
      photoUrls: ['string'],
      tags: [
        {
          id: 20,
          name: 'Black joyful cat'
        }
      ],
      status: 'pending'
    };

    const response = await axios.put<Pet>('https://petstore.swagger.io/v2/pet', updatedPet);

    //Проверка ответа
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      id: 545,
      category: { id: 1, name: 'cat' },
      name: 'Mumu',
      photoUrls: ['string'],
      tags: [{ id: 20, name: 'Black joyful cat' }],
      status: 'pending'
    });
  });


  test('3. Редактирование информации о статусе питомца с помощью данных формы', async () => {

    const petId = 545;

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

    // Отправка запроса с заголовками FormData и config
    const response = await axios.post<Pet>(`https://petstore.swagger.io/v2/pet/${petId}`, formData.toString(), config);

    //Проверка ответа
    expect(response.status).toBe(200);

  });


  test('4. Загрузка изображений питомца', async () => {
    const petId = 1;

    // Создание объекта FormData для передачи изображения из локальной директории /images
    const formData = new FormData();
    formData.append('additionalMetadata', 'testSEO');
    formData.append('file', fs.createReadStream(path.resolve(__dirname, '../images/u4lwyv4qsm22waej8ffllx967qwv652c.jpg')));

    // Отправка запроса с заголовками FormData
    const response = await axios.post<Pet>(`https://petstore.swagger.io/v2/pet/${petId}/uploadImage`, formData, {
      headers: {
        ...formData.getHeaders()
      } // Автоматическое добавление заголовков для FormData
    });

    //Проверка ответа
    expect(response.status).toBe(200);
  });


  test('5. Поиск питомца по ID', async () => {
    const petId = 545;
    const response = await axios.get<Pet>(`https://petstore.swagger.io/v2/pet/${petId}`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 545);
  });


  test('6. Поиск питомцев по статусу', async () => {
    const status = "sold";
    const response = await axios.get<Pet>(`https://petstore.swagger.io/v2/pet/findByStatus?${status}`);

    //Проверка ответа
    expect(response.status).toBe(200);
  });


  test('7. Удаление информации о питомце по ID', async () => {
    const petId = 545;

    const response = await axios.delete<Pet>(`https://petstore.swagger.io/v2/pet/${petId}`);

    //Проверка ответа
    expect(response.status).toBe(200);

  });
});
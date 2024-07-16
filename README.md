1. Описание

В рамках тестового задания #4 было реализован набор автотестов с помощью фреймворка Jest и языка typescript.

Проект включает в себя следующие классы тестовых наборов:
- criticalPath.test.ts - Тест критического пути. Проверка того, что последовательное выполнение основных сценариев с валидными данными выполняется успешно.
- addNewPet.test.ts - Расширенные тесты для добавления нового питомца
- deleteAPet.test.ts - Расширенные тесты для удаления данных о питомце по ID
- findPetById.test.ts - Расширенные тесты для поиска питомца по ID
- updatePet.test.ts - Расширенные тесты для редактирования информации о питомце
- updatepetWithFormData.test.ts - Расширенные тесты для редактирования информации о статусе питомца с помощью данных формы
- uploadImage.test.ts - Расширенные тесты загрузки изображений питомца

Впомогательные классы:
- types.ts - содержит правила типизации, благодаря чему сократилось кол-во необходимых тестов для проверки валидации


2. Структура

- src - общая директория с файлами кода
- _tests_ - содержит перечень всех классов с тестовыми наборами
- images - содержит изображения для использования в методе загрузки изображений из локальной директории
- package.json - конфигурационный файл
- jest.config - конфигурационный файл
- tsconfig.json - конфигурационный файл

3. Настройка среды

    - Клонирование репозитория. 
    Сначала необходимо клонировать репозиторий с GitHub на локальную машину. Для этого откройте терминал и выполните команду:

    git clone https://github.com/EmarianMerigold/PetstoreTest.git

    - Переход в директорию проекта:
    После клонирования перейдите в директорию проекта:

    cd /PetstoreTest

    - Установка зависимостей:
    Убедитесь, что у вас установлен Node.js и npm. Для установки npm используйте следующую команду:

    npm install

    - Установка необходимых пакетов:
    Убедитесь, что у вас установлены необходимые пакеты для работы с Jest и библиотеки axios. 
    Для установки используйте следующую команду:

    npm install jest ts-jest typescript @types/jest axios --save-dev


4. Запуск тестов

Запуск тестов необходимо выполнять в терминале директории проекта PetstoreTest

- npm test - запуск всех тестов проекта
- npm test <название класса> - запуск конкретного набора тестов. Пример: npm test criticalPath.test.ts

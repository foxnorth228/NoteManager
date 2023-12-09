# Тестовое задание Менеджер Заметок

## Команды

```yarn install``` - команда установки зависимостей

```yarn run build``` - команда сборки проекта в папку public

```yarn run dev``` - команда для запуска dev сервера

```yarn run lint``` - команда для проверки синтаксиса (eslint)

```yarn run lint:fix``` - команда для проверкии исправления синтаксиса (eslint)

## Деплой

[Деплой на Netlify](https://master--fascinating-tiramisu-4a042f.netlify.app/)

##  Стек

* Typescript
* React (React hooks)
* Reduxjs/toolkit
* Material UI
* SCSS, Babel, Eslint + prettier
* IndexedDb
* Сборка с помощью webpack
* Менеджер пакетов yarn

## Файловая структура

* components - папка с основными компонентами
* config - папка с глобальными статическими данными
* layouts - папка для крупных блоков сайта, больше компонента, но меньше страницы
* pages - папка со страницами. Т.к. сайт SPA, страницей стал только App
* store - папка с хранилищем Redux
* utils - папка с полезным функционалом, не относящимся к React. Например, indexedDb и theme

## Структура компонента

* index - основной файл компонента
* style - папка со стилями (в данном проекте только в HighlightText)
* types - папка с типаи данных typescript
* config - папка с локальными статическими данными

## Именование

- Названия компонентов и их папок: PascalCase
- Название файлов: camelCase
- Остальные переменные: camelCase
- Интерфейсы всегда начинаются с заглавной I, PascalCase
- Типы начинаются с заглавной T, PascalCase

## Остальное

Протестировано с помощью PageSpeed Insights
# To-Do List

Это приложение To-Do List, разработанное с использованием React и Redux-toolkit. Оно предоставляет базовые функции для управления задачами, а также поддерживает несколько категорий задач, таких как текущие, выполненные и удаленные.

## Функционал

- **Добавление задачи**: Вы можете добавлять новые задачи.
- **Удаление задачи**: Каждую задачу можно удалить.
- **Удаление всех задач**: В приложении есть возможность удалить все задачи за один раз.
- **Категории задач**:
  - **Текущие дела**: Задачи, которые еще не выполнены.
  - **Все дела**: Все задачи, включая выполненные и удаленные.
  - **Выполненные дела**: Задачи, которые были отмечены как выполненные.
  - **Корзина**: Удаленные задачи, которые можно окончательно удалить.

## Авторизация:
- Логин: admin, пароль: admin.
- После авторизации данные сохраняются и не сбрасываются при перезагрузке страницы.

## Просмотр сайта

Нажмите на изображение ниже, чтобы посмотреть наш сайт! Или используйте [ссылку](https://dariasdemidova.github.io/ToDo/).
[<img width="1440" alt="Снимок экрана 2024-11-14 в 16 49 47" src="https://github.com/user-attachments/assets/a346d4c4-abd6-48f2-bf9c-7846130a1f0e">](https://dariasdemidova.github.io/ToDo/)

## Используемые технологии

![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white)
![Typescript](https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

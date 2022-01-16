# IT EXPERT HR PORTAL
Мок-ап: [https://www.figma.com/file/3LRo26WXvpV9NckCrqdPE5/IT-Expert-HR](https://www.figma.com/file/3LRo26WXvpV9NckCrqdPE5/IT-Expert-HR)
Превью: [https://jaderemi.github.io/hr-portal/](https://jaderemi.github.io/hr-portal/)

## Команды сборки
### `npm i`
Устанавливает все зависимости проекта после первого скачивания.
### `npm start`
Запускает проект локально на [http://localhost:3000](http://localhost:3000) в браузере.
### `npm run build`
Собирает минифицированную версию проекта в папке /build.

## Страницы проекта
- Заглавная страница (/announce)
- Список вакансий (/vacancies)
- О вакансии (/position)
- Тестовое задание в двух стилях (/testing)
- Календарь (/schedule)
- Модальное окно (/modal)

Для модального окна доступны экраны из каталога /screens: ожидание (/wait), отправка (/sent), и форма обратной связи (/feedback).
При клике по кнопке на экране Тестового задания ("Получить тестовое задание") появляются модальные окна ожидания и отправки, а также меняется стиль страницы. При клике по кнопке на экране Вакансий ("Задать вопрос") появляется модальное окно обратной связи.

Локализация доступна в /data/data.json.
Вызов API выполняется в /components/functions/api.

При возникновении при первом запуске ошибки "CSS error, found orphan CR, try removeCR option" следует переключить режим с CRLF на LF в своей IDE.

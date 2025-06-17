Данный проект создан на базе Gulp.
Чтобы проект работал, на вашем устройстве должен быть установлен Node.js и gulp глобально.
Вот команда для установки gulp на ваше устройство: npm install --global gulp-cli
После этого нужно установить сам gulp и плагины для него. Команда для установки плагинов: npm i "плагин" --save-dev.

Проект разделен на две версии: Dev и Docs.
Чтобы запустить Dev версию проекта, нужно прописать в терминале команду gulp.
Чтобы запустить Docs версию проекта, нужно прописать в терминале команду gulp docs.

В данной сборке Gulp использовались следующие плагины:
- gulp-babel;
- css-loader;
- gulp-autoprefixer;
- gulp-changed;
- gulp-csso;
- gulp-htmlclean;
- gulp-imagemin;
- gulp-sass;
- sass;
- style-loader;
- webpack-stream;
- gulp-webp-html;
- gulp-webp-css;
- gulp-webp;
- gulp-notify;
- gulp-plumber;
- gulp-sass-glob;
- gulp-server-livereload;
- gulp-sourcemaps;
- gulp-clean;
- gulp-file-include;
- gulp-group-css-media-queries.

В данном проекте с помощью JavaScript реализованы:
- Модальное окно;
- Форма для подписки на рассылку;
- Переключение между блоками с помощью radio-button(Блоки "Цены" и "Комплектующие");
- Кнопка "Вверх";
- С помощью библиотеки Swiper.js реализован слайдер;
- "Бургер-меню" в мобильной версии;
- Карта с возможностью построения маршрута и заказа такси.

Данный проект полностью адаптирован под мобильные устройства (ширина 375px и ниже).

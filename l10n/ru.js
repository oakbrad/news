OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Запрос не удался, нет сетевого соединения!",
    "Request unauthorized. Are you logged in?" : "Запрос не авторизован. Вы вошли в систему?",
    "Request forbidden. Are you an admin?" : "Запрос запрещён. Вы действительно являетесь администратором?",
    "Token expired or app not enabled! Reload the page!" : "Срок действия токена истёк или приложение не включено! Перезагрузите страницу!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Внутренняя ошибка сервера! Пожалуйста, для получения дополнительной информации проверьте журнал в файле data/nextcloud.log!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Запрос не удался, в настоящий момент Nextcloud включен в режиме обслуживания!",
    "Feed contains invalid XML" : "В ленте присутствует недействительный XML",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "Лента не найдена: или сайт не предоставляет ленту, или доступ заблокирован. Чтобы определить блокировку, попробуйте загрузить ленту с командной строки в вашем сервере, используя curl: curl ",
    "Detected feed format is not supported" : "Обнаруженный формат ленты не поддерживается",
    "Website not found" : "Сайт не найден",
    "More redirects than allowed, aborting" : "Количество перенаправлений больше допустимого, отменяем",
    "Bigger than maximum allowed size" : "Больше максимально допустимого размера",
    "Request timed out" : "Превышено время ожидания запроса",
    "Required credentials for feed were either missing or incorrect" : "Запрошенные аутентификационные данные для ленты отсутствуют или некорректны",
    "Forbidden to access feed" : "Доступ к ленте запрещён",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "Ошибка сертификата: Возникла проблема где-то в соединении SSL/TLS. Может быть связано с сертификатами (форматы файлов, пути, права), паролями, или чем-то ещё.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "Ошибка сертификата: Сертификат SSL удалённого сервера или отпечаток md5 в SSH оказался не в порядке.",
    "Certificate error: Problem with the local client certificate." : "Ошибка сертификата: Проблема с локальным сертификатом клиента.",
    "Certificate error: Couldn't use specified cipher." : "Ошибка сертификата: Не удалось использовать заданный шифр.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "Ошибка сертификата: Сертификат удалённого узла не удалось аутентифицировать с помощью известных сертификатов УЦ.",
    "Certificate error: Requested FTP SSL level failed." : "Ошибка сертификата: Не удалось установить запрошенный уровень SSL для FTP.",
    "Certificate error: Initiating the SSL engine failed." : "Ошибка сертификата: Не удалось инициализировать механизм SSL.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "Ошибка сертификата: Проблема при чтении сертификата УЦ для SSL (путь? права доступа?)",
    "Certificate error: Issuer check failed" : "Ошибка сертификата: Не удалась проверка издателя",
    "Unknown SSL certificate error!" : "Неизвестная ошибка сертификата SSL!",
    "Can not add feed: Exists already" : "Не удаётся добавить ленту: Уже существует",
    "Articles without feed" : "Статьи без новостной ленты",
    "Can not add folder: Exists already" : "Не удаётся добавить папку. Папка уже существует",
    "News" : "Новости",
    "Use system cron for updates" : "Для получения обновлений используйте системный cron",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Отключите, если собираетесь использовать другой механизм обновлений, например, Python updater, включенный в поставку этого приложения",
    "Purge interval" : "Интервал очистки",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Минимальное количество секунд, после которого удалённые ленты и папки будут удалены из базы данных; значения меньше 60 секунд будут проигнорированы",
    "Maximum read count per feed" : "Максимальное количество статей для ленты",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Максимальное количество прочитанных статей для каждой ленты, которые не будут удалены при очистке; если старые статьи появляются снова после прочтения, то увеличьте это значение; отрицательные значения, например, -1, полностью отключает эту функцию.",
    "Maximum redirects" : "Максимум перенаправлений",
    "How many redirects the feed fetcher should follow" : "Сколько перенаправлений должен обрабатывать загрузчик ленты",
    "Maximum feed page size" : "Максимальный размер страницы для ленты",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Максимальный размер ленты в байтах. Если размер страницы RSS/Atom больше этого значения, обновление будет отменено",
    "Feed fetcher timeout" : "Время ожидания для загрузчика ленты",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Максимальное количество секунд ожидания загрузки ленты RSS или Atom; если обновление занимает больше времени, то оно будет отменено",
    "Explore Service URL" : "URL службы обзора",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Если указано, то URL службы будет опрашиваться для отображения лент в секции обзора. Для использования встроенной службы, оставьте поле пустым.",
    "For more information check the wiki" : "Для получения дополнительной информации обратитесь к wiki",
    "Saved" : "Сохранено",
    "Download" : "Скачать",
    "Close" : "Закрыть",
    "filter" : "фильтр",
    "Language" : "Язык",
    "Subscribe" : "Подписаться",
    "Got more awesome feeds? Share them with us!" : "Нашли классный фид? Поделитесь с нами!",
    "No articles available" : "Нет доступных статей",
    "No unread articles available" : "Нет непрочтённых статей",
    "Open website" : "Открыть веб-сайт",
    "Star article" : "Добавить в избранное",
    "Unstar article" : "Убрать из избранного",
    "Keep article unread" : "Оставить статью непрочитанной",
    "Remove keep article unread" : "Удалить отметку от непрочтении",
    "by" : "автор",
    "from" : "из",
    "Play audio" : "Проиграть аудио-запись",
    "Download video" : "Скачать видео",
    "Download audio" : "Скачать аудио-запись",
    "Keyboard shortcut" : "Горячие клавиши",
    "Description" : "Описание",
    "right" : "направо",
    "Jump to next article" : "Перейти на следующую статью",
    "left" : "налево",
    "Jump to previous article" : "Перейти на предыдущую статью",
    "Toggle star article" : "Добавить/убрать из избранного",
    "Star article and jump to next one" : "Добавить статью в избранное и перейти к следующей",
    "Toggle keep current article unread" : "Переключатель пометки текущей статьи непрочитанной",
    "Open article in new tab" : "Открыть статью в новой вкладке",
    "Toggle expand article in compact view" : "Открывать статью при просмотре в компактном режиме",
    "Refresh" : "Обновить",
    "Load next feed" : "Загрузить следующую ленту",
    "Load previous feed" : "Загрузить предыдущую ленту",
    "Load next folder" : "Загрузить следующую папку",
    "Load previous folder" : "Загрузить предыдущую папку",
    "Scroll to active navigation entry" : "Прокрутить к выбранному элементу",
    "Focus search field" : "Перейти на поле поиска",
    "Mark current article's feed/folder read" : "Пометить папку текущей статьи как прочитанную",
    "Ajax or Web cron mode detected! Your feeds will not be updated!" : "Обнаружен режим планировщика задач Ajax или Веб! Ваши ленты не будут обновляться!",
    "How to set up the operating system cron" : "Как настроить cron (планировщик задач) операционной системы",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Установить и настроить более быстрое средство параллельного обновления, которое использует собственный API обновлений приложения новостей",
    "Non UTF-8 charset for MySQL/MariaDB database detected!" : "База данных MySQL/MariaDB использует кодировку, отличную от UTF-8!",
    "Learn how to convert your database to utf8mb4 (make a backup beforehand)" : "Узнайте как сконвертировать вашу базу данных в кодировку utf8mb4 (сначала создайте резервную копию)",
    "Web address" : "Веб адрес",
    "Feed exists already!" : "Лента уже существует!",
    "Folder" : "Папка",
    "No folder" : "Нет папки",
    "New folder" : "Новая папка",
    "Folder name" : "Имя папки",
    "Go back" : "Вернуться назад",
    "Folder exists already!" : "Папка уже существует!",
    "Advanced settings" : "Расширенные настройки",
    "Credentials" : "Учётные данные",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Аутентификационные данные HTTP Basic придётся сохранить в незашифрованном виде! Каждый, у кого есть доступ внутрь сервера или в базу данных, сможет прочитать их!",
    "Username" : "Имя пользователя",
    "Password" : "Пароль",
    "New Folder" : "Новая папка",
    "Create" : "Создать",
    "Explore" : "Обзор",
    "Update failed more than 50 times" : "Не удалось выполнить обновление более 50 раз",
    "Deleted feed" : "Удалённая лента",
    "Undo delete feed" : "Отменить удаление ленты",
    "Rename" : "Переименовать",
    "Menu" : "Меню",
    "Mark read" : "Пометить прочтённым",
    "Unpin from top" : "Открепить сверу",
    "Pin to top" : "Прикрепить вверху",
    "Newest first" : "Новые-старые",
    "Oldest first" : "Старые-новые",
    "Default order" : "Порядок по умолчанию",
    "Enable full text" : "Включить полный текст",
    "Disable full text" : "Отключить полный текст",
    "Unread updated" : "Непрочитанное обновлено",
    "Ignore updated" : "Игнорировать обновлённые",
    "Delete" : "Удалить",
    "Dismiss" : "Убрать",
    "Collapse" : "Свернуть",
    "Deleted folder" : "Удаленная папка",
    "Undo delete folder" : "Отменить удаление папки",
    "Starred" : "Избранное",
    "Unread articles" : "Непрочтённые статьи",
    "All articles" : "Все статьи",
    "Settings" : "Настройки",
    "Disable mark read through scrolling" : "Отключить установку отметок о прочтении при прокрутке",
    "Compact view" : "Компактный вид",
    "Expand articles on key navigation" : "Раскрывать статьи при навигации клавишами",
    "Show all articles" : "Показать все статьи",
    "Reverse ordering (oldest on top)" : "Обратный порядок (самые старые сверху)",
    "Subscriptions (OPML)" : "Подписки (OPML)",
    "Import" : "Импорт",
    "Export" : "Экспорт",
    "Error when importing: File does not contain valid OPML" : "Ошибка импорта: В файле не найден корректный OPML ",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Ошибка при импорте: в OPML нет ни лент, ни папок",
    "Unread/Starred Articles" : "Непрочтенные/Избранные статьи",
    "Error when importing: file does not contain valid JSON" : "Ошибка при импорте: файл не содержит правильный JSON",
    "Help" : "Помощь",
    "Keyboard shortcuts" : "Горячие клавиши",
    "Documentation" : "Документация",
    "Report a bug" : "Сообщить об ошибке"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");

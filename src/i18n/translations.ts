import type { Language } from '../types'

const ru = {
  nav_services: 'Услуги',
  nav_about: 'Обо мне',
  nav_cta: 'Оставить заявку',

  hero_eyebrow: 'Full-stack разработчик · Telegram-боты',
  hero_title: 'Беру задачу — довожу до продакшена.',
  hero_subtitle:
    'Telegram-боты, веб-приложения, интеграции. Пишите напрямую мне — без менеджеров и очередей.',
  hero_cta_primary: 'Выбрать услугу',
  hero_cta_secondary: 'Обо мне',

  terminal_status: '→ заявка принята, начинаю оценку…',
  terminal_ticket: '→ номер заявки:',

  services_title: 'Услуги',
  services_subtitle: 'Нажмите на услугу, чтобы оставить заявку.',
  service_order_button: 'Заказать',

  modal_request_for: 'Заявка на услугу',
  modal_price_label: 'Стоимость',
  modal_name_label: 'Имя',
  modal_name_placeholder: 'Как к вам обращаться',
  modal_contact_label: 'Контакт (Telegram / телефон / email)',
  modal_contact_placeholder: '@username или +998...',
  modal_message_label: 'Что нужно сделать',
  modal_message_placeholder: 'Опишите задачу и сроки',
  modal_submit: 'Отправить заявку',
  modal_required_note: '* обязательные поля',
  modal_error: 'Заполните имя, контакт и описание задачи.',
  modal_success_title: 'Заявка принята',
  modal_success_ticket: 'Номер заявки:',
  modal_success_subtitle: 'Сохраните номер — я свяжусь с вами в ближайшее время.',
  modal_success_again: 'Отправить ещё одну заявку',
  modal_close: 'Закрыть',

  about_eyebrow: 'Обо мне',
  about_role: 'Full-stack разработчик · Telegram-боты · IT-решения под ключ',
  about_phone_label: 'Телефон',
  about_description:
    'Разрабатываю Telegram-ботов, веб-приложения и интеграции. Работаю напрямую с клиентом — от постановки задачи до запуска.',

  footer_rights: 'Все заявки — по существу.',
  footer_admin_link: 'Админ-панель',

  admin_login_title: 'Вход в админ-панель',
  admin_login_subtitle: 'Доступно только владельцу сайта.',
  admin_password_label: 'Пароль',
  admin_password_placeholder: 'Введите пароль',
  admin_login_button: 'Войти',
  admin_wrong_password: 'Неверный пароль.',

  admin_back_to_site: '← На сайт',
  admin_logout: 'Выйти',

  admin_tab_services: 'Услуги и цены',
  admin_tab_orders: 'Заявки',

  admin_add_service: 'Добавить услугу',
  admin_edit_service: 'Изменить',
  admin_delete_service: 'Удалить',
  admin_delete_confirm: 'Удалить эту услугу?',
  admin_field_title: 'Название',
  admin_field_description: 'Описание',
  admin_field_price: 'Цена',
  admin_save: 'Сохранить',
  admin_cancel: 'Отмена',
  admin_services_empty: 'Пока нет ни одной услуги.',

  admin_orders_empty: 'Пока нет ни одной заявки.',
  admin_orders_count: 'заявок в базе',
  admin_clear_orders: 'очистить список',
  admin_status_new: 'Новая',
  admin_status_in_progress: 'В работе',
  admin_status_done: 'Готово',

  admin_table_ticket: 'Номер',
  admin_table_name: 'Имя',
  admin_table_contact: 'Контакт',
  admin_table_service: 'Услуга',
  admin_table_message: 'Задача',
  admin_table_date: 'Дата',
  admin_table_status: 'Статус',

  admin_storage_note:
    'Данные хранятся локально в браузере (localStorage) — это демо-режим без сервера. Для приёма заявок с разных устройств нужен бэкенд (см. README).',
}

const en: typeof ru = {
  nav_services: 'Services',
  nav_about: 'About',
  nav_cta: 'Get in touch',

  hero_eyebrow: 'Full-stack developer · Telegram bots',
  hero_title: 'I take the task and ship it to production.',
  hero_subtitle:
    'Telegram bots, web apps, integrations. Message me directly — no managers, no queues.',
  hero_cta_primary: 'Choose a service',
  hero_cta_secondary: 'About me',

  terminal_status: '→ request accepted, starting the estimate…',
  terminal_ticket: '→ ticket number:',

  services_title: 'Services',
  services_subtitle: 'Click a service to send a request.',
  service_order_button: 'Order',

  modal_request_for: 'Request for',
  modal_price_label: 'Price',
  modal_name_label: 'Name',
  modal_name_placeholder: 'How should I call you',
  modal_contact_label: 'Contact (Telegram / phone / email)',
  modal_contact_placeholder: '@username or +998...',
  modal_message_label: 'What needs to be done',
  modal_message_placeholder: 'Describe the task and deadline',
  modal_submit: 'Send request',
  modal_required_note: '* required fields',
  modal_error: 'Please fill in your name, contact and task description.',
  modal_success_title: 'Request received',
  modal_success_ticket: 'Ticket number:',
  modal_success_subtitle: "Save this number — I'll get back to you shortly.",
  modal_success_again: 'Send another request',
  modal_close: 'Close',

  about_eyebrow: 'About me',
  about_role: 'Full-stack developer · Telegram bots · End-to-end IT solutions',
  about_phone_label: 'Phone',
  about_description:
    'I build Telegram bots, web apps and integrations. I work directly with the client — from the first call to launch.',

  footer_rights: 'Every request gets a real answer.',
  footer_admin_link: 'Admin panel',

  admin_login_title: 'Admin panel login',
  admin_login_subtitle: 'Only the site owner can access this.',
  admin_password_label: 'Password',
  admin_password_placeholder: 'Enter password',
  admin_login_button: 'Log in',
  admin_wrong_password: 'Wrong password.',

  admin_back_to_site: '← Back to site',
  admin_logout: 'Log out',

  admin_tab_services: 'Services & prices',
  admin_tab_orders: 'Requests',

  admin_add_service: 'Add service',
  admin_edit_service: 'Edit',
  admin_delete_service: 'Delete',
  admin_delete_confirm: 'Delete this service?',
  admin_field_title: 'Title',
  admin_field_description: 'Description',
  admin_field_price: 'Price',
  admin_save: 'Save',
  admin_cancel: 'Cancel',
  admin_services_empty: 'No services yet.',

  admin_orders_empty: 'No requests yet.',
  admin_orders_count: 'requests in the database',
  admin_clear_orders: 'clear list',
  admin_status_new: 'New',
  admin_status_in_progress: 'In progress',
  admin_status_done: 'Done',

  admin_table_ticket: 'Ticket',
  admin_table_name: 'Name',
  admin_table_contact: 'Contact',
  admin_table_service: 'Service',
  admin_table_message: 'Task',
  admin_table_date: 'Date',
  admin_table_status: 'Status',

  admin_storage_note:
    'Data is stored locally in the browser (localStorage) — this is a serverless demo. To receive requests from other devices you need a backend (see README).',
}

const uz: typeof ru = {
  nav_services: 'Xizmatlar',
  nav_about: 'Men haqimda',
  nav_cta: "Ariza qoldirish",

  hero_eyebrow: "Full-stack dasturchi · Telegram botlar",
  hero_title: "Vazifani olib, ishlab chiqarishga yetkazaman.",
  hero_subtitle:
    "Telegram botlar, veb-ilovalar, integratsiyalar. To'g'ridan-to'g'ri menga yozing — menejerlarsiz.",
  hero_cta_primary: "Xizmat tanlash",
  hero_cta_secondary: "Men haqimda",

  terminal_status: "→ ariza qabul qilindi, baholash boshlandi…",
  terminal_ticket: "→ ariza raqami:",

  services_title: 'Xizmatlar',
  services_subtitle: "Ariza qoldirish uchun xizmatni bosing.",
  service_order_button: 'Buyurtma berish',

  modal_request_for: 'Ariza:',
  modal_price_label: 'Narxi',
  modal_name_label: 'Ism',
  modal_name_placeholder: "Sizga qanday murojaat qilsak bo'ladi",
  modal_contact_label: 'Aloqa (Telegram / telefon / email)',
  modal_contact_placeholder: '@username yoki +998...',
  modal_message_label: 'Nima qilish kerak',
  modal_message_placeholder: "Vazifa va muddatni tasvirlab bering",
  modal_submit: 'Arizani yuborish',
  modal_required_note: '* majburiy maydonlar',
  modal_error: "Ism, aloqa va vazifa tavsifini to'ldiring.",
  modal_success_title: 'Ariza qabul qilindi',
  modal_success_ticket: 'Ariza raqami:',
  modal_success_subtitle: "Raqamni saqlab qo'ying — tez orada bog'lanaman.",
  modal_success_again: 'Yana bitta ariza yuborish',
  modal_close: 'Yopish',

  about_eyebrow: 'Men haqimda',
  about_role: "Full-stack dasturchi · Telegram botlar · IT-yechimlar",
  about_phone_label: 'Telefon',
  about_description:
    "Telegram botlar, veb-ilovalar va integratsiyalar yarataman. Mijoz bilan to'g'ridan-to'g'ri ishlayman.",

  footer_rights: "Har bir ariza javobsiz qolmaydi.",
  footer_admin_link: 'Admin panel',

  admin_login_title: 'Admin panelga kirish',
  admin_login_subtitle: 'Faqat sayt egasi uchun.',
  admin_password_label: 'Parol',
  admin_password_placeholder: 'Parolni kiriting',
  admin_login_button: 'Kirish',
  admin_wrong_password: "Parol noto'g'ri.",

  admin_back_to_site: '← Saytga qaytish',
  admin_logout: 'Chiqish',

  admin_tab_services: 'Xizmatlar va narxlar',
  admin_tab_orders: 'Arizalar',

  admin_add_service: "Xizmat qo'shish",
  admin_edit_service: "O'zgartirish",
  admin_delete_service: "O'chirish",
  admin_delete_confirm: "Ushbu xizmatni o'chirasizmi?",
  admin_field_title: 'Nomi',
  admin_field_description: 'Tavsif',
  admin_field_price: 'Narxi',
  admin_save: 'Saqlash',
  admin_cancel: 'Bekor qilish',
  admin_services_empty: "Hozircha xizmatlar yo'q.",

  admin_orders_empty: "Hozircha arizalar yo'q.",
  admin_orders_count: 'ta ariza bazada',
  admin_clear_orders: "ro'yxatni tozalash",
  admin_status_new: 'Yangi',
  admin_status_in_progress: 'Jarayonda',
  admin_status_done: 'Tayyor',

  admin_table_ticket: 'Raqam',
  admin_table_name: 'Ism',
  admin_table_contact: 'Aloqa',
  admin_table_service: 'Xizmat',
  admin_table_message: 'Vazifa',
  admin_table_date: 'Sana',
  admin_table_status: 'Holat',

  admin_storage_note:
    "Ma'lumotlar brauzerda (localStorage) saqlanadi — bu server siz demo rejim. Boshqa qurilmalardan arizalarni qabul qilish uchun backend kerak (README-ga qarang).",
}

export const translations: Record<Language, typeof ru> = { ru, en, uz }
export type TranslationKey = keyof typeof ru

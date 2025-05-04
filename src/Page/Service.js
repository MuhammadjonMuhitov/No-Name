import React from 'react'
import './style/service.css'

export const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">🔧 Автосервис МММ</h1>
      <p className="service-intro">
        Надёжное обслуживание — основа долгой жизни вашего автомобиля. В сервисном центре <strong>МММ</strong> мы делаем всё, чтобы ваша машина оставалась в идеальном состоянии.
      </p>

      <h2 className="service-subtitle">🛠 Что мы предлагаем:</h2>
      <ul className="service-list">
        <li>Техническое обслуживание (ТО) по регламенту производителя</li>
        <li>Полная диагностика всех систем</li>
        <li>Ремонт двигателя, коробки, ходовой части</li>
        <li>Шиномонтаж, балансировка, сезонная замена шин</li>
        <li>Замена масел, фильтров, свечей и других расходников</li>
        <li>Ремонт и заправка кондиционеров</li>
        <li>Установка сигнализаций, парктроников, автозапуска</li>
      </ul>

      <h2 className="service-subtitle">⚙️ Почему выбирают нас:</h2>
      <ul className="service-list">
        <li>Сертифицированные мастера</li>
        <li>Оригинальные запчасти или качественные аналоги</li>
        <li>Прозрачная смета — никаких скрытых платежей</li>
        <li>Гарантия на все работы до 12 месяцев</li>
        <li>Уютная зона ожидания с Wi-Fi, кофе и ТВ</li>
      </ul>

      <h2 className="service-subtitle">📅 Как записаться:</h2>
      <p className="service-contact">
        Телефон: <strong>+998(99)555-53-55</strong><br />
        E-mail: <strong>service@mmm.ru</strong><br />
        Или через онлайн-форму ниже 👇
      </p>

      <p className="service-note">💬 Есть вопрос? Напишите нам — и мы подберём решение именно для вашего авто.</p>
    </div>
  )
}

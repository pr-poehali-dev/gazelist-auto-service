import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "О сервисе", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Settings",
    title: "Диагностика",
    desc: "Компьютерная диагностика всех систем автомобиля. Выявляем неисправности точно и быстро.",
    price: "от 500 ₽",
  },
  {
    icon: "Wrench",
    title: "Двигатель",
    desc: "Капитальный ремонт, замена ремней и цепей, устранение течей масла.",
    price: "от 3 000 ₽",
  },
  {
    icon: "Disc",
    title: "Тормозная система",
    desc: "Замена колодок, дисков, прокачка тормозов. Ваша безопасность — наш приоритет.",
    price: "от 1 200 ₽",
  },
  {
    icon: "Zap",
    title: "Электрика",
    desc: "Ремонт проводки, замена стартера, генератора, диагностика электронных блоков.",
    price: "от 800 ₽",
  },
  {
    icon: "Droplets",
    title: "ТО и замена масла",
    desc: "Плановое техническое обслуживание по регламенту производителя.",
    price: "от 2 000 ₽",
  },
  {
    icon: "Gauge",
    title: "Подвеска и рулевое",
    desc: "Замена амортизаторов, рычагов, тяг, наконечников, развал-схождение.",
    price: "от 1 500 ₽",
  },
];

const GALLERY_IMAGES = [
  {
    src: "https://cdn.poehali.dev/projects/9e597dc3-54ef-4282-bb5c-1e2a188625b1/files/37a8879b-9786-44ee-b635-09301e541340.jpg",
    title: "Рабочий бокс",
  },
  {
    src: "https://cdn.poehali.dev/projects/9e597dc3-54ef-4282-bb5c-1e2a188625b1/files/0327db18-0026-4598-b841-515455efa36d.jpg",
    title: "Работа с двигателем",
  },
  {
    src: "https://cdn.poehali.dev/projects/9e597dc3-54ef-4282-bb5c-1e2a188625b1/files/4b06da9c-d29a-4a24-91e9-4ecdbf325638.jpg",
    title: "Наш сервис",
  },
];

const REVIEWS = [
  {
    name: "Алексей М.",
    car: "Toyota Camry",
    rating: 5,
    text: "Отличный сервис! Сделали диагностику и устранили проблему с двигателем за один день. Цена адекватная, мастера профессиональные. Рекомендую!",
    date: "Март 2026",
  },
  {
    name: "Ирина К.",
    car: "Volkswagen Polo",
    rating: 5,
    text: "Обращаюсь уже третий раз. Всегда вежливо встречают, честно объясняют что и зачем делается. Никакого навязывания лишних работ.",
    date: "Февраль 2026",
  },
  {
    name: "Дмитрий С.",
    car: "Kia Rio",
    rating: 5,
    text: "Быстро заменили тормозные колодки и диски. Дали гарантию на работу. Цены ниже, чем у дилеров, а качество такое же.",
    date: "Январь 2026",
  },
  {
    name: "Олег П.",
    car: "Ford Focus",
    rating: 4,
    text: "Профессионально починили электрику — долго не могли найти причину. Здесь разобрались за пару часов. Буду обращаться снова.",
    date: "Декабрь 2025",
  },
];

const STATS = [
  { num: "12+", label: "лет опыта" },
  { num: "5000+", label: "довольных клиентов" },
  { num: "100%", label: "гарантия на работы" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
              <Icon name="Wrench" size={16} className="text-black" />
            </div>
            <span className="font-bold text-xl tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ГАЗЕ<span className="text-blue-500">ЛИСТ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="nav-link">
                {item.label}
              </button>
            ))}
          </div>

          <button className="hidden md:block btn-amber px-5 py-2 text-sm" onClick={() => scrollTo("#contacts")}>
            Записаться
          </button>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-[#1e1e1e] px-4 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="nav-link text-left">
                {item.label}
              </button>
            ))}
            <button className="btn-amber px-5 py-3 text-sm mt-2" onClick={() => scrollTo("#contacts")}>
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[#0d0d0d]" />
        <div className="absolute inset-0 stripe-bg" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-[2px] bg-blue-500" />
              <span className="text-blue-500 text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Профессиональный ремонт
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-none mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.03em' }}>
              РЕМОНТ<br />
              <span className="text-blue-500">АВТОМОБИЛЕЙ</span><br />
              <span className="text-white">ГАЗЕЛЬ</span><br />
              <span className="text-[#555] text-2xl sm:text-3xl">ЛЮБОЙ СЛОЖНОСТИ</span>
            </h1>

            <p className="text-[#999] text-lg mb-8 leading-relaxed animate-fade-in-up delay-200">
              Профессиональная диагностика и ремонт. 12 лет опыта,<br className="hidden sm:block" />
              современное оборудование, гарантия на все работы.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button className="btn-amber px-8 py-4 text-base" onClick={() => scrollTo("#contacts")}>
                Записаться на ремонт
              </button>
              <button className="btn-outline-amber px-8 py-4 text-base" onClick={() => scrollTo("#services")}>
                Наши услуги
              </button>
            </div>

            <div className="flex items-center gap-3 mt-10 animate-fade-in-up delay-400">
              <div className="w-10 h-10 border border-blue-500/40 flex items-center justify-center">
                <Icon name="Phone" size={18} className="text-blue-500" />
              </div>
              <div>
                <div className="text-[#666] text-xs uppercase tracking-widest">Звоните нам</div>
                <div className="text-white font-bold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>+7 (999) 123-45-67</div>
              </div>
            </div>
            </div>

            {/* Hero image */}
            <div className="hidden md:flex items-center justify-center animate-fade-in delay-300">
              <img
                src="https://cdn.poehali.dev/projects/9e597dc3-54ef-4282-bb5c-1e2a188625b1/bucket/bcb155e1-1f75-4aa7-8298-0f52d96cc32d.jpg"
                alt="Газель Next — ремонт"
                className="w-full max-w-xl object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 40px rgba(59,130,246,0.15))' }}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#111]/80 border-t border-[#222] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="counter-num text-2xl sm:text-3xl">{s.num}</div>
                <div className="text-[#666] text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-blue-500" />
                <span className="text-blue-500 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>О нас</span>
              </div>
              <h2 className="section-title text-4xl sm:text-5xl text-white mb-8">
                НАДЁЖНЫЙ<br />АВТОСЕРВИС
              </h2>
              <p className="text-[#999] leading-relaxed mb-6">
                Мы работаем с 2012 года и за это время отремонтировали более 5000 автомобилей. Каждый мастер нашей команды имеет сертификацию и постоянно повышает квалификацию.
              </p>
              <p className="text-[#999] leading-relaxed mb-8">
                Используем только сертифицированные запчасти от проверенных поставщиков. Предоставляем письменную гарантию на все виды работ и установленные детали.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Shield", text: "Гарантия до 1 года" },
                  { icon: "Clock", text: "Работаем без выходных" },
                  { icon: "Star", text: "Оригинальные запчасти" },
                  { icon: "Users", text: "Опытные мастера" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon name={item.icon} fallback="Check" size={18} className="text-blue-500 shrink-0" />
                    <span className="text-[#ccc] text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)' }}>
                <img src={GALLERY_IMAGES[1].src} alt="Автосервис" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/40" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/40" />
              <div className="absolute -bottom-6 right-8 bg-blue-500 text-white px-5 py-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs uppercase tracking-wider">лет работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-blue-500" />
              <span className="text-blue-500 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Что мы делаем</span>
              <div className="w-12 h-[2px] bg-blue-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
              НАШИ <span className="text-blue-500">УСЛУГИ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <div key={service.title} className="service-card bg-[#111] p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Icon name={service.icon} fallback="Wrench" size={22} className="text-blue-500" />
                  </div>
                  <span className="text-blue-500 text-sm font-semibold" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-[#777] text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-blue-500 opacity-0 group-hover:opacity-80 transition-all text-sm">
                  <span style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>ПОДРОБНЕЕ</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-blue-500" />
              <span className="text-blue-500 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Наши работы</span>
              <div className="w-12 h-[2px] bg-blue-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
              <span className="text-blue-500">ГАЛЕРЕЯ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="gallery-item aspect-video cursor-pointer"
                style={{ clipPath: 'polygon(0 0, 97% 0, 100% 3%, 100% 100%, 3% 100%, 0 97%)' }}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                <div className="overlay" />
                <div className="absolute bottom-4 left-4 text-white font-semibold text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-blue-500" />
              <span className="text-blue-500 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Клиенты о нас</span>
              <div className="w-12 h-[2px] bg-blue-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
              ОТЗЫВЫ <span className="text-blue-500">КЛИЕНТОВ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="review-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-blue-500" />
                  ))}
                </div>
                <p className="text-[#bbb] leading-relaxed mb-5 italic">"{review.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#222]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold"
                      style={{ fontFamily: 'Oswald, sans-serif' }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{review.name}</div>
                      <div className="text-[#555] text-xs">{review.car}</div>
                    </div>
                  </div>
                  <span className="text-[#555] text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-blue-500" />
              <span className="text-blue-500 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Связаться с нами</span>
              <div className="w-12 h-[2px] bg-blue-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
              КОНТАКТЫ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
                { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Промышленная, 42" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 8:00 – 21:00" },
                { icon: "Mail", label: "Email", value: "info@avtomastero.ru" },
              ].map((contact) => (
                <div key={contact.label} className="flex items-start gap-4 p-5 bg-[#111] border border-[#1e1e1e] hover:border-blue-500/30 transition-colors">
                  <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Icon name={contact.icon} fallback="Info" size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[#666] text-xs uppercase tracking-wider mb-1">{contact.label}</div>
                    <div className="text-white font-medium">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#111] border border-[#1e1e1e] p-8">
              <h3 className="text-2xl font-bold mb-6 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Записаться на <span className="text-blue-500">ремонт</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[#666] text-xs uppercase tracking-wider block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Введите имя"
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:border-blue-500/60 focus:outline-none transition-colors placeholder-[#444]"
                  />
                </div>
                <div>
                  <label className="text-[#666] text-xs uppercase tracking-wider block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:border-blue-500/60 focus:outline-none transition-colors placeholder-[#444]"
                  />
                </div>
                <div>
                  <label className="text-[#666] text-xs uppercase tracking-wider block mb-2">Марка и модель авто</label>
                  <input
                    type="text"
                    placeholder="Например: Toyota Camry 2019"
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:border-blue-500/60 focus:outline-none transition-colors placeholder-[#444]"
                  />
                </div>
                <div>
                  <label className="text-[#666] text-xs uppercase tracking-wider block mb-2">Опишите проблему</label>
                  <textarea
                    rows={3}
                    placeholder="Что случилось с автомобилем?"
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:border-blue-500/60 focus:outline-none transition-colors placeholder-[#444] resize-none"
                  />
                </div>
                <button className="btn-amber w-full py-4 text-sm mt-2">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080808] border-t border-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-500 flex items-center justify-center">
                <Icon name="Wrench" size={12} className="text-black" />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>
                ГАЗЕ<span className="text-blue-500">ЛИСТ</span>
              </span>
            </div>
            <div className="text-[#444] text-xs">© 2026 АвтоМастер. Все права защищены.</div>
            <button onClick={() => scrollTo("#home")} className="text-[#555] hover:text-blue-500 transition-colors">
              <Icon name="ArrowUp" size={18} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
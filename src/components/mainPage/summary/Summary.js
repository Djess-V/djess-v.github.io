import React from "react";
import image from "./img/foto_by_resume.png";

let Summary = () => {
  return (
    <section
      id="preview"
      className="preview block"
      style={{ transform: "none" }}
    >
      <div className="resume">
        <div className="resume__column resume__column--left">
          <div className="resume__head">
            <div className="resume__head__photo">
              <img src={image} alt="Main foto" />
            </div>
            <div className="resume__head__name" id="preview-fullname">
              <span>Агеевец Евгений Николаевич</span>
            </div>
            <div className="resume__head__position">
              Frontend-разработчик (React)
            </div>
            <div className="resume__head__geo">КРАСНОЯРСК</div>
          </div>
          <div className="resume__title resume__title--personal">
            Личная информация
          </div>
          <div className="resume__group">
            <p>
              <b>Гражданство:</b>{" "}
              <span className="resume__span">Российская Федерация</span>
            </p>
            <p>
              <b>Образование:</b> <span className="resume__span">Высшее</span>
            </p>
            <p>
              <b>Дата рождения:</b>{" "}
              <span className="resume__span">10 апреля 1985 (37 лет)</span>
            </p>
            <p>
              <b>Пол:</b> <span className="resume__span">Мужской</span>
            </p>
            <p>
              <b>Семейное положение:</b>{" "}
              <span className="resume__span">Женат</span>
              <span className="resume__span">&nbsp;(есть дети)</span>
            </p>
          </div>
          <div className="resume__title resume__title--expirience">
            Опыт работы
          </div>
          <div className="resume__group">
            <div className="resume__expirience__position">
              <span>Руководитель отдела логистики</span>
            </div>
            <div className="resume__expirience__company">
              <span>ИП Пожарский О.Г., г. Красноярск</span>
            </div>
            <div className="resume__expirience__period">
              (май 2016 - июль 2021) (5 лет)
            </div>
            <div className="resume__expirience__details">
              <p></p>
              <p>
                Управление службой логистики (отдел закупок, склад, транспортный
                отдел);
              </p>
              <p>Подбор, обучение и управление персоналом;</p>
              <p>
                Организация работ по обеспечению бесперебойного, эффективного
                товародвижения (планирование поставочной деятельности, контроль
                выполнения графика заказов и поставок);
              </p>
              <p>
                Прием, хранение, комплектация, отгрузка товара, административные
                функции;
              </p>
              <p>Маршрутизация и организация доставки товара;</p>
              <p>
                Управление транспортным подразделением, оптимизация работы
                транспорта;
              </p>
              <p>Организация мониторинга движения автотранспорта;</p>
              <p>Взаимодействие с контрагентами (поставщиками) Компании;</p>
              <p>Оптимизация логистических бизнес-процессов предприятия;</p>
              <p>
                Организация работ по обеспечению эффективного управления
                логистикой Компании (внедрение предложений, направленных на
                снижение логистических издержек; контроль, оптимизация и
                регламентация логистических бизнес-процессов; формирование
                логистического бюджета, обеспечение его исполнения; планирование
                и организация логистических проектов);
              </p>
              <p>Обеспечение взаимодействия всех подразделений Компании;</p>
              <p>
                Запуск и помощь в осуществлении реализации проекта по работе с
                бюджетными организациями Богучанского района Красноярского края.
                Увеличение продаж по данному направлению Компании в 10 раз;
              </p>
              <p>Постоянный контроль издержек Компании.</p>
              <p></p>
            </div>
          </div>
          <div className="resume__title resume__title--education">
            Образование
          </div>
          <div className="resume__group">
            <div className="resume__education__school">
              <span>Московский технологический институт, г. Москва</span>
            </div>
            <div className="resume__education__className">
              <span>Менеджмент</span>
              <span> (Логистика)</span>
            </div>
            <div className="resume__education__year">
              2015, заочная форма обучения (7 лет назад)
            </div>
          </div>
          <div className="resume__title resume__title--info">
            Дополнительная информация
          </div>
          <div className="resume__group">
            <p>
              <b>Наличие водительских прав (категории):</b>{" "}
              <span className="resume__span">B, C</span>
            </p>
          </div>
          <div className="resume__group">
            <p>
              <b>Наличие автомобиля:</b>{" "}
              <span className="resume__span">Да</span>
            </p>
          </div>
          <div className="resume__group">
            <p>
              <b>Рекомендации:</b>
            </p>
            <div>
              <p></p>
              <p className="resume__span">
                Пожарский Олег Геннадьевич, руководитель организации, <br />
                +7-902-940-18-72.
              </p>
              <p className="resume__span">
                Пожарская Ирина Викторовна, руководитель организации, <br />
                +7-902-990-45-53.
              </p>
              <p></p>
            </div>
          </div>
          <div className="resume__group">
            <p>
              <b>Ваши занятия в свободное время:</b>
            </p>
            <div>
              <p></p>
              <p className="resume__span">
                Программирование, лыжи, походы в лес, чтение книг.
              </p>
              <p></p>
            </div>
          </div>
          <div className="resume__group">
            <p>
              <b>Личные качества:</b>
            </p>
            <div>
              <p></p>
              <p className="resume__span">
                Энергичность, инициативность, самостоятельность,
                ответственность, пунктуальность, коммуникабельность, быстрая
                обучаемость.
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="resume__column resume__column--right">
          <div className="resume__group resume__details resume__salary">
            <div className="resume__salary__title">Требования к вакансии</div>
            <p className="resume__salary__tick resume__span">
              Полная занятость
            </p>
            <p className="resume__salary__tick resume__span">Полный день</p>
            <p className="resume__salary__tick resume__span">
              Рассматриваю стажировку (в том числе неоплачиваемую)
            </p>
          </div>
          <div className="resume__group resume__details">
            <div className="resume__details__title">Контакты</div>
            <p className="resume__details__email">
              <span className="resume__span">e.ageevets@yandex.ru</span>
            </p>
            <p>
              <span className="resume__span">+7-950-410-15-09</span>
            </p>
          </div>
          <div style={{ height: 10 + "px" }}></div>
          <div className="resume__group resume__details">
            <div className="resume__details__title">Иностранные языки</div>
            <p className="resume__span">Английский (базовый уровень)</p>
          </div>
          <div className="resume__group resume__details resume__skils">
            <div className="resume__details__title">
              Базовые знания следующего стека технологий
            </div>
            <p className="resume__span">HTML</p>
            <p className="resume__span">CSS</p>
            <p className="resume__span">JS</p>
            <p className="resume__span">React</p>
            <p className="resume__span">Node.js</p>
            <p className="resume__span">Vite</p>
            <p className="resume__span">Webpack</p>
            <p className="resume__span">Sequelize</p>
            <p className="resume__span">MobX</p>
            <p className="resume__span">Redux</p>
            <p className="resume__span">SCSS</p>
            <p className="resume__span">1С</p>
          </div>
          <div className="resume__group resume__details">
            <div className="resume__details__title resume__project">
              Проекты
            </div>
            <a
              href="http://djess-v.github.io"
              title="Keyboard!"
              target="_blank"
              rel="noreferrer"
            >
              http://djess-v.github.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Summary = React.memo(Summary);

export default Summary;

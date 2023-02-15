import { Heading, NavMenu, Section } from './Header.styled';

export const Header = () => {
  return (
    <Section>
      <Heading>
        <h2>Лого</h2>
        <NavMenu>
          <ul>
            <li>
              <a href="#about">Про нас</a>
            </li>
            <li>
              <a href="#services">Послуги</a>
            </li>
            <li>
              <a href="#works">Роботи</a>
            </li>
            <li>
              <a href="#feedback">Відгуки</a>
            </li>
            <li>
              <a href="#contacts">Контакти</a>
            </li>
          </ul>
          <button type="button">
            <a href="#form">Кнопка</a>
          </button>
        </NavMenu>
      </Heading>
    </Section>
  );
};

import { FormGrid } from './Form.styled';

export const Form = () => {
  return (
    <FormGrid>
      <label htmlFor="name">
        <input type="text" placeholder={`Ваше ім'я`} id="name" />
      </label>
      <label htmlFor="phone">
        <input type="tel" placeholder="Ваш номер телефону" id="phone" />
      </label>
      <label htmlFor="email">
        <input type="email" placeholder="Ваша електронна адреса" id="email" />
      </label>
      <label htmlFor="text">
        <textarea placeholder="Ваше повідомлення" id="text" />
      </label>
    </FormGrid>
  );
};

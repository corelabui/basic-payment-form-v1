import { Form, Input } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} validateOnChange className="form">
      <h1>Simple payment form</h1>
      <Input
        id="credit-card-number"
        name="credit-card-number"
        type="credit-card-number-basic"
        label="Credit card number"
        placeholder="Enter your credit card number"
        required
        classes={{
          field: 'form__input-field',
          error: 'form__input-field__error',
          label: 'form__input-field__label',
        }}
      />
      <Input
        id="ccv"
        name="ccv"
        type="ccv"
        label="CCV"
        placeholder="Enter your ccv number"
        required
        classes={{
          field: 'form__input-field',
          error: 'form__input-field__error',
          label: 'form__input-field__label',
        }}
      />
      <Input
        id="expiry-date"
        name="expiry-date"
        type="date"
        label="Expiry date"
        required
        classes={{
          field: 'form__input-field',
          error: 'form__input-field__error',
          label: 'form__input-field__label',
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;

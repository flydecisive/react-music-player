import AuthInput from '../../components/auth-input/auth-input';
import ButtonComponent from '../../components/button/button';
import AuthPage from '../../components/auth-page/auth-page';

function RegisterPage() {
  const placeholders = ['Логин', 'Пароль', 'Повторите пароль'];
  const buttonsValues = ['register'];

  const inputs = placeholders.map((placeholder) => (
    <AuthInput placeholder={placeholder} />
  ));

  const buttons = buttonsValues.map((buttonValue) => (
    <ButtonComponent addClass={buttonValue} count={buttonsValues.length} />
  ));

  return <AuthPage inputs={inputs} buttons={buttons} />;
}

export default RegisterPage;

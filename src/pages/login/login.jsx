import AuthPage from '../../components/auth-page/auth-page';
import AuthInput from '../../components/auth-input/auth-input';
import ButtonComponent from '../../components/button/button';

function LoginPage() {
  const placeholders = ['Логин', 'Пароль'];
  const buttonsValues = ['login', 'register'];

  const inputs = placeholders.map((placeholder) => (
    <AuthInput placeholder={placeholder} />
  ));

  const buttons = buttonsValues.map((buttonValue) => (
    <ButtonComponent addClass={buttonValue} />
  ));

  return <AuthPage inputs={inputs} buttons={buttons} />;
}

export default LoginPage;

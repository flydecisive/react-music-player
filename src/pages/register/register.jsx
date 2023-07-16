import AuthInput from '../../components/auth-input/auth-input';
// import ButtonComponent from '../../components/button/button';
import AuthPage from '../../components/auth-page/auth-page';

function RegisterPage() {
  const placeholders = ['Логин', 'Пароль', 'Повторите пароль'];

  const inputs = placeholders.map((placeholder) => (
    <AuthInput placeholder={placeholder} />
  ));

  return <AuthPage inputs={inputs} type="register" />;
}

export default RegisterPage;

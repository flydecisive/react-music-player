import AuthPage from '../../components/auth-page/auth-page';
import AuthInput from '../../components/auth-input/auth-input';

function LoginPage() {
  const placeholders = ['Логин', 'Пароль'];

  const inputs = placeholders.map((placeholder) => (
    <AuthInput placeholder={placeholder} />
  ));

  return <AuthPage inputs={inputs} type="login" />;
}

export default LoginPage;

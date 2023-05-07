import { useState, useEffect, ComponentType } from 'react';
import { User } from '../../common/types/user';
import { useNavigate } from 'react-router-dom';
import { AuthProps } from '../../common/props/auth-props';



function withAuthorization <T extends AuthProps> (WrappedComponent: ComponentType<T>) {

  const WithAuthorization = (props: Omit<T, keyof AuthProps>) => {
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        // TODO: implement firebase auth logic here
        setUsername(storedUsername);
        setLoggedIn(true);
      } else {
        navigate('/login')
      }
    }, [navigate]);

    function handleLogin(user: User) {
      const formUsername = user.username;
      const formPassword = user.password;
      // TODO: implement firebase auth logic here
      if (formUsername === 'Yuri' && formPassword === 'Yuri1234') {
        localStorage.setItem('username', formUsername);
        localStorage.setItem('password', formPassword);
        setUsername(username);
        setLoggedIn(true);
        navigate('/territorios/list');
      }
    }

    function handleLogout() {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      setUsername('');
      setLoggedIn(false);
      navigate('/login');
    }

    return (
      <WrappedComponent
        {...(props as T)}
        username={username}
        loggedIn={loggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    );
  };

  return WithAuthorization;
}

export default withAuthorization;
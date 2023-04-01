import { User } from "../types/user";

export function handleLogin (this: any) {
    return  (user: User) => {
        if(user.username === 'Yuri' && user.password === '1234')
        this.setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(user));
    }

  };

export function handleLogout (this: any) {
    this.setIsLoggedIn(false);
    localStorage.removeItem('user');
  };
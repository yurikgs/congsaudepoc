import { User } from "../types/user";

export interface AuthProps {
    username: string;
    loggedIn: boolean;
    onLogin: (user: User) => void;
    onLogout: () => void;
  }
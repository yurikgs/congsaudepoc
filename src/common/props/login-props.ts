import { User } from "../types/user";

export type LoginProps = {
    onLogin: (user: User) => void;
  };
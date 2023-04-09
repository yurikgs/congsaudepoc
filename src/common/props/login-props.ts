import { User } from "../types/user";
import { AuthProps } from "./auth-props";

export interface LoginProps extends AuthProps {
    onLogin: (user: User) => void;
};
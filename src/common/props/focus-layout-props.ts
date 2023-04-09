import { ReactNode } from 'react'
import { AuthProps } from './auth-props';

export interface FocusLayoutProps extends AuthProps {
    children: ReactNode
    title: string
}
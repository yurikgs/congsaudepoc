import { ReactNode } from 'react'
import { AuthProps } from './auth-props'

export interface AppLayoutProps extends AuthProps {
    children: ReactNode
    title: string
}
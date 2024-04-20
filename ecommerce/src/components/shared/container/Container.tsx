import styles from './Container.module.css'
type ContainerProps = React.HTMLAttributes<HTMLElement>
export const Container = ({ children, className }: ContainerProps) => {
    return <div className={`${styles['container']} ${className}`}>
        {children}
    </div>
}
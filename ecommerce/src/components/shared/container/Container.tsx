import styles from './Container.module.css'
type ContainerProps = React.HTMLAttributes<HTMLElement>
export const Container = ({ children }: ContainerProps) => {
    return <div className={`${styles['container']}`}>
        {children}
    </div>
}
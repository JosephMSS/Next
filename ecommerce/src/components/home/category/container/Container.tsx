import styles from './Container.module.css'
interface IContainerProps {
    children: React.ReactElement | React.ReactElement[];
}
export const Container = ({ children }: IContainerProps) => {
    return <div className={styles['category-container']}>
        {children}
    </div>
}
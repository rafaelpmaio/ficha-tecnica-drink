import styles from './Button.module.css'

interface ButtonProps {
    children: string,
    onClick?: (valor: any) => void, 
    type?: string
}

export default function Button({ children, onClick: aoClickado, type = 'button' }: ButtonProps) {

    return (
        <button className={styles[type]} onClick={aoClickado}>
            { children }
        </button >
    )
};
import styles from './ButtonSubmit.module.css'

interface FormButtonProps {
    buttonValue: string,
    className?: string
}

export default function ButtonSubmit({ buttonValue, className }: FormButtonProps) {
    return (
        <button type='submit' className={`${styles.form_btn} ${className}`}>
            {buttonValue}
        </button>
    )
};
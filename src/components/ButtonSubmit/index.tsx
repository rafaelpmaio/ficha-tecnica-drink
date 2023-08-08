import styles from './ButtonSubmit.module.css'

interface FormButtonProps {
    buttonValue: string
}

export default function ButtonSubmit( {buttonValue }: FormButtonProps) {
    return (
        <button type='submit' className={styles.form_btn}>
            {buttonValue}
        </button>
    )
};
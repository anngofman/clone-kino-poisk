import styles from './signUn.module.scss'
import SignUpForm from '../../components/forms/SignUp'

const SignUpPage = () => {
  return (
    <div className={styles.signUnPage}>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
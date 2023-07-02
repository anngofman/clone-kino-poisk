import styles from './resetPasswordForm.module.scss'
import Input from '../../../ui/input'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import { useNavigate } from 'react-router-dom'
const NewPasswordForm = () => {
  const nav = useNavigate()
  return (
    <form action="" className={styles.form} >
      <h2>New password</h2>
      <Input type='password' label='Password' names='password'/>
      <Input type='password' label='Confirm password' names='confirmPassword' />
      <ButtonPrimarySecondary text='Reset' typeStyle='primary' type='submit' onClick={()=>nav('/auth/signIn')} />
    </form>
  )
}

export default NewPasswordForm
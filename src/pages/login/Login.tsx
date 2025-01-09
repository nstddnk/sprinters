import React from 'react'
import { Form, Formik } from 'formik'
import { Input } from '../../components/common/input/Input'
import { Button } from 'react-bootstrap'
import { LoginValidationSchema } from './login-validation-schema'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginValidationSchema}
      onSubmit={(values) => {
        navigate('/')
        console.log('Submitted values:', values)
      }}
    >
      <Form className={styles.wrapper}>
        <Input name="email" label="Email address" placeholder="name@example.com" />
        <Input name="password" label="Password" placeholder="Enter your password" />
        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  )
}

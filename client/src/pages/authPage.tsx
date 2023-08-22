import React, { FormEvent, useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useInput } from '../hooks/input'
import { authSlice } from '../store/slices/authSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { authAPI } from '../services/authService'
import { makeAccess } from '../function-helpers/function-helpers'
import { isValuesValidation, isLengthNameValidation, isLengthPassValidation } from '../function-helpers/validators'
import { IUser } from '../models/models'
import { useNavigate } from 'react-router-dom'

interface IProps {

}

const AuthPage: React.FC<IProps> = (props) => {
  const navigate = useNavigate()

  const { data: usersData } = authAPI.useFetchUsersQuery('')

  const username = useInput()
  const password = useInput()

  const { isRegister } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const { login, setIsRegisterStatus } = authSlice.actions

  const [createUser, { isLoading }] = authAPI.useCreateUserMutation()

  const [mainError, setMainError] = useState('')

  const registerHandler = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (isValuesValidation(username.value, password.value)) {
        if (isLengthNameValidation(username.value.length)) {
          if (isLengthPassValidation(password.value.length)) {
            let isEqual = usersData.some((user: IUser) => user.username === username.value)
            if (isEqual) {
              setMainError('User with this username already exists!')
            } else {
              const currentUser = {
                access: makeAccess(50),
                username: username.value,
                password: password.value
              }
              const res = await createUser(currentUser)
              dispatch(login({
                // @ts-ignore
                access: res.data?.access,
                // @ts-ignore
                username: res.data?.username
              }))
              navigate('/')
            }
          } else {
            setMainError('Password is too short!')
          }
        } else {
          setMainError('Username is too short!')
        }
      } else {
        setMainError('Username and password is required!')
      }
    } catch (err) {
      setMainError('Server error! Try later!')
    }
  }

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault()
    try {
      let isEqual = usersData.some((user: IUser) => user.username === username.value && user.password === password.value)
      if(isEqual) {
        const matchedUser = usersData.find((user: IUser) => user.username === username.value && user.password === password.value)
        dispatch(login({
          access: matchedUser.access,
          username: matchedUser.username
        }))
        navigate('/')
      } else {
        setMainError('Username or password is wrong!')
      }
    } catch(err) {
      setMainError('Server error! Try later!')
    }
  }

  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (mainError) {
      setShowAlert(true)
      const timer = setTimeout(() => {
        setShowAlert(false)
        setMainError('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [mainError])

  return (
    <Container className="auth-form-container">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form className="auth-form">
            <h2 className="auth-form-title">{isRegister ? 'Register' : 'Login'}</h2>
            {showAlert && <Alert variant="danger" dismissible>{mainError}</Alert>}
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control {...username} type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control {...password} type="password" placeholder="Password" />
            </Form.Group>
            <Button disabled={isLoading} onClick={isRegister ? registerHandler : loginHandler} variant={isRegister ? 'success' : "primary"} type="submit" className="auth-form-button">
              {isRegister ? 'Register' : 'Log In'}
            </Button>
            {isRegister ? <p onClick={() => dispatch(setIsRegisterStatus(false))} className="auth-form-text">Already have an account? Log in here!</p> :
              <p onClick={() => dispatch(setIsRegisterStatus(true))} className="auth-form-text">Do not have an account? Register here!</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AuthPage
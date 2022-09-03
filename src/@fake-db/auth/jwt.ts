// ** JWT import
import jwt from 'jsonwebtoken'

// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { UserDataType } from 'src/context/types'

const users: UserDataType[] = [
  {
    id: 71,
    role: 'admin',
    password: 'password1',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'faheel_khatri@hotmail.com'
  },
  {
    id: 2,
    role: 'client',
    password: 'client',
    fullName: 'Jane Doe',
    username: 'janedoe',
    email: 'client@materialize.com'
  }
]

// ! These two secrets should be in .env file and not in any other file
const jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767'
}

mock.onPost('/jwt/login').reply(request => {
  const { email, password } = JSON.parse(request.data)

  let error = {
    email: ['Something went wrong']
  }

  const user = users.find(u => u.email === email && u.password === password)

  if (user) {
    // const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret)

    const response = {
      user: {
        id: 71,
        first_name: "Faheel",
        last_name: "Ahmed",
        email: "faheel_khatri@hotmail.com",
        role: "admin",
        role_id: "1",
        verified: true
      },
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzEiLCJyb2xlIjoiYWRtaW4iLCJyb2xlX2lkIjoiMSIsImlhdCI6MTY2MTUxMDcyNiwiZXhwIjoxNjYxNTk3MTI2fQ.QB2E7PLcBBG0Qop-J_bsS0CHTpvPtjCjbzPA3z05-1U",
      refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzEiLCJyb2xlIjoiYWRtaW4iLCJyb2xlX2lkIjoiMSIsImlhdCI6MTY2MTUxMDcyNiwiZXhwIjoxNjkzMDY4MzI2fQ.zAo-7st2HrIiK8Ilt6qn-ANmJ61dcjNREAwm4J10FXQ"
    }

    return [200, response]
  } else {
    error = {
      email: ['email or Password is Invalid']
    }

    return [400, { error }]
  }
})

mock.onPost('/jwt/register').reply(request => {
  if (request.data.length > 0) {
    const { email, password, username } = JSON.parse(request.data)
    const isEmailAlreadyInUse = users.find(user => user.email === email)
    const isUsernameAlreadyInUse = users.find(user => user.username === username)
    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
    }

    if (!error.username && !error.email) {
      const { length } = users
      let lastIndex = 0
      if (length) {
        lastIndex = users[length - 1].id
      }
      const userData = {
        id: lastIndex + 1,
        email,
        password,
        username,
        avatar: null,
        fullName: '',
        role: 'admin'
      }

      users.push(userData)

      const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret)

      const user = { ...userData }
      delete user.password

      const response = { accessToken }

      return [200, response]
    }

    return [200, { error }]
  } else {
    return [401, { error: 'Invalid Data' }]
  }
})

mock.onGet('/auth/me').reply(config => {
  // @ts-ignore
  const token = config.headers.Authorization as string

  // get the decoded payload and header
  const decoded = jwt.decode(token, { complete: true })
  console.log(decoded);

  if (decoded) {
    console.log("INNN")
    // @ts-ignore
    const { user_id } = decoded.payload

    const userData = JSON.parse(JSON.stringify(users.find((u: UserDataType) => u.id == user_id)))
console.log(userData)
    delete userData.password

    return [200, { userData }]
  } else {
    console.log("ELSE")
    return [401, { error: { error: 'Invalid User' } }]
  }
})

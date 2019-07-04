import React from 'react'
import { Avatar } from 'antd'

const AuthAvatar = ({ size = 'default' }) => {
  const avatorUrl = 'http://www.gravatar.com/avatar/5bc51d6f7bda04fb5e57f83ea1d7387e?s=100'
  return <Avatar src={ avatorUrl } size={size} />
}

export default AuthAvatar

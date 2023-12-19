import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起,当前页面不存在."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          回到首页
        </Button>
      }
    />
  )
}

export default Error404

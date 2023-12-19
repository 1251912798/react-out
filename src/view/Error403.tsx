import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
const Error403 = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="403"
      title="403"
      subTitle="对不起,您无权访问该页面."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          回到首页
        </Button>
      }
    />
  )
}

export default Error403

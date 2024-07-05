import './style.css'
import Siderbar from '@/components/Siderbar'

const RootLayout = async ({ children }) => {
  return (
    <html lang='zh-Cn'>
      <body>
        <div className='container'>
          <div className='main'>
            <Siderbar />
            <section className='col note-viewer'>{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

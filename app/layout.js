import './style.css'
import Sidebar from '@/components/Sidebar'

const RootLayout = async ({ children }) => {
  return (
    <html lang='zh-Cn'>
      <body>
        <div className='container'>
          <div className='main'>
            <Sidebar />
            <section className='col note-viewer'>{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

import Image from 'next/image'
import logo from '../../../../public/images/logo_black.png'

export default async function UnderConstruction() {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        background: 'white',
        overflow: 'hidden',
      }}
    >
      <Image src={logo} alt="logo" width="700" height="300" />
      is coming soon...
    </div>
  )
}

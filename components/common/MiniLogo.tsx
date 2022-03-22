import Image from 'next/image'

type AppProps = {
  className: string
}

const MiniLogo = ({ className }: AppProps): JSX.Element => {
  return (
    <div className={`${className}`}>
      <Image
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        src="/logo/symbol.svg"
        alt="Symbol Xemphim"
      />
    </div>
  )
}

export default MiniLogo

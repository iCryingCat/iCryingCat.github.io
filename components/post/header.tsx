import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight my-5">
      <Link href="/">
        <a className="hover:underline">Crying Cat</a>
      </Link>
    </h2>
  )
}

export default Header

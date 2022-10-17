import Link from 'next/link'
import Avatar from '../share/avatar'

const Header = () => {
  return (
    <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight my-5 border-b">
      <Link href="/">
        <a className="hover:underline text-">
          <div className="hidden md:block md:mb-6">
            <Avatar name={"Crying Cat"} picture={"/assets/blog/authors/head.jpg"} />
          </div></a>
      </Link>
    </div>
  )
}

export default Header

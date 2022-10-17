import Avatar from "../share/avatar"

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 mb-5 md:mb-5 p-2 bg-gradient-to-r from-red-400 to-white">
      <div className="hidden md:block md:my-2">
        <div>
          <a href="https://github.com/iCryingCat" className="hover:underline text-white">
            <Avatar name={"南山北海 (Github)"} picture={"/assets/blog/authors/head.jpg"} />
          </a>
        </div>
        <h1 className="my-2 mx-16 italic text-sm">
          西南科技大学
          <br></br>
          游戏、音乐、自驾游
          <br></br>
          天蝎
        </h1>
      </div>
    </section>
  )
}

export default Intro

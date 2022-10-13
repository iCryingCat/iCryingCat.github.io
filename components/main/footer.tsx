import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-white bg-opacity-75 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h1 className="text-white text-4xl lg:text-[2rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            在平行世界里，总有个我没辜负你！
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href=""
              className="mx-3 bg-blue-600 bg-opacity-50 hover:bg-white hover:text-black border border-grey text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              我要打赏！！！
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

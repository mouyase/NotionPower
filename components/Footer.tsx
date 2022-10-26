const Footer = (props: any) => {
  return (
    <div className="flex h-24 w-screen justify-center bg-white shadow-md">
      <div className="container flex items-center justify-between text-sm font-light text-gray-500">
        <div className="flex">
          <div className="px-3 py-4 ">Copyright © 2014 - 2022 Yojigen.Tech</div>
        </div>
        <div>
          <div>
            Powered by{' '}
            <a
              href="https://github.com/mouyase/NotionPower"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              NotionPower
            </a>{' '}
            &{' '}
            <a
              href="https://github.com/mouyase/NotionPower"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Next.js
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer

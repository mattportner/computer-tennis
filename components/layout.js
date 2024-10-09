import Link from "next/link"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <main>
      <div className="mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
        {/* <Header /> */}
        {children}
        <div className="flex flex-row justify-between my-8">
          <p className="mt-2">
            © {new Date().getFullYear()} Computer Tennis
          </p>
          <div className="flex flex-row">
            <a
              href="mailto:franzwarning@gmail.com"
              className="mt-2"
            >
              placeholder@computer.tennis
            </a>
            
          </div>
        </div>
      </div>
    </main>
  )
}
export default Layout

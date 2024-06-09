import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import '../Header/header.css'
interface IProps {
  path: string,
  icon: IconDefinition
}

export function NavIcon({ path, icon }: IProps) {

  return (
    <li className="nav-item rounded-circle  p-3">
      <a className="nav-link text-light" href={path}>
        <FontAwesomeIcon icon={icon} className="social-icon" />
      </a>
    </li>
  )
}

interface INavProps {
  path: string,
  activNav: (text: string) => void,
  activLink: string,
  text: string

}
export function NavText ({path='#',activNav,activLink,text} :INavProps){

  return(
    <li className="nav-item">
    <a className={activLink  === text ? "nav-link nav-active text-light ":"nav-link  text-light "}
    onClick={()=>activNav(text)}  href={path}>{text}</a>
    </li>
  )
}
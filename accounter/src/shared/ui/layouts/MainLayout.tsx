import { Link, Outlet } from "react-router-dom"
import styles from "./Layout.module.scss"
import Navigation from "../navigation/Navigation"
import Burger from "../../../../public/burger.svg?react"
import { useState } from "react"

export default function MainLayout() {

  const [menuVisible, setMenuVisible] = useState<boolean>(false)

  const onBurgerClick = () => setMenuVisible((prev) => !prev)

  return (
    <div className={styles.background}>
        <div className={styles.layout}>
            <header className={styles.layout__header}>

            <Link to={"/"} className={styles.layout__headerTitle}>
                Accounter
              </Link>

              <button 
                  className={styles.layout__burger} 
                  type="button"
                  onClick={onBurgerClick}
                  >
                    <Burger style={{width: "24px"}}/>
              </button>

            </header>
            
            <aside 
              className={styles.layout__aside}
            >
              <Navigation/> 
            </aside>

            <aside 
              className={styles.layout__asideMobile}
              style={{
                transform: menuVisible ?  "translateX(-0px)" : "translateX(100%)",
              }}
              onClick={onBurgerClick}
            >
              <div> <Navigation/> </div>
            </aside>            
            
            <button 
              className={styles.layout__asideButton}
              style={{
                display: menuVisible ? "block" : "none",
              }}
              onClick={onBurgerClick}
            >

            </button>

            <div className={styles.layout__wrapper}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

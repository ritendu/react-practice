import { useContext } from "react";
import { AppContext } from "../context/context";
const Submenu = ()=>{
const {isSubmenuOpen} = useContext(AppContext);
{console.log(isSubmenuOpen,"isSubmenuOpen")}
    return (
        <aside
        className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
        // ref={container}
      >
        submenu
        {/* <section>
          <h4>{page}</h4>
          <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
              const { url, icon, label } = link
              return (
                <a key={index} href={url}>
                  {icon}
                  {label}
                </a>
              )
            })}
          </div>
        </section> */}
      </aside>
    )
}

export default Submenu
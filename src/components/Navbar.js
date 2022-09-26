import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "Projects"
        },
        {
            id: 3,
            link: "About"
        },
        {
            id: 4,
            link: "Contact"
        },
    ]

    const styles = {
            navlist: `flex item-center mt-4 mr-10 justify-between`,
            navitem: `px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200`
        }
    

  return (
    <div className=' bg-white shadow-sm flex justify-between items-center w-full h-20 px-4 fixed'>
        <div className='text-4xl font-bold ml-2 mr-20'>Doza</div>
        <div>
            <ul className={styles.navlist}>
                {links.map(({id, link}) => {
                    return(<li key={id} className={styles.navitem}><Link to={link} smooth={true} duration={200}>{link}</Link></li>)
                })}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
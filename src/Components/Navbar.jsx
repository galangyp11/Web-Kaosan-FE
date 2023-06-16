import { useNavigate } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {

    const navigate = useNavigate()
    return ( 
        <div className="navbar">
            <div className="col-3 d-flex align-items-center ">
                <input type="text" className='mx-4 px-2 search-navbar' placeholder='cari kaos'/>
            </div>

            <div className="col-2">
                <div className="bg-text-navbar-tengah">
                    <p className='text-navbar d-flex align-items-center justify-content-center' onClick={()=> navigate('/')}>Kaosan.</p>
                </div>
            </div>

            <div className="col-3">
                <div className='navbar-sub d-flex justify-content-end'>
                    <p className='text-navbar-sub d-flex align-items-center'>Tentang</p>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
import { useEffect, useState } from 'react';
import './homepageadmin.css'
import { useNavigate } from 'react-router-dom';
import DashboardAdmin from './DashboardAdmin';
import BarangAdmin from './BarangAdmin';

const HomepageAdmin = () => {
    const [isActiveDashboard , setIsActiveDashboard] = useState(true)
    const [isActiveBarang, setIsActiveBarang] = useState(false)
    const [halaman, setHalaman] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        setHalaman(<DashboardAdmin/>)
    },[])

    const handleMenuDashboard = () => {
        if(isActiveDashboard === true){
            setIsActiveBarang(false)
        } else {
            setIsActiveDashboard(true)
            setIsActiveBarang(false)
        }

        setHalaman(<DashboardAdmin/>)
    }

    const handleMenuBarang = () => {
        if(isActiveBarang === true){
            setIsActiveDashboard(false)
        } else {
            setIsActiveBarang(true)
            setIsActiveDashboard(false)
        }

        setHalaman(<BarangAdmin setHalaman={setHalaman}/>)
    }
    return ( 
        <div className="homepage-admin d-flex justify-content-center">
            <div className="row " style={{width:"100%"}}>
                <div className="col-2 p-0" style={{height:"100%"}}>
                    <div className="sidebar sticky-top py-4">
                        <div className='bg-text d-flex justify-content-center'>
                        <p className="text-kaosan-admin d-flex justify-content-center align-items-center">Kaosan.</p>
                        </div>

                        <hr />
                        <div className="row d-flex justify-content-center">
                            <div className={`${!isActiveDashboard ? `menu-sidebar` : `menu-sidebar-active`} my-1`} onClick={handleMenuDashboard}>
                                <p className="text-menu-sidebar d-flex align-items-center justify-content-start">&diams; Dashboard</p>
                            </div>
                            <div className={`${!isActiveBarang ? `menu-sidebar` : `menu-sidebar-active`} my-1`} onClick={handleMenuBarang}>
                                <p className="text-menu-sidebar d-flex align-items-center justify-content-start">&diams; Barang</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-end justify-content-center" style={{height:'70%'}}>
                            <div className="">
                                <button className='but-logout' onClick={()=> navigate('/')}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {halaman}
                </div>
                
            </div>
        </div>
     );
}
 
export default HomepageAdmin;
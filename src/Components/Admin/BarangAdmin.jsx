import { useEffect, useState } from 'react';
import InputBarang from './InputBarang';
import './barangadmin.css'
import axios from 'axios';

const BarangAdmin = ({setHalaman}) => {

    const [dataBarang, setDataBarang] = useState([]);

    useEffect(()=>{
        const getBarang = async() =>{
            const response = await axios.get(`http://localhost:3069/barang`)
            setDataBarang(response.data)
        }
        getBarang()
    },[])

    const handleInputBarang = () =>{
        setHalaman(<InputBarang/>)
    }

    console.log(dataBarang)
    return ( 
        <div className="barang-admin container py-3">
            <div className="judul-admin mb-5">
                <p className="text-judul-admin d-flex align-items-center justify-content-center">Manajemen Barang</p>
            </div>

            <div className="input-barang d-flex justify-content-start my-2">
                <button className='but-input-barang' onClick={handleInputBarang}>Input Barang</button>
            </div>

            
                <table className='table'>
                    <thead className='table-dark'>
                        <tr className=''>
                            <th className='col-1'>No</th>
                            <th className='col'>Nama Barang</th>
                            <th className='col-2'>Ukuran</th>
                            <th className='col-2'>Warna</th>
                            <th className='col-2'>Harga</th>
                            <th className='col-2'>~</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataBarang?.map((data, index)=>{
                                return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.nama_barang}</td>
                                <td>{data.ukuran}</td>
                                <td>{data.warna}</td>
                                <td>{data.harga}</td> 
                                <td>
                                    <button className='but-barang btn btn-warning mx-1'>Edit</button>
                                    <button className='but-barang btn btn-danger mx-1'>Hapus</button>
                                </td>
                            </tr>
                        )    
                            })}
                    </tbody>
                </table>
                      
        </div>
     );
}
 
export default BarangAdmin;
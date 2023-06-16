import { useEffect, useState } from 'react';
import './barangdetails.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BarangDetails = () => {

    const [dataBarang, setDataBarang] = useState({});
    const {id} = useParams()

    useEffect(() => {
        const getBarang = async() => {
            const response = await axios.get(`http://localhost:3069/barang/${id}`);
            setDataBarang(response.data)
        }
        getBarang()
    },[])
    
    console.log(dataBarang)
    return ( 
        <div className="barang-details container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="bg-foto-barang-details my-3">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="col">
                    <div className="bg-barang-details p-3">
                        <div className="row" >
                            <p className="text-nama-barang-details d-flex justify-items-start">{dataBarang.nama_barang}</p>
                        </div>
                        
                        <hr />
                        <div className="bg-info-barang container">
                            <div className="bg-deksripsi py-2">
                                <p className="text-barang-details d-flex justify-items-start">{dataBarang.deksripsi}</p>
                            </div>
                            
                            <div className="row">
                                <p className="text-barang-details text-harga d-flex justify-items-start">Rp. {dataBarang.harga}</p>
                            </div>
                            <div className="row">
                                <p className="text-barang-details d-flex justify-items-start">Tersedia Ukuran : {dataBarang.ukuran}</p>
                            </div>
                            <div className="row">
                                <p className="text-barang-details d-flex justify-items-start">Warna : {dataBarang.warna}</p>
                            </div>
                        </div>
                    </div>
            
                    <div className="row">
                        <hr />

                        <div className="row" style={{width:'80%'}}>
                            <div className="col p-0">
                                <button className='but-shopee'>Shopee</button>
                            </div>
                            <div className="col p-0">
                                <button className='but-tokopedia'>Tokopedia</button>
                            </div>
                            <div className="col p-0">
                                <button className='but-blibli'>Blibli</button>
                            </div>
                            <div className="col p-0">
                                <button className='but-tiktok'>TikToK Shop</button>
                            </div>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
     );
}
 
export default BarangDetails;
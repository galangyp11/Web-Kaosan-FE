import { useState } from 'react';
import './inputbarang.css'
import axios from 'axios';

const InputBarang = () => {
    const [dataInput, setDataInput] = useState({
        nama_barang : '',
        deksripsi : '',
        jenis : '',
        ukuran : '',
        warna : '',
        harga : ''
    });

    const handleInput = (e) => {
        e.preventDefault()

        setDataInput((data)=>({
            ...data,
            [e.target.id] : e.target.value
        }))
    }

    const handleSimpan = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3069/barang`, dataInput)

    }
    console.log(dataInput)
    return ( 
        <div className="input-barang container py-3">
             <div className="judul-admin-sub">
                <p className="text-judul-admin d-flex align-items-center justify-content-center">Input Barang</p>
            </div>

            <div className="form-input-barang m-5 px-5">
                <div className="row">
                    <div className="col-2 d-flex justify-content-start">
                        <p className="text-barang-input">Nama Barang</p>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <input type="text" className='input-input-barang px-1' onChange={handleInput} id='nama_barang'/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 d-flex justify-content-start ">
                        <p className="text-barang-input">Deksripsi</p>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <input type="text" className='input-input-barang px-1' onChange={handleInput} id='deksripsi'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-flex justify-content-start ">
                        <p className="text-barang-input">Jenis</p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className='d-flex justify-content-start'>
                                <input type="radio" name='jenis-kaos' id="jenis" value='Polos' onChange={handleInput}/>
                                <label htmlFor="Polos">Kaos Polos</label>
                            </div>
                            <div className='d-flex justify-content-start'>
                                <input type="radio" name='jenis-kaos' id="jenis" value='Desain' onChange={handleInput}/>
                                <label htmlFor="Desain">Kaos Desain</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-flex justify-content-start ">
                        <p className="text-barang-input">Ukuran</p>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <input type="text" className='input-input-barang px-1' onChange={handleInput} id='ukuran'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-flex justify-content-start ">
                        <p className="text-barang-input">Warna</p>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <input type="text" className='input-input-barang px-1' onChange={handleInput} id='warna'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-flex justify-content-start ">
                        <p className="text-barang-input">Harga</p>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <input type="text" className='input-input-barang px-1' onChange={handleInput} id='harga'/>
                    </div>
                </div>
            </div>

            <div className="bg-but-input-barang row">
                <div className="col d-flex justify-content-end">
                    <button className='but-input-admin btn btn-outline-danger'>Batal</button>
                </div>
                <div className="col d-flex justify-content-start">
                    <button className='but-input-admin btn btn-primary' onClick={handleSimpan}>Input</button>
                </div>
            </div>

        </div>
     );
}
 
export default InputBarang;
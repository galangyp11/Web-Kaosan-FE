import './homepageuser.css'
import FotoBanner from '../../Image/foto-banner.png'
import KaosHitam from '../../Image/kaos-polos-hitam-depan.png'
import KaosPutih from '../../Image/kaos-polos-putih-depan.png'

const HomepageUser = () => {
    return ( 
        <div className="homepage-user container">
            <div className="banner row ">
                <div className="col">
                    <p className='text-banner d-flex justify-content-start align-items-end'>KAOSAN.</p>
                    <p className='text-banner-sub px-2 d-flex justify-content-start'>kaosan dulu ga sih</p>
                </div>

                <div className="col d-flex align-items-center justify-content-end">
                    <div className="bg-foto-banner">
                        <img className='foto-banner' src={FotoBanner} alt="foto-banner" />
                    </div>
                </div>
            </div>

            <hr />

            <div className='body-homepage row'>
                <div className="bg-barang">
                    <p className='text-judul-barang-body d-flex justify-content-start'>Kaos Polos</p>
                    <div className="row container gap-5">
                        <div className="card-barang p-0">
                            <div className="bg-foto-card-barang">
                                <img className='foto-kaos-polos' src={KaosHitam} alt="kaos-polos" />
                            </div>
                            <p className='text-nama-card-barang mt-4'>Kaos Polos Regular Fit</p>
                            <p className='text-harga-card-barang'>Rp 59.000</p>
                        </div>

                        <div className="card-barang p-0">
                            <div className="bg-foto-card-barang">
                                <img className='foto-kaos-polos' src={KaosPutih} alt="kaos-polos" />
                            </div>
                            <p className='text-nama-card-barang mt-4'>Kaos Polos Oversize Fit</p>
                            <p className='text-harga-card-barang'>Rp 79.000</p>
                        </div>
                    </div>

                    <hr />

                    <p className='text-judul-barang-body d-flex justify-content-start'>Kaos Desain</p>
                    <div className="row container gap-5">
                        <div className="card-barang p-0">
                            <div className="bg-foto-card-barang">
                                <img className='foto-kaos-polos' src={KaosHitam} alt="kaos-polos" />
                            </div>
                            <p className='text-nama-card-barang mt-4'>Kaos Desain Regular Fit</p>
                            <p className='text-harga-card-barang'>Rp 59.000</p>
                        </div>

                        <div className="card-barang p-0">
                            <div className="bg-foto-card-barang">
                                <img className='foto-kaos-polos' src={KaosPutih} alt="kaos-polos" />
                            </div>
                            <p className='text-nama-card-barang mt-4'>Kaos Desain Oversize Fit</p>
                            <p className='text-harga-card-barang'>Rp 79.000</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
     );
}
export default HomepageUser;
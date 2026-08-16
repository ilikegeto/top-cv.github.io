import { useState } from "react";
import '../style/user_data.css';

export const informasiUmum = () => {
    //general
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [nomor, setNomor] = useState()

    //edit || submit
    const [isSubmit, setIsSubmit] = useState(false)

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submitted, ${nama}`);    
        console.log(`Form submitted, ${email}`);  
        console.log(`Form submitted, ${nomor}`);  
        setIsSubmit(true)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setIsSubmit(false)
        console.log("edit mode")
    }

    if (isSubmit) {
        return (
            <div className="container">
                <form onSubmit={handleEdit}>
                    <div>
                        <h2>informasi umum</h2>
                        <span className="spann" />
                        <div className="isi">
                            <div className="kategori">Nama: </div>
                            <div>{nama || "-"}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Email: </div>
                            <div>{email || "-"}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Nomor: </div>
                            <div>{nomor || "-"}</div>
                        </div>
                        <button className="submit" type="submit">edit</button>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className="container">
            
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>informasi umum</h2>
                    <input 
                        type="text" 
                        className="inputcv"
                        placeholder="Nama" 
                        value={nama} 
                        onChange={(e) => setNama(e.target.value)} 
                    />

                    <div className="tglmulaiselesai">
                        <input 
                            type="email" 
                            placeholder="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />

                        <input 
                            type="number" 
                            placeholder="nomor ponsel" 
                            value={nomor} 
                            onChange={(e) => setNomor(e.target.value)} 
                        />
                    </div>
                    <button className="submit" type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}
export const edukasi = () => {
    //education
    const [sekolah, setSekolah] = useState("")
    const [jurusan, serJurusan] = useState("")
    const [tanggal_studi, setTanggal_studi] = useState("")
    const [studi_selesai, setStudi_selesai] = useState("")

    const [isSubmit, setIsSubmit] = useState(false)
    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true)
        console.log(`Form submitted, ${sekolah}`);    
        console.log(`Form submitted, ${jurusan}`);  
        console.log(`Form submitted, ${tanggal_studi}`);   
        console.log(`Form submitted, ${studi_selesai}`);   
    }

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleEdit = (e) => {
        e.preventDefault()
        setIsSubmit(false)
        console.log("edit mode")
    }

    if (isSubmit) {
        return (
            <div className="container">
                <form onSubmit={handleEdit}>
                    <div>
                        <h2>Edukasi</h2>
                        <span className="spann" />
                        <div className="isi">
                            <div className="kategori">Sekolah: </div>
                            <div>{sekolah || "-"}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Jurusan: </div>
                            <div>{jurusan || "-"}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Tanggal studi: </div>
                            <div>{formatDate(tanggal_studi)}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Selesai studi: </div>
                            <div>{formatDate(studi_selesai)}</div>
                        </div>
                        <button className="submit" type="submit">edit</button>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Edukasi</h2>
                    <input 
                        type="text" 
                        className="inputcv"
                        placeholder="Nama sekolah" 
                        value={sekolah} 
                        onChange={(e) => setSekolah(e.target.value)} 
                    />

                    <input 
                        type="text"
                        className="inputcv" 
                        placeholder="jurusan" 
                        value={jurusan} 
                        onChange={(e) => serJurusan(e.target.value)} 
                    />

                    <div>tanggal mulai & tanggal selesai</div>
                    <div className="tglmulaiselesai">
                        <input 
                            type="date"  
                            value={tanggal_studi} 
                            onChange={(e) => setTanggal_studi(e.target.value)} 
                        />
                        <input 
                            type="date"  
                            value={studi_selesai} 
                            onChange={(e) => setStudi_selesai(e.target.value)} 
                        />
                    </div>
                    <button className="submit" type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}
export const pengalaman = () => {
    //experience
    const [perusahaan, setPerusahaan] = useState("")
    const [jabatan, setJabatan] = useState("")
    const [jobdesk_utama, setJobdesk_utama] = useState("")
    const [tanggalMulai, setTanggalMulai] = useState("")
    const [tanggalSelesai, setTanggalSelesai] = useState("")

    const [isSubmit, setIsSubmit] = useState(false)
    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true)
        console.log(`Form submitted, ${perusahaan}`);    
        console.log(`Form submitted, ${jabatan}`);  
        console.log(`Form submitted, ${jobdesk_utama}`);   
        console.log(`Form submitted, ${tanggalMulai}`);      
        console.log(`Form submitted, ${tanggalSelesai}`);  
    }

    
    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleEdit = (e) => {
        e.preventDefault()
        setIsSubmit(false)
        console.log("edit mode")
    }

    if (isSubmit) {
        return (
            <div className="container">
                <form onSubmit={handleEdit}>
                    <div>
                        <h2>Pengalaman</h2>
                        <span className="spann" />
                        <div className="isi">
                            <div className="kategori">Perusahaan: </div>
                            <div>{perusahaan || "-"}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Jabatan: </div>
                            <div>{jabatan || "-"}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Jobdesk utama: </div>
                            <div>{jobdesk_utama || "-"}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Tanggal mulai: </div>
                            <div>{formatDate(tanggalMulai)}</div>
                        </div>
                        <div className="isi">
                            <div className="kategori">Tanggal selesai: </div>
                            <div>{formatDate(tanggalSelesai)}</div>
                        </div>
                        <button className="submit" type="submit">edit</button>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className="container">
            
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Pengalaman</h2>
                    <div className="tglmulaiselesai">
                        <input 
                            type="text" 
                            placeholder="perusahaan" 
                            value={perusahaan} 
                            onChange={(e) => setPerusahaan(e.target.value)} 
                        />

                        <input 
                            type="text"
                            placeholder="jabatan" 
                            value={jabatan} 
                            onChange={(e) => setJabatan(e.target.value)} 
                            />
                    </div>

                    <input 
                        type="text" 
                        className="inputcv"
                        placeholder="jobdesk utana" 
                        value={jobdesk_utama} 
                        onChange={(e) => setJobdesk_utama(e.target.value)} 
                    />

                    <div>tanggal mulai & tanggal selesai</div>
                    <div className="tglmulaiselesai">
                        <input 
                            type="date"  
                            value={tanggalMulai} 
                            onChange={(e) => setTanggalMulai(e.target.value)} 
                        />
                        <input 
                            type="date"  
                            value={tanggalSelesai} 
                            onChange={(e) => setTanggalSelesai(e.target.value)} 
                        />
                    </div>
                    <button className="submit" type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}

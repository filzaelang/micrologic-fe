import React, { useState } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";

const SalaryCalculating = () => {

    const initialGajiPokok = "";
    const initialTunjangan = "";
    const initialKewajiban = "";

    const [gajiPokok, setGajiPokok] = useState(initialGajiPokok);
    const [tunjangan, setTunjangan] = useState(initialTunjangan);
    const [kewajiban, setKewajiban] = useState(initialKewajiban);
    const [gajiKotor, setGajiKotor] = useState(null);
    const [gajiBersih, setGajiBersih] = useState(null);


    const kalkulatorGaji = () => {
        const gajiPokokNumber = parseFloat(gajiPokok) || 0;
        const tunjanganNumber = parseFloat(tunjangan) || 0;
        const kewajibanNumber = parseFloat(kewajiban) || 0;

        const gajiKotorResult = gajiPokokNumber + tunjanganNumber;
        const gajiBersihResult = gajiKotorResult - kewajibanNumber;

        setGajiKotor(gajiKotorResult);
        setGajiBersih(gajiBersihResult);
    };

    const reset = () => {
        setGajiPokok(initialGajiPokok);
        setTunjangan(initialTunjangan);
        setKewajiban(initialKewajiban);
        setGajiKotor(null);
        setGajiBersih(null);
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <Container>
            <Navbar />
            <div className="container d-flex flex-column align-items-center">
                <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600 p-5">
                    <h1 className="font-semibold text-xl text-center mb-6">Kalkulator Gaji</h1>
                    <div className="mt-3">
                        <div className="mb-2">
                            <label htmlFor="gajiPokok" className="form-label text-md">Gaji Pokok</label>
                            <input type="number" className="form-control bg-slate-200 rounded-md" id="gajiPokok"
                                value={gajiPokok}
                                onChange={(e) =>
                                    setGajiPokok(e.target.value.replace(/^0+/, ""))
                                } />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="tunjangan" className="form-label text-md">Tunjangan</label>
                            <input type="number" className="form-control bg-slate-200 rounded-md" id="tunjangan"
                                value={tunjangan}
                                onChange={(e) =>
                                    setTunjangan(e.target.value.replace(/^0+/, ""))
                                } />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="kewajiban" className="form-label text-md">Kewajiban Pokok</label>
                            <input type="number" className="form-control bg-slate-200 rounded-md" id="kewajiban"
                                value={kewajiban}
                                onChange={(e) =>
                                    setKewajiban(e.target.value.replace(/^0+/, ""))
                                } />
                        </div>
                    </div>

                    <div className="mt-4 d-flex justify-content-center gap-3">
                        <button className="btn btn-primary font-semibold text-white p-2 hover:bg-slate-500 rounded-md text-sm" onClick={kalkulatorGaji}>Hitung Gaji</button>
                        <button className="btn btn-primary font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm" onClick={reset}>Reset</button>
                    </div>

                    <div className="mt-3">
                        <h3 className="mb-2 font-semibold">Hasil :</h3>
                        <h4>Gaji Kotor : {formatCurrency(gajiKotor)}</h4>
                        <h4>Gaji Pokok : {formatCurrency(gajiPokok)}</h4>
                        <h4>Gaji Bersih : {formatCurrency(gajiBersih)}</h4>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default SalaryCalculating;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbar from '../components/Navbar';


const MobileLegend = () => {
    const [heroes, setHeroes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState(heroes);

    const fetchData = async () => {
        try {
            const heroes = await axios.get('https://api.dazelpro.com/mobile-legends/hero');
            setHeroes(heroes.data.hero);
            setSearchResults(heroes.data.hero);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderHeroes = () => {
        return searchResults.map(hero => (
            <div key={hero.hero_id} className="border border-solid border-1 border-black mt-4 rounded-md shadow-sm shadow-slate-600">
                <div className="p-3">
                    <h4 className="font-bold">{hero.hero_name}</h4>
                    <h5 className="text-sm font-thin">Peran: {hero.hero_role}</h5>
                    <h5 className="text-sm font-thin">Kemampuan Khusus: {hero.hero_specially}</h5>
                </div>
            </div>
        ));
    };

    const handleSearch = () => {
        const filteredHeroes = heroes.filter(hero =>
            hero.hero_name.toLowerCase().includes(searchInput.toLowerCase()) ||
            hero.hero_role.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(filteredHeroes);
    };

    return (
        <Container>
            <Navbar />
            <div className="d-flex flex-column align-items-center mb-5">
                <div className="bg-slate-400 w-50 rounded-md shadow-md shadow-slate-600">
                    <div className="p-5">
                        <h1 className="font-semibold text-xl text-center mb-6">Daftar Hero</h1><br></br><br></br>
                        <Row className="mb-3">
                            <Col xs={12}>
                                <InputGroup>
                                    <FormControl
                                        type="text"
                                        value={searchInput}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        className="bg-slate-200 rounded-md"
                                        placeholder="Search..."
                                    />
                                    <Button
                                        variant="primary"
                                        onClick={handleSearch}
                                        className="font-semibold"
                                    >
                                        Search
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={() => {
                                            setSearchInput('');
                                            setSearchResults(heroes);
                                        }}
                                        className="font-semibold"
                                    >
                                        Reset
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                        <div className="p-3">
                            {searchResults.length > 0 ? (
                                renderHeroes()
                            ) : (
                                <p className="text-center">No heroes found. Please try a different search.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MobileLegend;

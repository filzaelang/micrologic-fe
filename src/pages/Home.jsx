import ButtonComponents from "../components/ButtonComponents";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center mt-8" style={{ marginTop: "5%" }}>
                <div className="mb-5">
                    <h1 className="display-4 font-weight-bold">Selamat Datang</h1>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center mt-8">
                <ButtonComponents to='/count-duration' label='Count Duration' />
                <ButtonComponents to='/currency-convert' label='Currency Convert' />
                <ButtonComponents to='/mobile-legend' label='Mobile Legend' />
                <ButtonComponents to='/tic-tac-toe' label='Tic Tac Toe' />
                <ButtonComponents to='/matching-card' label='Mathcing Card' />
                <ButtonComponents to='/salary-calculating' label='Salary Calculating' />
                <ButtonComponents to='/word-scramb' label='Word Scramb' />
            </div>
        </div >
    )
}


export default Home;
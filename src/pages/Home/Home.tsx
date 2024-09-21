import './Home.scss'
import Header from "./Header/Header.tsx";
import BillSplitter from "./BillSplitter/BillSplitter.tsx";

export default function Home() {

    return (
        <div className='home'>
            <Header/>
            
            <main>
                <BillSplitter/>
            </main>
            
        </div>
    )
}
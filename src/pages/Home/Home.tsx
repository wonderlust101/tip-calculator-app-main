import './Home.scss'
import Header from "./Header/Header.tsx";
import BillSplitter from "./BillSplitter/BillSplitter.tsx";

export default function Home() {

    return (
        <div className='home grid-bleed'>
            <Header/>
            
            <main className='home__content'>
                <BillSplitter/>
            </main>
            
        </div>
    )
}
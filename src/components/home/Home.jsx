import './content.css';
import logo from '../../assets/images/logo.png'

export default function Home() {
    return (
        <>
            <div className="content-app items-center flex justify-between">
                <div className='left w-[500px]'>
                    <div className='text text-5xl'>Buy everything, just in <a href='' className='onetap text-sky-400'>OneTap</a></div>
                    <a href='#product' className='focus:outline-none'>
                        <button className='content-button focus:outline-none mt-[20px] font-semibold py-[15px] px-[20px] text-2xl border-solid border-2 rounded-[8px] border-slate-900'>
                            Get Started
                        </button>
                    </a>
                </div>
                <div className='right z-0'>
                    <img className='logo w-[500px] z-0' src={logo}></img>
                </div>
            </div>
        </>
    )
}

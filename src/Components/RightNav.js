export default function RightNav(){
    return (
            <ul className='nav-container'>
                {/* <img src={logo} alt='logo' className='logo' width={100}/>     */}
                <li className='items about'>
                    <a href='/'>About</a>
                </li>
                <li className='items contact'>
                    <a href='/'>Contact</a>
                </li>
            </ul>  
    );
}
import Headings from '../../Components/SubHeaders/SubHeader';
import './Publication.css'

const Publication = () => {
    return (
        <>
            <Headings context='Machine learning research' main_word='Publication' />
            <a href="https://ieeexplore.ieee.org/abstract/document/10253877" target="IEEE Xplore" rel="IEEE Xplore" className='link'>

            <div className='publication-card'>
                <div className='publication-content'>
                    <p className='publication-title'>Evaluation of Pruning Techniques in Neural Network</p>
                    <p className='publication-author'>Shvetha S Kumar, Reshma R Nayak, Jismi S Kannampuzha, Sahil Rai, Jeeho Ryoo and Lizy K John</p>
                    <p className='publication-conference'>IEEE International Performance, Communication and Computing Conference 2023</p>
                </div>
            </div>
            </a>
        </>
    )
}

export default Publication;
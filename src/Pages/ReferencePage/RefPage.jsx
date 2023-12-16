import Headings from '../../Components/SubHeaders/SubHeader';
import './RefPage.css'

const RefPage = ({ References }) => {
    return (
        <>
            <Headings context='Check out my' main_word='Testimonials' />
            <div className='ref-container'>
                <div className='ref'>
                    <div className='ref-heading'>Wonderful Support</div>
                    <div className='ref-content'>They have got my project on time with the competiton with a sed highly skilled, and experienced & professional team.
</div>
                    <div className='ref-provider'>Someone</div>
                </div>
                <div className='ref'>
                    <div className='ref-heading'>Wonderful Support</div>
                    <div className='ref-content'>Explain to you how all this mistakes idea of denouncing pleasure and praising pain was born and I will give you completed.
</div>
                    <div className='ref-provider'>Someone</div>
                </div>

                <div className='ref'>
                    <div className='ref-heading'>Wonderful Support</div>
                    <div className='ref-content'>Explain to you how all this mistakes idea of denouncing pleasure and praising pain was born and I will give you completed.
</div>
                    <div className='ref-provider'>Someone</div>
                </div>


                <div className='ref'>
                    <div className='ref-heading'>Wonderful Support</div>
                    <div className='ref-content'>Explain to you how all this mistakes idea of denouncing pleasure and praising pain was born and I will give you completed.
</div>
                    <div className='ref-provider'>Someone</div>
                </div>
            </div>
        </>
    )
}

export default RefPage;
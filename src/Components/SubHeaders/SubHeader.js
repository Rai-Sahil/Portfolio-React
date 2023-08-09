import './SubHeaders.css'

const Headings = ({ context, main_word }) => {
    return (
        <header className='subsection-headings'>
            <div className='context-heading'>{ context }</div>
            <div className='main-word-heading'>{ main_word }</div>
        </header>
    )
}

export default Headings;
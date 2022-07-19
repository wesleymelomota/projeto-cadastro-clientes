import './button.css'

export default ({children, cor, OnClick, link}) => {
    return(
        <button href={link} onClick={() => OnClick} className={`btn ${cor}`}>{children}</button>
    )
}
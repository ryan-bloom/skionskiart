import './footer.css'
export const Footer = ()=>{
    const getYear = () =>{
        return new Date().getFullYear();
    }
    return(
        <div className="footer-div">
            Copywright &copy;{` ${getYear()} | Ski-On Ski-Art | Ryan Bloom`}
        </div>
    )
}
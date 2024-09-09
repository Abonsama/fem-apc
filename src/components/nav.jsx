import f from '../assets/icon-facebook.svg'
import t from '../assets/icon-twitter.svg'
import p from '../assets/icon-pinterest.svg'
export default function Nav(){
    return(
        <nav>
            <span>Share</span>
            <a target='_blank' href='https://facebook.com' className="facebook"><img src={f} alt="facebook" /></a>
            <a target='_blank' href='https://twitter.com' className="twitter"><img src={t} alt="twitter" /></a>
            <a target='_blank' href='https://pinterest.com' className="pinterest"><img src={p} alt="pinterest" /></a>
        </nav>
    )
}    
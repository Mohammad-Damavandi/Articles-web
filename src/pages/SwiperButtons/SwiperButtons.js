import './SwiperButtons.css';
import {useSwiper} from 'swiper/react';
import { GrNext , GrPrevious } from "react-icons/gr";

function SwiperButtons (){

    const swiper = useSwiper()

    return(
        <div className="swiperBtns">
            <button onClick={ () => swiper.slideprev() }><GrNext size='25px' /></button>
            <button onClick={ () => swiper.slidenext() }><GrPrevious size='25px' /></button>

        </div>
    )
}

 export default SwiperButtons;
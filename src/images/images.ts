import one from './01.png'
import two from './02.png'
import three from './03.png'
import four from './04.png'
import nine from './09.png'
import ten from './10.png'
import eleven from './11.png'
import thirteen from './13.png'
import fifty from './50.png'
import { iconCode } from '../components/output'

export let icon: string

export function choose_icon() {
    switch (iconCode) {
        case'01':
        icon = one
            break;
    
        case'02':
        icon = two
            break;

        case'03':
        icon = three
            break;
    
        case'04':
        icon = four
            break;

        case'09':
        icon = nine
            break;
    
        case'10':
        icon = ten
            break;

        case'11':
        icon = eleven
            break;
    
        case'13':
        icon = thirteen
            break;

        case'50':
        icon = fifty
        break;
    }
}
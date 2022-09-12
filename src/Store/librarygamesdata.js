import clash from '../assets/images/clash.png'
import axie from '../assets/images/axie.png'
import war from '../assets/images/war.png'
import forestnight from '../assets/images/forestnight.png'
import rust from '../assets/images/rust.png'
import unravel from '../assets/images/unravel.png'
import Tetris from '../assets/images/Tetris.png'
import pacman from '../assets/images/pacman.png'

import blades from '../assets/images/blades.png'
import Nekoverse from '../assets/images/Nekoverse.png'
import avodaince from '../assets/images/avodaince.png'
import Decentraland from '../assets/images/Decentraland.png'
import DefinityLegend from '../assets/images/DefinityLegend.png'
import InuWars from '../assets/images/Inu Wars.png'
import BattleVerse from '../assets/images/Battle Verse.png'
import Mobox from '../assets/images/Mobox.png'
import StarAtlas from '../assets/images/Star Atlas.png'

const AllGamesData = [
    {        
        key: '6',
        title: 'Unravel Two',
        text: 'Adventure',
        img: unravel,
        button: "Play",
    },
    {        
        key: '3',
        title: 'Clash of Clans',
        text: 'Adventure',
        img: clash,
        button: "Play",
    },
    {        
        key: '7',
        title: 'Tetris',
        text: 'Arcade',
        img: Tetris,
        button: "Play",
    },
    {        
        key: '8',
        title: 'Pac Man',
        text: 'Arcade',
        img: pacman,
        button: "Play",
    },
    {        
        key: '3',
        title: 'Clash of Clans',
        text: 'Adventure',
        img: clash,
        button: "Play",
    },
    {        
        key: '1',
        title: 'Axie Infinity',
        text: 'Blockchain',
        img: axie,
        button: "Play",
    },
    {        
        key: '2',
        title: 'War of Ants',
        text: 'Blockchain',
        img: war,
        button: "Play",
    },
    {        
        key: '4',
        title: 'Clash of Clans',
        text: 'Adventure',
        img: forestnight,
        button: "Play",
    },
    {        
        key: '5',
        title: 'Age of Rust',
        text: 'Blockchain',
        img: rust,
        button: "Play",
    }
]

function OffSiteGame(key, title, text, img, btn, isOwn) {
    this.key = key
    this.title = title
    this.text = text 
    this.img = img
    this.btn = btn
    this.btn = 'More Info' 
    this.isOwn = isOwn
}

const game1 = new OffSiteGame('1', 'blades', 'Blockchain', blades, '', true, )
const game2 = new OffSiteGame('1', 'Nekoverse', 'Blockchain', Nekoverse, '', true,)
const game3 = new OffSiteGame('1', 'avodaince', 'Blockchain', avodaince, '', false)
const game4 = new OffSiteGame('1', 'Decentraland', 'Blockchain', Decentraland, '', true, )
const game5 = new OffSiteGame('1', 'Definity Legend', 'Blockchain', DefinityLegend, '', false)
const game6 = new OffSiteGame('1', 'Inu Wars', 'Blockchain', InuWars, '', true, )
const game7 = new OffSiteGame('1', 'Battle Verse', 'Blockchain', BattleVerse, '', true, )
const game8 = new OffSiteGame('1', 'blade', 'Blockchain', rust, '', false)
const game9 = new OffSiteGame('1', 'Mobox', 'Blockchain', Mobox, '', false)
const game10 = new OffSiteGame('1', 'Star Atlas', 'Blockchain', StarAtlas, '', true, )
const game11 = new OffSiteGame('1', 'Clash of Clans', 'Blockchain', forestnight, '', false)
const game12 = new OffSiteGame('1', 'Pac Man', 'Blockchain', pacman, '', true, )
const game13 = new OffSiteGame('1', 'unravel', 'Blockchain', unravel, '', false)

const OffSiteGames = [ game5, game6, game1, game2, game3, game4, game7, game8, game9, game10, game11, game12, game13 ]

export default AllGamesData;
export { OffSiteGames };
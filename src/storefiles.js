import opensea from '../src/assets/images/opensea.png';
import afen from '../src/assets/images/afen.png';
import bioshock from '../src/assets/images/bioshock.png';
import val from '../src/assets/images/val.png';
import forestnight from '../src/assets/images/forestnight.png';
import rust from '../src/assets/images/rust.png';
import one1 from './assets/images/one1.png'
import Two2 from './assets/images/Two2.png'
import Three3 from './assets/images/Three3.png'
import Four4 from './assets/images/Four4.png'
import Five5 from './assets/images/Five5.png'


const Marketplace = [
    {
        key: 1,
        img : afen,
    },
    {
        key: 2,
        img : opensea,
    },
]

const Collectible = [
    {
        key: 1,
        img : one1
    },
    {
        key: 2,
        img : Two2
    },
    {
        key: 3,
        img : Three3
    },
    {
        key: 4,
        img : Four4
    },
    {
        key: 5,
        img : Five5
    },
];

const Games = [
    {
        key: 1,
        image: forestnight,
        btn: 'install',
        title: 'Forest Knight',
        type: 'Blockchain',
    },
    {
        key: 2,
        image: rust,
        btn: 'install',
        title: 'Age of Rust',
        type: 'Blockchain',
    },
    {
        key: 3,
        image: bioshock,
        btn: 'install',
        title: 'Bioshock',
        type: 'First Shooter',
    },
    {
        key: 4,
        image: val,
        btn: 'install',
        title: 'Valheim',
        type: 'Adventure',
    },

];

export { Games, Collectible, Marketplace };
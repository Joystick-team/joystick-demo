import opensea from '../../src/assets/images/opensea.png';
import afen from '../../src/assets/images/afen.png';
import bioshock from '../../src/assets/images/bioshock.png';
import val from '../../src/assets/images/val.png';
import forestnight from '../../src/assets/images/forestnight.png';
import rust from '../../src/assets/images/rust.png';
import one1 from '../assets/images/one1.png'
import Two2 from '../assets/images/Two2.png'
import Three3 from '../assets/images/Three3.png'
import Four4 from '../assets/images/Four4.png'
import Five5 from '../assets/images/Five5.png'


const Marketplace = [
    {
        key: 1,
        images : afen,
    },
    {
        key: 2,
        images : opensea,
    },
]

const Collectible = [
    {
        key: 1,
        images : one1
    },
    {
        key: 2,
        images : Two2
    },
    {
        key: 3,
        images : Three3
    },
    {
        key: 4,
        images : Four4
    },
    {
        key: 5,
        images : Five5
    },
];

const Games = [
    {
        key: 1,
        image: forestnight,
        btn: 'install',
        name: 'Forest Knight',
        type: 'Blockchain',
    },
    {
        key: 2,
        image: rust,
        btn: 'install',
        name: 'Age of Rust',
        type: 'Blockchain',
    },
    {
        key: 3,
        image: bioshock,
        btn: 'install',
        name: 'Bioshock',
        type: 'First Shooter',
    },
    {
        key: 4,
        image: val,
        btn: 'install',
        name: 'Valheim',
        type: 'Adventure',
    },

];

export { Games, Collectible, Marketplace };
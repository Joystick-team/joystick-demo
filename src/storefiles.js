import opensea from '../src/assets/images/opensea.png';
import afen from '../src/assets/images/afen.png';
import bioshock from '../src/assets/images/bioshock.png';
import val from '../src/assets/images/val.png';
import forestnight from '../src/assets/images/forestnight.png';
import rust from '../src/assets/images/rust.png';


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
        img : forestnight
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
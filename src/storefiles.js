import opensea from '../src/assets/images/opensea.png';
import afen from '../src/assets/images/afen.png';
import bioshock from '../src/assets/images/bioshock.png';
import val from '../src/assets/images/val.png';
import forestnight from '../src/assets/images/forestnight.png';
import rust from '../src/assets/images/rust.png';


const Marketplace = [
    {
        img : afen,
    },
    {
        img : opensea,
    },
]

const Collectible = [
    {
        img : {forestnight}
    },
];

const Games = [
    {
        image: forestnight,
        btn: 'install',
        title: 'Forest Knight',
        type: 'Blockchain',
    },
    {
        image: rust,
        btn: 'install',
        title: 'Age of Rust',
        type: 'Blockchain',
    },
    {
        image: bioshock,
        btn: 'install',
        title: 'Bioshock',
        type: 'First Shooter',
    },
    {
        image: val,
        btn: 'install',
        title: 'Valheim',
        type: 'Adventure',
    },

];

export { Games, Collectible, Marketplace };
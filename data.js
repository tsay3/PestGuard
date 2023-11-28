const stores = [
    {   id:1,
        name:"The Home Depot",
        lat:41.86639096927094,
        lng:-87.64199656086994,
        url:"https://www.homedepot.com/l/South-Loop/IL/Chicago/60607/1950/garden-center?cm_mmc=EM%7CGoogleMaps%7CGardenCenter"},
    {   id:2,
        name:"Lowe's Home Improvement",
        lat:41.90653535399361,
        lng:-87.66834200688452,
        url:""}];
const solutions = [
    {   id:1,
        name:"Neem Oil",
        img:"images/neemOil.jpg",
        desc1:"Naturally occurring pesticide found in seeds.",
        desc2:"Repels many insects such as ants, beetles, and caterpillars.",
        desc3:"To use: Dilute in water and spray.",
        isNatural: true,
        petFriendly: true,
        ecoFriendly: true},
    {   id:2,
        name:"Insecticidal Soap",
        img:"images/insecticidalSoap.jpg",
        desc1:"Diluted potassium salt mixture.",
        desc2:"Environmentally friendly non-toxic insect repellent.",
        desc3:"To use: spray directly on leaves.",
        isNatural: false,
        petFriendly: true,
        ecoFriendly: true},
    {   id:3,
        name:"Castile Soap",
        img:"images/castileSoap.jpg",
        desc1:"Olive-oil-based liquid soap.",
        desc2:"Chemical-free preventative solution for insects.",
        desc3:"To use: Dilute in water and spray.",
        isNatural: true,
        petFriendly: false,
        ecoFriendly: true},
    {   id:4,
        name:"Paraquat",
        img:"images/paraquat.jpg",
        desc1:"Highly toxic herbicide.",
        desc2:"Effective against most plants.",
        desc3:"To use: spray on unwanted plants.",
        isNatural: false,
        petFriendly: false,
        ecoFriendly: false}
];
const store_inventories = [
    {store_id: 1, solution_id: 1},
    {store_id: 2, solution_id: 1}
];

const pestsData = [
    {
        id: 1,
        name: "Aphids",
        image: "plant-info-images/aphid.jpg",
    },
    {
        id: 2,
        name: "Stem and Bulb Nema",
        image: "plant-info-images/stem-bulb.jpg",
    },
    {
        id: 3,
        name: "Onion Fly",
        image: "plant-info-images/onion-fly.jpg",
    },
    {
        id: 7,
        name: "Cicada",
        image: "images/cicada.jpg",
    },
    {
        id: 11,
        name: "Japanese Beetle",
        image: "images/japaneseBeetle.jpg",
    },
    {
        id: 13,
        name: "Rabbit",
        image: "images/rabbit.jpg",
    },
    {
        id: 14,
        name: "Slug",
        image: "images/slug.jpg",
    },
];

const weedsData = [
{
    id: 4,
    name: "Wild Mustard",
    image: "plant-info-images/wild-mustard.jpeg",
    destination: "pest_results.html",

},
{
    id: 5,
    name: "Barnyard Grass",
    image: "plant-info-images/barnyard-grass.jpg",
},
{
    id: 6,
    name: "Field Bindweed",
    image: "plant-info-images/field-bindweed.jpg",

},
{
    id: 8,
    name: "Common Ragweeds",
    image: "images/ragWeed.jpg",

},
{
    id: 9,
    name: "Crabgrass",
    image: "images/crabGrass.jpg",

},
{
    id: 10,
    name: "Dandelions",
    image: "images/dandelions.jpg",

},
{
    id: 12,
    name: "Prostrate Knotweeds",
    image: "images/prostrateKnotweed.jpg",

},

];

const pests_to_solutions = [
    {pest_id: 1, solution_id: 1},
    {pest_id: 1, solution_id: 2},
    {pest_id: 1, solution_id: 3},
    {pest_id: 2, solution_id: 1},
    {pest_id: 2, solution_id: 3},
    {pest_id: 3, solution_id: 1},
    {pest_id: 3, solution_id: 2},
    {pest_id: 3, solution_id: 3}
];
const weeds_to_solutions = [
    {pest_id: 4, solution_id: 4},
    {pest_id: 5, solution_id: 4},
    {pest_id: 6, solution_id: 4}
];


const plants = [
    {id: 1,
    name: "Dandelions",
    image: "images/dandelions.jpg",},

    {id: 2,
    name: "Onions",
    image: "images/onion-icon.jpg",},

    {id: 3,
    name: "Radish",
    image: "images/onion-icon.jpg",}
]
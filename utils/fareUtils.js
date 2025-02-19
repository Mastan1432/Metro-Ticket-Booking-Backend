const metroStations=[
    {id:1,name:"Guntur"},
    {id:2,name:"peddakakani"},
    {id:3,name:"Mangalgiri"},
    {id:4,name:"Vijayawada"},
    {id:5,name:"Nambur"},
    {id:6,name:"Autonagar"}
];


// function to calculate fare
function calculateFare(source,destination){
    const farePerStation=10;
    const sourceIndex=metroStations.findIndex(s=>s.name===source);
    const destinationIndex=metroStations.findIndex(s=>s.name===destination);

    if(sourceIndex===-1 || destinationIndex===-1) return null;
    return Math.abs(destinationIndex-sourceIndex)*farePerStation;
}

module.exports={calculateFare,metroStations};
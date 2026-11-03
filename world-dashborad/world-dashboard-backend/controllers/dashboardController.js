const db = require('../config/db')
async function totalPopulation(req,res){
    try {
        q1 = "SELECT SUM(Population) AS totalPopulation FROM country"
        const [population] = await db.query(q1)
        const totalPopulation = population[0].totalPopulation
        res.status(200).send({totalPopulation:totalPopulation})
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
}


async function top10PopuContry (req,res){
    try {
        q2 = "SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10;"
        const [top10Pop] = await db.query(q2)
        res.status(200).send({top10Pop:top10Pop})

    } catch (error) {
        res.status(500).send({msg:"server error"})
        
    }
}



module.exports = {
    totalPopulation,
    top10PopuContry
}
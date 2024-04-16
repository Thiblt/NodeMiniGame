const Score = require('../model/score.js');


const RandomChoice = ()=> { rand= Math.random()
    return rand<0.34?"pierre":rand>0.65?"feuille":"ciseaux" }

   
const CheckId1Exist= () => {
    if(Score.findByPk(1).then((score)=> score)===null){
        const score = {
            id: 1,
            win: 0,
            loose:0 ,
            tie: 0,
          };
          Score.create(score)
            .then((score) => {
              res.send(score);
            })
            .catch((err) => {
              res.send(err);
            });
    }
   }

    module.exports = { RandomChoice, CheckId1Exist };

const Score = require("../model/score.js");
const { RandomChoice, CheckId1Exist } = require("../service/gameService.js");

const play = async (req, res) => {
    const AIChoice = RandomChoice();
    if(req.params.choice!= "pierre" && "feuille" && "ciseaux")
    
    {return res.json("Il faut jouer pierre/feuille/ciseaux")}

    try {
        const score = await Score.findByPk(1);

        if (req.params.choice === AIChoice) {
            score.tie += 1;
            await Score.update({ tie: score.tie }, { where: { id: 1 } });
            res.json("Egalité");
        } else if (
            (req.params.choice === "pierre" && AIChoice === "ciseaux") ||
            (req.params.choice === "ciseaux" && AIChoice === "feuille") ||
            (req.params.choice === "feuille" && AIChoice === "pierre")
        ) {
            score.win += 1;
            await Score.update({ win: score.win }, { where: { id: 1 } });
            res.json("Victoire!");
        } else {
            score.loose += 1;
            await Score.update({ loose: score.loose }, { where: { id: 1 } });
            res.json("Défaite...");
        }
    } catch (err) {
        res.json(err);
    }
};


const getScore = (req, res) => {
  Score.findByPk(1).then((score) => res.json(score));
};

const reset = async (req, res) =>{
    try {

        score = {
            win: 0,
            loose: 0,
            tie: 0,
        };

        await Score.update(score, { where: { id: 1 } });
        res.json(score);
    } catch (err) {
        res.send(err);
    }
};

const cheat = async (req, res) => {
    try {

        score = {
            win: parseInt(req.params.win),
            loose: parseInt(req.params.loose),
            tie: parseInt(req.params.tie),
        };

        await Score.update(score, { where: { id: 1 } });
        res.json(score);
    } catch (err) {
        res.send(err);
    }
};

//   const createFirstScore = (req, res) => {
//     const AIChoice= RandomChoice();

//     const score = {

//         win: 0,
//         loose:0 ,
//         tie: 0,
//       };
//       Score.create(score)
//         .then((score) => {
//           res.send(score);
//         })
//         .catch((err) => {
//           res.send(err);
//         });
//   }

module.exports = { play, getScore, reset, cheat };

import React from "react";

 const IndividualRankingInClass = ({
  rankingIndNum,
  listeningIndRanking,
  listeningScore,
  writingIndRanking,
  gpScore,
  gpIndRanking,
  writingScore,
}) => {
  return (
    <div className="container">
  {/* class ranking */}
    <div>
            <div>Yoour total score puts you N: {rankingIndNum} in class</div>
      <div>
       you rank N:{listeningIndRanking}  in listening / score: {listeningScore}{" "}
      </div>
      <div>
        you rank N:{gpIndRanking} in General Paper / score: {gpScore}{" "}
      </div>
      <div>
       you rank N:{writingIndRanking} in Writing score/{writingScore}{" "}
      </div>

    </div>

     {/* loading  */}
     <h3>Your Year 2 results will be available soon.</h3>

       
    </div>
  );
};

export default IndividualRankingInClass
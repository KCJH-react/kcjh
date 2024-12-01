import Challenge from './Challenge';

function getChallengeById(id) {
  return Challenge.find((challenge) => challenge.id === id);
}

export default getChallengeById;
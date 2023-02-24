function baseBall(ops) {
  let score = [];
  let sum = 0;
  for (let i = 0; i < ops.length; i++) {
    if (Number(ops[i])) {
      score.push(Number(ops[i]));
    } else if (ops[i] === "+") {
      score.push(score[score.length - 1] + score[score.length - 2]);
    } else if (ops[i] === "D") {
      score.push(score[score.length - 1] * 2);
    } else if (ops[i] === "C") {
      score.pop();
    }
  }
  score.forEach((item) => (sum += item));
  return sum;
}

let case_one = ["5", "2", "C", "D", "+"];
// baseBall(case_one);
const result = baseBall(case_one);
console.log(result);

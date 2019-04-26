let scoreClass1 = [10, 5, 2, 8, -1, 6, 8];
let scoreClass2 = [2, 4, 0, 5, 1];
let scoreClass3 = [8, 6, 2, 6, 1, 1, 4];

function  findMinScore(scoreClass) {
  this.scoreClass = scoreClass;
  let min = scoreClass[0];
  for (let i = 1; i < scoreClass.length; i++) {
    if (min > scoreClass[i]) min = scoreClass[i];
  }
  alert("Điểm thi thấp nhất lớp là: " + min);
  return scoreClass;
}

findMinScore(scoreClass1);
findMinScore(scoreClass2);
findMinScore(scoreClass3);
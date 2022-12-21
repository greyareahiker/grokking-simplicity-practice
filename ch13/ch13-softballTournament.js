/**
 * 다음은 코치가 정리한 데이터입니다. 목록은 이미 높은 점수순으로 정렬되어 있습니다.
 * var evaluations = [
 *   {name: "Jane", position: "catcher”, score: 25},
 *   {name: "John", position: "pitcher", score: 10},
 *   {name: "Harry", position: "pitcher", score: 3},
 *   ...
 * ];
 * 최종 명단은 다음과 같이 만들어야 합니다.
 * var roster = {"pitcher" : "John", "catcher": "Jane","first base": "Ellen", ...};
 * 포지션별로 가장 높은 사람을 골라 명단을 완성하는 코드를 만들어 보세요.
 */

const roster = evaluations.reduce((roster, person) => {
  const position = person.position

  if (!roster[position]) {
    roster[position] = person.name
  }

  return roster
}, {})

/**
 * recommendPosition()을 사용해 직원 이름을 리스트를 모든 직원의 주천 레코드로 바꾸는 코드를 만들어 보세요.
 * 결과 모양
 * { name: "Jane", position: "catcher" }
 */

const recommendations = employeeNames.map((name) => ({
  name,
  position: recommendPosition(name),
}))

/**
 * 추천 레코드 목록을 가지고 있을 때 레코드값을 인자로 scorePlayer()를 불러 다음과 같은 평점 레코드를 만들어야 합니다.
 * { name: "Jane", position: "catcher" , score: 25 }
 */

const evaluations = recommendations.map((rec) => ({
  ...rec,
  score: scorePlayer(rec.name, rec.position),
}))

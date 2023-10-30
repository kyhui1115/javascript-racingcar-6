import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const CAR = await Console.readLineAsync('');
    const CAR_LIST = CAR.split(',');
    this.validateCarNameLength(CAR_LIST);

    const SCORES = [];
    const RACE = CAR_LIST.map((car) => {
      SCORES.push(0);
      return `${car} : `;
    });

    Console.print('시도할 횟수는 몇 회인가요?');
    const COUNT = await Console.readLineAsync('');
    this.validateCountNumber(COUNT);


  validateCarNameLength(carList) {
    carList.forEach((car) => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해 주세요.');
      }
    });
  }

  validateCountNumber(count) {
    if (count === '0') {
      throw new Error('[ERROR] 시도할 횟수는 1회 이상 입력해 주세요');
    }

    if (/[^1-9]/.test(count)) {
      throw new Error('[ERROR] 숫자만 입력이 가능합니다.');
    }
  }

}

export default App;

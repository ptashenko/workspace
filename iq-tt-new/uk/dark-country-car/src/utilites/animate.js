export function animate({ timing, draw, duration }) {
  let start = performance.now()

  return new Promise((resolve) => {
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction)

      draw(progress)

      if (timeFraction < 1) {
        requestAnimationFrame(animate)
      } else {
        resolve()
      }
    })
  })
}

export function back(timeFraction, x = 1.7) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}

export function penta(timeFraction) {
  return Math.pow(timeFraction, 5)
}

export function qubic(timeFraction) {
  return Math.pow(timeFraction, 3)
}

// принимает функцию расчёта времени и возрващает преобразованный вариант
export function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction)
  }
}

export function makeToZero(timing) {
  return function (timeFraction) {
    return timing(1 - timeFraction)
  }
}

// При ratio 1 => 0 функция вернет значение от initValue до endValue,
//  при ratio = 0 результат = endValue, при ratio = 1 результат = initValue
export function setupEndValue(initValue, endValue, ratio) {
  return (initValue - endValue) * ratio + endValue
}

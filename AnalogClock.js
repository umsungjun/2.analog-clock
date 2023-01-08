import { appendChildrenList, makeDOMwithProperties } from './utils/dom.js';

const get = (target) => {
  return document.querySelector(target)
}

const AnalogClock = $container => {
  // do something!
  // console.log($container) // .analog-clock

  const hour = makeDOMwithProperties('div', {
    className: 'hand hour'
  }) // 시간

  const minute = makeDOMwithProperties('div', {
    className: 'hand minute'
  }) // 분

  const second = makeDOMwithProperties('div', {
    className: 'hand second'
  }) // 초


  const time1 = makeDOMwithProperties('div', {
    className: 'time time1',
    innerHTML: '|'
  })

  const time2 = makeDOMwithProperties('div', {
    className: 'time time2',
    innerHTML: '|'
  })

  const time3 = makeDOMwithProperties('div', {
    className: 'time time3',
    innerHTML: '|'
  })

  const time4 = makeDOMwithProperties('div', {
    className: 'time time4',
    innerHTML: '|'
  })

  const time5 = makeDOMwithProperties('div', {
    className: 'time time5',
    innerHTML: '|'
  })

  const time6 = makeDOMwithProperties('div', {
    className: 'time time6',
    innerHTML: '|'
  })

  const time7 = makeDOMwithProperties('div', {
    className: 'time time7',
    innerHTML: '|'
  })

  const time8 = makeDOMwithProperties('div', {
    className: 'time time8',
    innerHTML: '|'
  })

  const time9 = makeDOMwithProperties('div', {
    className: 'time time9',
    innerHTML: '|'
  })

  const time10 = makeDOMwithProperties('div', {
    className: 'time time10',
    innerHTML: '|'
  })

  const time11 = makeDOMwithProperties('div', {
    className: 'time time11',
    innerHTML: '|'
  })

  const time12 = makeDOMwithProperties('div', {
    className: 'time time12',
    innerHTML: '|'
  })


  appendChildrenList($container, [hour, minute, second, time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12]) // 시, 분, 초 막대 및 시간별 막대 생성

  // 시계가 100개가 생겨도 dom들은 구축이 됨
  const $hour = document.getElementsByClassName('hand hour') // 시간 DOM 
  const $minute = document.getElementsByClassName('hand minute') // 분 DOM
  const $second = document.getElementsByClassName('hand second') // 초 DOM 



  for (let i = 0; i < $hour.length; i++) {
    setInterval(() => { // setInterval은 반복문의 관계없이 지정된 시간마다 반복
      const date = new Date() // 현재 날짜 및 시간을 1초마다 가져옴

      $hour[i].style.setProperty('--deg', date.getHours() * 5) // 360 / 24 = 15
      $minute[i].style.setProperty('--deg', date.getMinutes() * 6) // 360 / 60 = 6
      $second[i].style.setProperty('--deg', date.getSeconds() * 6) // 360 / 60 = 6
    }, 1000)
  }




};



export default AnalogClock;

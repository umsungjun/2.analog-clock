import { appendChildrenList, makeDOMwithProperties } from './utils/dom.js';

const AnalogClock = $container => {
  // do something!
  // console.log($container) // .analog-clock

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


  appendChildrenList($container, [time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12]) // 시간별 막대 생성
};

export default AnalogClock;

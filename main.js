
// 1. Object kalitlari va qiymatlarini tengligini tekshirish
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// areEqual( data, data2 )  => true
// areEqual( data, data3 )  => false

const EqualObjects = (a, b) => {
    let s = (o) => Object.entries(o).sort().map(i => {
       if(i[1] instanceof Object) i[1] = s(i[1]);
       return i
    })
    return JSON.stringify(s(a)) === JSON.stringify(s(b))
  }

  console.log(EqualObjects({ a: 1, b: 1 }, { a: 1, b: 2 }));
/**

  Sebuah guild dalam game memiliki beberapa anggota, dari berbagai jenis class dan level
  sebuah fungsi getGuildMemberInfo akan menerima daftar member dari guild tesebut
  fungsi tersebut akan menampilkan jumlah member, rata-rata level anggota dan
  daftar member per-class yang levelnya diatas rata-rata

  contoh:
  - input:
    [{
      name: 'antonio',
      level: 90,
      class: 'Knight'
    },
    {
      name: 'banderaz',
      level: 90,
      class: 'Priest'
    },
    {
      name: 'cecile',
      level: 99,
      class: 'Knight'
    },
    {
      name: 'dominique',
      level: 92,
      class: 'Hunter'
    },
    {
      name: 'eric',
      level: 92,
      class: 'Priest'
    },
    {
      name: 'fernandez',
      level: 91,
      class: 'Knight'
    }]
  - output:
  {
   totalMember: 6,
   averageLevel: 92,
   Knight: [ { name: 'cecile', level: 99 } ],
   Priest: [ { name: 'eric', level: 92 } ],
   Hunter: [ { name: 'dominique', level: 92 } ]
  }

  PENJELASAN
  jumlah total level member adalah 90 + 90 + 99 + 92 + 92 + 91 = 554
  totalMember didapat dari jumlah member yaitu 6 orang
  averageLevel didapat dari total level member/total member yang dibulakan ke bawah 554/6 = 92
  sehingga untuk Top masing-masing class adalah member dengan class tersebut yang levelnya diatas atau sama dengan 92
  jika tidak ada class tersebut yang diatas atau sama dengan rata-rata maka top class tidak ditampilkan

  RULES:
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .map(), .filter() dan .reduce()
  - DILARANG MENGGUNAKAN SPREAD SYNTAX

 */

function getGuildMemberInfo(members) {
  // your code here
  let result = {}
  let totalLevel = 0
  let averageLevel = 0


  for (let i = 0; i < members.length; i++){
    totalLevel += members[i]['level']
  }
  averageLevel = Math.floor(totalLevel / members.length)

  result['totalMember'] = members.length
  result['averageLevel'] = averageLevel

  for (let i = 0; i < members.length; i++){
    let nama = members[i]['name']
    let level = members[i]['level']
    let kelas = members[i]['class']
    
    if (level >= averageLevel && result[members[i]['class']] == undefined){
      result[members[i]['class']] = [{name: nama, level: level}]
    }else if (level >= averageLevel){
      result[members[i]['class']].push({name: nama, level: level})
    }

  }

  return result
}



console.log(getGuildMemberInfo([
  {
    name: 'antonio',
    level: 90,
    class: 'Knight'
  },
  {
    name: 'banderaz',
    level: 90,
    class: 'Priest'
  },
  {
    name: 'cecile',
    level: 99,
    class: 'Knight'
  },
  {
    name: 'dominique',
    level: 92,
    class: 'Hunter'
  },
  {
    name: 'ernest',
    level: 92,
    class: 'Priest'
  },
  {
    name: 'fernandez',
    level: 91,
    class: 'Knight'
  },
  {
    name: 'goblin',
    level: 95,
    class: 'Knight'
  },
  {
    name: 'hemogoblin',
    level: 93,
    class: 'Hunter'
  }
]));
/**
output
{
  totalMember: 8,
  averageLevel: 92,
  Knight: [ { name: 'cecile', level: 99 }, { name: 'goblin', level: 95 } ],
  Priest: [ { name: 'ernest', level: 92 } ],
  Hunter: [ { name: 'dominique', level: 92 },{ name: 'hemogoblin', level: 93 } ]
}
 */

 console.log(getGuildMemberInfo([
  { name: 'indah', level: 85, class: 'Assasint' },
  { name: 'juminten', level: 92, class: 'Blacksmith' },
  { name: 'kumar', level: 95, class: 'Wizard' },
  { name: 'lili', class: 'Priest', level: 99 },
  { name: 'munaroh', class: 'Blacksmith', level: 95 }
]));
/**
 output:
{
  totalMember: 5,
  averageLevel: 93,
  Blacksmith: [ { name: 'munaroh', level: 95 } ],
  Wizard: [ { name: 'kumar', level: 95 } ],
  Priest: [ { name: 'lili', level: 99 } ]
}
 */

//console.log(getGuildMemberInfo([])); // invalid data

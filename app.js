const heroes = [
  {
    name: 'Path',
    type: 'dwarf',
    damage: 5,
    health: 100
  },
  {
    name: 'Cal',
    type: 'elf',
    damage: 10,
    health: 50
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}

function drawHeroes() {
  // start with an empty template - empty template is ''
  let template = ''
  // grab the heroes we want to show up on the page
  heroes.forEach(hero => template += `
    <div>
          <h3>${hero.name}</h3>
          <p id="pathHealth">HP: ${hero.health}<span></span></p>
          <p>Damage: ${hero.damage}</p>
          <button onclick="attackBossPath()">ATTACK</button>
    </div>
  `)
  // @ts-ignore
  document.getElementById('heroes').innerHTML = template
}
drawHeroes()


// SECTION damage
// drawMaxHealth('maxHealth') {
//   console.log('draw health')
// }


function potion() {
  console.log('potion')
}
// SECTION ATTACK BOSS
function attackBossPath() {
  // check console
  // console.log('attack')
  // does the boss have health to decrease?

  // if the boss does have health, decrease the boss health by the hero damage
  // This is the hero we want to damage the boss with
  let Path = heroes[0]

  // NOTE if we want both of the heroes to be able to do damage then we need to grab the heroes from the array using an array method (forEach)
  // for each hero we want each heros damage value to decrease the bossHealth

  // subtract heros damage from the boss health 
  boss.maxHealth -= Path.damage
  console.log('damage done', boss.maxHealth)
  // drawMaxHealth()s --> re-draw the boss health to reflect what will be on the screen
  updateBoss()
}
function attackBossCal() {
  let Cal = heroes[1]
  boss.maxHealth -= Cal.damage
  console.log('damage done', boss.maxHealth)
  updateBoss()
}
function attackHeroPath() {
  // let Boss = boss[0]
  let Path = heroes[0]
  Path.health -= boss.damage
  console.log('damage done', Path.health)
  updateHeroesBad()
}
function attackHeroCal() {
  let Cal = heroes[1]
  Cal.health -= boss.damage
  console.log('damage done', Cal.health)
  updateHeroesBad()
}

// this function is 'drawing' the boss health to the page
function updateBoss() {
  // updateMaxHealth(maxhealth)
  let bossElem = document.getElementById('bossHealth')
  // @ts-ignore
  bossElem.innerHTML = `<span>${boss.maxHealth}</span>`
  // console.log('this should be my boss element???', bossElem);
}
updateBoss()

// NOTE to make this re-usable use a parameter and argument
function updateHeroesBad() {
  let Path = heroes[0]
  let heroElem = document.getElementById('pathHealth')
  // @ts-ignore
  heroElem.innerHTML = `<span>${Path.health}</span>`
}
updateHeroesBad()



// function updateMaxHealth() {
//   if (boss.maxHealth >= 95) { }
// }


// SECTION SHOP
function buyPotion() {
  console.log('potion')
}
function buyPlayerThree() {
  console.log('player 3')
}
function buyPlayerFour() {
  console.log('player 4')
}

let bossHealth = 100
heroes.forEach(h => {

})
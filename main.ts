input.onButtonPressed(Button.A, function on_button_pressed_a() {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        
        if (Shoot.get(LedSpriteProperty.Y) <= 0) {
            Shoot.delete()
        }
        
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    Player.change(LedSpriteProperty.X, 1)
})
let EnemyFire : game.LedSprite = null
let Shoot : game.LedSprite = null
let Enemy : game.LedSprite = null
let Player : game.LedSprite = null
game.setLife(4)
game.setScore(0)
Player = game.createSprite(2, 4)
Enemy = game.createSprite(0, -4)
basic.forever(function on_forever() {
    
    Enemy.move(1)
    basic.pause(100)
    Enemy.ifOnEdgeBounce()
    EnemyFire = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
    EnemyFire.set(LedSpriteProperty.Brightness, 100)
    for (let index2 = 0; index2 < 4; index2++) {
        EnemyFire.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (EnemyFire.isTouching(Player)) {
            game.removeLife(1)
        }
        
        if (EnemyFire.get(LedSpriteProperty.Y) >= 4) {
            EnemyFire.delete()
        }
        
    }
})

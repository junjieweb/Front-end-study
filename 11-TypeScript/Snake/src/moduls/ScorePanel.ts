// 定义表示记分牌的类
class ScorePanel {
    // 记录分数和等级
    score: number = 0
    level: number = 1
    // 分数的等级所在的元素
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 设置一个变量限制等级
    maxLevel: number
    // 设置一个变量表示多少分时升级
    upScore: number

    constructor(maxLevel: number = 10, upScore = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置加分的方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        // 判断分数是多少
        // if (this.score % this.upScore === 0) {
        //     this.levelUp()
        // }
        this.score % this.upScore === 0 && this.levelUp()
    }

    // 等级提升的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel

import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏控制器，控制其他所有类
class GameControl {
    // 定义三个属性
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方向（按键的方向）
    direction: string = ''
    // 创建一个属性用来记录游戏是否结束
    isLive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    // 游戏初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    /*
        ArrowUp  Up
        ArrowDown Down
        ArrowLeft Left
        ArrowRight Right
    */

    // 创建键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法（用户按下了正确的按键）
        // 修改 direction 属性
        this.direction = event.key
    }

    // 创建控制蛇移动的方法
    run() {
        /*
        *   根据方向（this.direction）来使蛇的位置改变
        *       向上 top 减少
        *       向下 top 增加
        *       向左  left 减少
        *       向右  left 增加
        * */
        // 获取蛇现在的坐标
        let X = this.snake.X
        let Y = this.snake.Y
        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                Y += 10
                break
            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break
            case 'ArrowRight':
            case 'Right':
                X += 10
                break
        }
        // 检查蛇是否吃到了食物
        this.checkEat(X, Y)
        // 修改蛇的X和Y值
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert((e as Error).message + 'GAME OVER!')
            this.isLive = false
        }

        // 开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 检测蛇是否吃到食物的方法
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 食物位置进行重置
            this.food.change()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇增加一节
            this.snake.addBody()
        }
    }
}

export default GameControl

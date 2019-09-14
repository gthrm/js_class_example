class Task {
    constructor(props = false) {
        this._isDone = props;
        console.log('constructor Task ');

    }

    get isDone() {
        return this._isDone ? 'Выполнено' : 'Не выполнено'
    }

    set isDone(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._isDone = value
        } else {
            console.error('Не верный тип данных')
        }
    }

    getInfo() {
        return this.isDone
    }

    static compliteStaticMetod(value) {
        return `Ваше значение: ${value}`
    }
}

class SubTask extends Task {
    constructor(props) {
        super(props);
        console.log('constructor SubTask ');
    }

    getInfo() {
        super.getInfo();
        return `${this.isDone} SubTask`
    }
}

let task = new Task();
let subTask = new SubTask();

console.log(task, subTask);
console.log(subTask instanceof Task);
console.log(subTask instanceof SubTask);

console.log(task.getInfo());
console.log(subTask.getInfo());

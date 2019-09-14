class Task {
    constructor(props = false) {
        this._isDone = props;
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

    getInfo = () => {
        return Task.compliteStaticMetod(this._isDone)
    }

    static compliteStaticMetod = (value) => {
        return `Ваше значение: ${value}`
    }
}

let oneTask = new Task();
console.log(oneTask.getInfo())
oneTask.isDone = true;
console.log(oneTask.getInfo())
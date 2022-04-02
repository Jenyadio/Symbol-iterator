import Person from './person';

class Team {
  constructor(...args) {
    this.team = [...args];
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.length;
    return {
      next() {
        if (current < last) {
          const result = { done: false, value: this[current] };
          current += 1;
          return result;
        }
        return { done: true };
      },
    };
  }
}
const bowman = new Person('Oleg', 'Bowman', 100, 10, 20, 10);
const daemon = new Person('Stas', 'Daemon', 100, 5, 40, 20);
const magician = new Person('Ivan', 'Magician', 100, 10, 15, 30);
const team = new Team(bowman, daemon, magician);

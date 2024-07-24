const myName: string = 'Felipe';
const myAge: number = 12;

const suma = (a: number, b: number): number => {
  return a + b;
};
suma(12, 12);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name} and my age is ${this.age}`;
  }
}
const persona = new Persona(myAge, myName);
persona.getSummary();

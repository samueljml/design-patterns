export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance() {
    if (MyDatabaseClassic.instance == null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }

  add(user: User) {
    this.users.push(user);
  }

  remove(index: number) {
    this.users.splice(index, 1);
  }

  show() {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

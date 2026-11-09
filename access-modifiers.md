# Access Modifiers in TypeScript OOP

## Introduction

The access modifiers like `public`, `private`, and `protected` in TypeScript control who can use a class's properties and methods while `readonly` in TypeScript controls whether anything can be changed after it is set.

## Public, private, and protected

Here is what each one means:

- `public` can be used from anywhere. If you write nothing, TypeScript treats the member as `public`.
- `private` can be used only inside the class itself.
- `protected` can be used inside the class and inside classes that extend it.

## Readonly

`readonly` works differently. It stops a property from being changed after it is set. You can set it in the constructor, but not later.

```typescript
type Organization = {
  readonly orgName: string;
  employees: number;
};

const org: Organization = {
  orgName: 'Demo Org',
  employees: 10,
};
```

Here if we try to change the `orgName`, we get an error. Because we set `orgName` as `readonly`, and it is set then it cannot be changed.

## A small example

```typescript
class BankAccount {
  public readonly owner: string;
  private balance: number;
  protected bankName: string = 'Demo Bank';

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  describe(): string {
    return `${this.bankName} account for ${this.owner}`;
  }
}

const account = new SavingsAccount('Alice', 500);
// account.balance;       // Error: balance is private
// account.bankName;      // Error: bankName is protected
// account.owner = 'Bob'; // Error: owner is readonly
```

`SavingsAccount` can use `bankName` because it is `protected`, but outside code cannot. The `balance` property stays hidden, so other code has to use `getBalance()` to read it.

## Conclusion

Use `private` for things only the class needs, `protected` for things child classes need, and `public` for things anyone may use. Use `readonly` for values that should never change after they are set. Choosing these carefully makes your code safer and easier to read.

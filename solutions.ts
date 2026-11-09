const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

type InputType = string | number | boolean;

const processInput = (input: InputType): string | number => {
  if (typeof input === 'string') {
    return input.trim().toLowerCase();
  } else if (typeof input === 'boolean') {
    return input ? 'Active' : 'Inactive';
  } else {
    return input * 10;
  }
};

type InputTuple = readonly [number, number, string];

const formatCoordinate = (coordinate: InputTuple): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course: Course): boolean =>
      course.students >= minStudents && course.isPublished,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item: T): T[K] => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error('Access Denied: Must be 18 or older');
  }

  await new Promise<void>((resolve): void => {
    setTimeout(resolve, 1000);
  });

  return 'Access Granted';
};

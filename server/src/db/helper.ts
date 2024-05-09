import PGPool from './pg_pool';

export class Helper {
  public static pool() {
    return new PGPool();
  }

  public static shallowCopy(source: any, target: any) {
    Object.keys(target).forEach((key) => {
      if (source[key] !== undefined) {
        target[key] = source[key];
      }
    });

    return target;
  }
}

export default Helper;

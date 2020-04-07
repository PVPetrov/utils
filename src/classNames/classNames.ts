/**
 * @author Petar Petrov PVPetrov
 * Takes array of arguments and returns a string with class names
 * @param args {Array<any>} - array of class names to be evaluated
 */

export type classNameType = (...args: any[]) => string;

const classNames: classNameType = (...args) =>
  args
    .map((arg: any) => {
      if (typeof arg === 'string') return arg;
      if (typeof arg === 'object') {
        if (Array.isArray(arg)) {
          return arg.filter((a) => typeof a !== 'undefined').join(' ');
        }
        return Object.entries(arg)
          .map(([key, value]) => !!value && key)
          .filter((a) => a)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .replace('  ', ' ');

export default classNames;

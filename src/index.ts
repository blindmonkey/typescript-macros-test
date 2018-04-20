import { tailrec } from './macros';


@tailrec
function factorial(n: number, aggregate: number = 1): number {
  if (n <= 1) return aggregate;
  return factorial(n - 1, aggregate * n)
}

// @tailrec should transform the above function into an iterative version of itself.
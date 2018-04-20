import * as ts from 'typescript';
import * as m from 'typescript-macros';

@macros
export function tailrec(arg: ts.FunctionDeclaration): ts.FunctionDeclaration {
  function processBody(arg: ts.Block|undefined): ts.Block|undefined {
    // TODO process body
    if (arg == null) return undefined;
    return arg;
  }
  return ts.createFunctionDeclaration([], [], undefined, arg.name, arg.typeParameters, arg.parameters, arg.type, processBody(arg.body));
}
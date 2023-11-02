import openColors from '../open-colors';

export function randomColor () :string{
  const n = Math.floor(Math.random()*openColors.length)+1
  return openColors[n]
}
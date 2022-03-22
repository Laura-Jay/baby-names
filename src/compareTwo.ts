interface babynameInfo {
  id: number;
  name: string;
  sex: string;
}

export default function compareTwo(
  infoA: babynameInfo,
  infoB: babynameInfo
): number {
  if (infoA.name < infoB.name) {
    return -1; //if it is earlier letter in alphabet move backwards
  } else if (infoA.name > infoB.name) {
    return 1; //if it is later letter in alphabet move forwards
  } else {
    return 0; //if it is the same letter don't move
  }
}

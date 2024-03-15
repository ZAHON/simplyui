export function getSliderThumbSize(size?: '1' | '2' | '3' | '4') {
  switch (size) {
    case '1': {
      return 8;
    }
    case '2': {
      return 16;
    }
    case '3': {
      return 20;
    }
    case '4': {
      return 24;
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
}

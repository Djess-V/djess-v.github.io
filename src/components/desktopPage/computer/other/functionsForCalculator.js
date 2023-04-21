function calculateValue(string) {
  const chars = ["/", "*", "+"];
  let flagThisIsSubtraction = true;
  let result;

  chars.forEach((item, i) => {
    const substrings = string.split(item);
    if (substrings.length !== 1) {
      flagThisIsSubtraction = false;
      if (i === 0) {
        if (+substrings[1] === 0) {
          result = "Oops!";
        } else {
          result = +substrings[0] / +substrings[1];
        }
      } else if (i === 1) {
        result = +substrings[0] * +substrings[1];
      } else if (i === 2) {
        result = +substrings[0] + +substrings[1];
      }
    }
  });

  if (flagThisIsSubtraction) {
    result = performASubtraction(string);
  }

  return formatResult(String(result));
}

function performASubtraction(string) {
  const substrings = string.split("-");
  let result;

  if (substrings.length === 2) {
    result = Number(substrings[0]) - Number(substrings[1]);
  } else if (substrings.length === 4) {
    result = -(Number(substrings[1]) - Number(substrings[3]));
  } else if (substrings.length === 3) {
    if (substrings[0] === "") {
      result = -Number(substrings[1]) - Number(substrings[2]);
    } else if (substrings[1] === "") {
      result = Number(substrings[1]) - -Number(substrings[2]);
    }
  }

  return result;
}

function formatResult(numberByString) {
  if (numberByString === "Oops!") {
    return numberByString;
  }

  const stringLength = numberByString.length;

  if (stringLength <= 11) {
    return numberByString;
  }

  if (numberByString.includes(".")) {
    if (numberByString.includes("e")) {
      const eIndex = numberByString.indexOf("e");

      if (eIndex <= 11) {
        return numberByString;
      } else if (eIndex > 11) {
        const string =
          numberByString.slice(0, 11) + numberByString.slice(eIndex);
        return string;
      }
    } else {
      const pointIndex = numberByString.indexOf(".");

      if (pointIndex < 11) {
        return numberByString.slice(0, 12);
      } else if (pointIndex === 11) {
        return numberByString.slice(0, 11);
      } else if (pointIndex > 11) {
        const string =
          numberByString.slice(0, 8) +
          "." +
          numberByString.slice(8, 9) +
          "e" +
          (pointIndex - 8);
        return string;
      }
    }
  } else {
    const string =
      numberByString.slice(0, 8) +
      "." +
      numberByString.slice(8, 9) +
      "e" +
      (stringLength - 8);
    return string;
  }
}

/*-------------------------------------------------------------------------*/

export default calculateValue;

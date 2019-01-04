function consoleClear() {
  console.clear();
}

function consoleCount() {
  for (i = 0; i < 10; i++) {
    console.count();
  }
}

function endTrace() {
  startTrace();
}

function startTrace() {
  console.trace();
}

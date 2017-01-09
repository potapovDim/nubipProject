export const buildConnectionMap = (builds) => {
  const length = Object.keys(builds).length
  const connectionMap = {}
  if (length === 6) {
    connectionMap[0] = [1]
    connectionMap[1] = [2]
    connectionMap[2] = [3]
    connectionMap[3] = [4]
    connectionMap[4] = [5]
    connectionMap[5] = []
  }
  if (length === 7) {
    connectionMap[0] = [1]
    connectionMap[1] = [2, 5]
    connectionMap[2] = [3]
    connectionMap[3] = [4]
    connectionMap[4] = []
    connectionMap[5] = [6]
    connectionMap[6] = []
  }
  if (length === 8) {
    connectionMap[0] = [1]
    connectionMap[1] = [2, 5]
    connectionMap[2] = [3]
    connectionMap[3] = [4]
    connectionMap[4] = []
    connectionMap[5] = [6]
    connectionMap[6] = [7]
    connectionMap[7] = []
  }
  if (length === 9) {
    connectionMap[0] = [1]
    connectionMap[1] = [2, 5]
    connectionMap[2] = [3]
    connectionMap[3] = [4]
    connectionMap[4] = []
    connectionMap[5] = [6]
    connectionMap[6] = [7]
    connectionMap[7] = [8]
    connectionMap[8] = []
  }
  if (length === 10) {
    connectionMap[0] = [1]
    connectionMap[1] = [2, 5]
    connectionMap[2] = [3]
    connectionMap[3] = [4]
    connectionMap[4] = []
    connectionMap[5] = [6]
    connectionMap[6] = [7]
    connectionMap[7] = [8]
    connectionMap[8] = [9]
    connectionMap[9] = []
  }
  return connectionMap
}
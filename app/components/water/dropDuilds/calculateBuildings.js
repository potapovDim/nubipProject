export const buildNewBuildingsPositions = (prevBoxes, buildings) => {
  if (buildings.cows.length == 1 && buildings.cows_before_20days.length == 1 && buildings.calves.length == 1) {
    prevBoxes[buildings.cows[0].name] = {
      top: 50,
      left: 120,
      title: buildings.cows[0].name,
      heads: buildings.cows[0].heads,
      waterNeedingForThisBuild: (buildings.cows[0].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: Object.keys(prevBoxes)[1]
    }
    prevBoxes[buildings.cows_before_20days[0].name] = {
      top: 50,
      left: 160,
      title: buildings.cows_before_20days[0].name,
      heads: buildings.cows_before_20days[0].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[0].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows[0].name
    }
    prevBoxes[buildings.calves[0].name] = {
      top: 50,
      left: 200,
      title: buildings.calves[0].name,
      heads: buildings.calves[0].heads,
      waterNeedingForThisBuild: (buildings.calves[0].heads * 30 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[0].name
    }
  }
  else if (buildings.cows.length == 1 && buildings.cows_before_20days.length == 2 && buildings.calves.length == 1) {
    prevBoxes[buildings.cows[0].name] = {
      top: 100,
      left: 140,
      title: buildings.cows[0].name,
      heads: buildings.cows[0].heads,
      waterNeedingForThisBuild: (buildings.cows[0].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: Object.keys(prevBoxes)[1]
    }
    prevBoxes[buildings.cows_before_20days[0].name] = {
      top: 100,
      left: 180,
      title: buildings.cows_before_20days[0].name,
      heads: buildings.cows_before_20days[0].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[0].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows[0].name
    }
    prevBoxes[buildings.cows_before_20days[1].name + 1] = {
      top: 100,
      left: 220,
      title: buildings.cows_before_20days[1].name,
      heads: buildings.cows_before_20days[1].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[1].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[0].name
    }
    prevBoxes[buildings.calves[0].name] = {
      top: 50,
      left: 260,
      title: buildings.calves[0].name,
      heads: buildings.calves[0].heads,
      waterNeedingForThisBuild: (buildings.calves[0].heads * 30 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[1].name + 1
    }
  }
  else if (buildings.cows.length == 1 && buildings.cows_before_20days.length == 2 && buildings.calves.length == 2) {
    prevBoxes[buildings.cows[0].name] = {
      top: 200,
      left: 100,
      title: buildings.cows[0].name,
      heads: buildings.cows[0].heads,
      waterNeedingForThisBuild: (buildings.cows[0].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: Object.keys(prevBoxes)[1]
    }
    prevBoxes[buildings.cows_before_20days[0].name] = {
      top: 200,
      left: 300,
      title: buildings.cows_before_20days[0].name,
      heads: buildings.cows_before_20days[0].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[0].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows[0].name
    }
    prevBoxes[buildings.cows_before_20days[1].name + 1] = {
      top: 200,
      left: 500,
      title: buildings.cows_before_20days[1].name,
      heads: buildings.cows_before_20days[1].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[1].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[0].name
    }
    prevBoxes[buildings.calves[0].name] = {
      top: 200,
      left: 700,
      title: buildings.calves[0].name,
      heads: buildings.calves[0].heads,
      waterNeedingForThisBuild: (buildings.calves[0].heads * 30 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[1].name + 1
    }
    prevBoxes[buildings.calves[1].name] = {
      top: 200,
      left: 900,
      title: buildings.calves[1].name,
      heads: buildings.calves[1].heads,
      waterNeedingForThisBuild: (buildings.calves[1].heads * 30 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.calves[0].name
    }
  }
  else if (buildings.cows.length == 2 && buildings.cows_before_20days.length == 2 && buildings.calves.length == 2) {
    prevBoxes[buildings.cows[0].name] = {
      top: 100,
      left: 100,
      title: buildings.cows[0].name,
      heads: buildings.cows[0].heads,
      waterNeedingForThisBuild: (buildings.cows[0].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: Object.keys(prevBoxes)[1]
    }
    prevBoxes[buildings.cows[1].name + 1] = {
      top: 100,
      left: 140,
      title: buildings.cows[1].name,
      heads: buildings.cows[1].heads,
      waterNeedingForThisBuild: (buildings.cows[1].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows[0].name
    }
    prevBoxes[buildings.cows_before_20days[0].name] = {
      top: 100,
      left: 180,
      title: buildings.cows_before_20days[0].name,
      heads: buildings.cows_before_20days[0].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[0].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows[1].name + 1
    }
    prevBoxes[buildings.cows_before_20days[1].name + 1] = {
      top: 100,
      left: 220,
      title: buildings.cows_before_20days[1].name,
      heads: buildings.cows_before_20days[1].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[1].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[0].name
    }
    prevBoxes[buildings.calves[0].name] = {
      top: 100,
      left: 260,
      title: buildings.calves[0].name,
      heads: buildings.calves[0].heads,
      waterNeedingForThisBuild: (buildings.calves[0].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[1].name + 1
    }
    prevBoxes[buildings.calves[1].name + 1] = {
      top: 100,
      left: 300,
      title: buildings.calves[1].name,
      heads: buildings.calves[1].heads,
      waterNeedingForThisBuild: (buildings.calves[1].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.calves[1].name
    }
  }
  else if (buildings.cows.length == 2 && buildings.cows_before_20days.length == 2 && buildings.calves.length == 1) {
    prevBoxes[buildings.cows[0].name] = {
      top: 300,
      left: 100,
      title: buildings.cows[0].name,
      heads: buildings.cows[0].heads,
      waterNeedingForThisBuild: (buildings.cows[0].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: Object.keys(prevBoxes)[1]
    }
    prevBoxes[buildings.cows[1].name + 1] = {
      top: 300,
      left: 400,
      title: buildings.cows[1].name,
      heads: buildings.cows[1].heads,
      waterNeedingForThisBuild: (buildings.cows[1].heads * 100 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows[0].name
    }
    prevBoxes[buildings.cows_before_20days[0].name] = {
      top: 300,
      left: 700,
      title: buildings.cows_before_20days[0].name,
      heads: buildings.cows_before_20days[0].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[0].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows[1].name + 1
    }
    prevBoxes[buildings.cows_before_20days[1].name + 1] = {
      top: 300,
      left: 1000,
      title: buildings.cows_before_20days[1].name,
      heads: buildings.cows_before_20days[1].heads,
      waterNeedingForThisBuild: (buildings.cows_before_20days[1].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[0].name
    }
    prevBoxes[buildings.calves[0].name] = {
      top: 300,
      left: 1300,
      title: buildings.calves[0].name,
      heads: buildings.calves[0].heads,
      waterNeedingForThisBuild: (buildings.calves[0].heads * 20 * 1.3 * 2.5) / (24 * 3600 * 1000),
      parentId: buildings.cows_before_20days[1].name + 1
    }
  }
  else if (buildings.cows.length == 3 && buildings.cows_before_20days.length == 2 && buildings.calves.length == 2) {
    prevBoxes[buildings.cows[0].name] = {
      top: 300,
      left: 100,
      title: buildings.cows[0].name,
      parentId: Object.keys(prevBoxes)[1]
    }
    prevBoxes[buildings.cows[1].name + 1] = {
      top: 300,
      left: 400,
      title: buildings.cows[1].name,
      parentId: buildings.cows[0].name
    }
    prevBoxes[buildings.cows[2].name + 2] = {
      top: 300,
      left: 700,
      title: buildings.cows[1].name,
      parentId: buildings.cows[1].name + 1
    }
    prevBoxes[buildings.cows_before_20days[0].name] = {
      top: 500,
      left: 100,
      title: buildings.cows_before_20days[0].name,
      parentId: buildings.cows[1].name + 2
    }
    prevBoxes[buildings.cows_before_20days[1].name + 1] = {
      top: 500,
      left: 400,
      title: buildings.cows_before_20days[1].name,
      parentId: buildings.cows_before_20days[0].name
    }
    prevBoxes[buildings.calves[0].name] = {
      top: 500,
      left: 700,
      title: buildings.calves[0].name,
      parentId: buildings.cows_before_20days[1].name + 1
    }
    prevBoxes[buildings.calves[1].name + 1] = {
      top: 500,
      left: 1000,
      title: buildings.calves[0].name,
      parentId: buildings.calves[0].name
    }
  }
  else if (buildings.cows.length == 4 && buildings.cows_before_20days.length == 3 && buildings.calves.length == 2) {
    prevBoxes[buildings.cows[0].name] = {
      top: 50,
      left: 80,
      title: buildings.cows[0].name,
      parentId: Object.keys(prevBoxes)[1]
    }
    prevBoxes[buildings.cows[1].name + 1] = {
      top: 50,
      left: 100,
      title: buildings.cows[1].name,
      parentId: buildings.cows[0].name + 1
    }
    prevBoxes[buildings.cows[2].name + 2] = {
      top: 50,
      left: 100,
      title: buildings.cows[2].name,
      parentId: buildings.cows[1].name + 1
    }
    prevBoxes[buildings.cows[3].name + 3] = {
      top: 50,
      left: 100,
      title: buildings.cows[3].name,
      parentId: buildings.cows[2].name + 2
    }
    prevBoxes[buildings.cows_before_20days[0].name] = {
      top: 80,
      left: 80,
      title: buildings.cows_before_20days[0].name,
      parentId: buildings.cows[3].name + 3
    }
    prevBoxes[buildings.cows_before_20days[1].name + 1] = {
      top: 80,
      left: 100,
      title: buildings.cows_before_20days[1].name,
      parentId: buildings.cows_before_20days[0].name
    }
    prevBoxes[buildings.cows_before_20days[2].name] = {
      top: 80,
      left: 120,
      title: buildings.cows_before_20days[2].name,
      parentId: buildings.cows_before_20days[1].name + 1
    }
    prevBoxes[buildings.calves[0].name] = {
      top: 130,
      left: 80,
      title: buildings.calves[0].name,
      parentId: buildings.cows_before_20days[1].name + 2
    }
    prevBoxes[buildings.calves[1].name + 1] = {
      top: 130,
      left: 80,
      title: buildings.calves[1].name,
      parentId: buildings.calves[0].name
    }
  }
  return prevBoxes
}

export const buildConnectionMap = (builds) => {
  const length = Object.keys(builds).length
  console.log('!!length',length)
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

export const calcTube = (builds ,connectionMap ,id) => {
  let result = builds[id].heads
  connectionMap[id].forEach(childId =>{
    result+=calcTube(childId)
  })
}
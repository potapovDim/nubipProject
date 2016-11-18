import _ from 'lodash'

export const findBuildPosition = (buildings) => {
  let sesultForCalculateChain
  if (Object.keys(buildings).length === 7) {
    let sevenBuild
    let sixtBuild
    let fifthBuild
    let fourthBuild
    let thirdBuid
    let secondBuild
    let firstBuild
    console.log('12131208949128409128958012905901205890129581902582108512005821098')
    firstBuild = buildings[_.findKey(buildings, key =>
      !key.parentId && key
    )]
    sevenBuild = _.reduce(buildings, (result, value, key) => {
      value.title === key;
      return value
    }, {});
    _.map(buildings, (value, key) => {
      if (key === sevenBuild.parentId) {
        sixtBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === sixtBuild.parentId) {
        fifthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fourthBuild.parentId) {
        thirdBuid = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === thirdBuid.parentId) {
        secondBuild = value
      }
    })
    sesultForCalculateChain = {
      sevenBuild,
      sixtBuild,
      fifthBuild,
      fourthBuild,
      thirdBuid,
      secondBuild,
      firstBuild
    }
  }
  else if (Object.keys(buildings).length === 8) {
    let eightBuild
    let seventhBuild
    let sixthBuild
    let fifthBuild
    let fourthBuild
    let thirdBuid
    let secondBuild
    let firstBuild
    console.log('here 010101101010101')
    firstBuild = buildings[_.findKey(buildings, key =>
      !key.parentId && key
    )]
    eightBuild = _.reduce(buildings, (result, value, key) => {
      value.title === key;
      return value
    }, {});
    _.map(buildings, (value, key) => {
      if (key === eightBuild.parentId) {
        seventhBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === seventhBuild.parentId) {
        sixthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === sixthBuild.parentId) {
        fifthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fourthBuild.parentId) {
        thirdBuid = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === thirdBuid.parentId) {
        secondBuild = value
      }
    })
    sesultForCalculateChain = {
      eightBuild,
      seventhBuild,
      sixthBuild,
      fifthBuild,
      fourthBuild,
      thirdBuid,
      secondBuild,
      firstBuild
    }
  }
  else if (Object.keys(buildings).length === 5) {
    let fifthBuild
    let fourthBuild
    let thirdBuid
    let secondBuild
    let firstBuild
    firstBuild = buildings[_.findKey(buildings, key =>
      !key.parentId && key
    )]
    fifthBuild = _.reduce(buildings, (result, value, key) => {
      value.title === key;
      return value
    }, {})
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fourthBuild.parentId) {
        thirdBuid = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === thirdBuid.parentId) {
        secondBuild = value
      }
    })
    sesultForCalculateChain = {
      fifthBuild,
      fourthBuild,
      thirdBuid,
      secondBuild,
      firstBuild
    }
  }
  else if (Object.keys(buildings).length === 6) {
    let sixthBuild
    let fifthBuild
    let fourthBuild
    let thirdBuid
    let secondBuild
    let firstBuild
    firstBuild = buildings[_.findKey(buildings, key =>
      !key.parentId && key
    )]
    sixthBuild = _.reduce(buildings, (result, value, key) => {
      value.title === key;
      return value
    }, {})
    _.map(buildings, (value, key) => {
      if (key === sixthBuild.parentId) {
        fifthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fourthBuild.parentId) {
        thirdBuid = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === thirdBuid.parentId) {
        secondBuild = value
      }
    })
    sesultForCalculateChain = {
      sixthBuild,
      fifthBuild,
      fourthBuild,
      thirdBuid,
      secondBuild,
      firstBuild
    }
  }
  else if (Object.keys(buildings).length === 9) {
    let ninthBuild
    let eightBuild
    let seventhBuild
    let sixthBuild
    let fifthBuild
    let fourthBuild
    let thirdBuid
    let secondBuild
    let firstBuild
    firstBuild = buildings[_.findKey(buildings, key =>
      !key.parentId && key
    )]
    ninthBuild = _.reduce(buildings, (result, value, key) => {
      value.title === key;
      return value
    }, {});
    _.map(buildings, (value, key) => {
      if (key === ninthBuild.parentId) {
        eightBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === eightBuild.parentId) {
        seventhBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === seventhBuild.parentId) {
        sixthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === sixthBuild.parentId) {
        fifthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fifthBuild.parentId) {
        fourthBuild = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === fourthBuild.parentId) {
        thirdBuid = value
      }
    })
    _.map(buildings, (value, key) => {
      if (key === thirdBuid.parentId) {
        secondBuild = value
      }
    })
    sesultForCalculateChain = {
      ninthBuild,
      eightBuild,
      seventhBuild,
      sixthBuild,
      fifthBuild,
      fourthBuild,
      thirdBuid,
      secondBuild,
      firstBuild
    }
  }
  return sesultForCalculateChain
}
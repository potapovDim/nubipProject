import React from 'react'

class WaterEquip extends Reac.Component {


  render() {
    return (
      <div>
        <CalculateWaterPerDay props={{...this.props.entries, ...this.state}}/>
        <button className="btn btn-default" onClick={()=> {
          this.setState({showEquip: !this.state.showEquip})
        }}>Розрахувати обладнання
        </button>
        {
          this.state.showEquip && <WaterEquipment/>
        }
      </div>)
  }
}

export default WaterEquip
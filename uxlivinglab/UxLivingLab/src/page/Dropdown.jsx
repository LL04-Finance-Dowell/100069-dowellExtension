import { Component } from "react";
import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";

const options = ["one", "two", "three"];

const arrowClosed = <LiaAngleRightSolid />;
const arrowOpen = <LiaAngleDownSolid />;

class CustomArrowExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }

  render() {
    const defaultOption = this.state.selected;

    return (
      <section>
        <h3>Custom Arrow Example</h3>
        <Dropdown
          arrowClosed={arrowClosed}
          arrowOpen={arrowOpen}
          options={options}
          value={defaultOption}
          placeholder="Select an option"
          controlClassName={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        />

        <section>
          <h4>Usage: </h4>
          <div className="code">
            <pre>
              {`
const arrowClosed = (
  <span className="arrow-closed" />
)
const arrowOpen = (
  <span className="arrow-open" />
)

<Dropdown
  arrowClosed={arrowClosed}
  arrowOpen={arrowOpen}
  options={options}
  value={defaultOption}
  placeholder="Select an option"
/>
              `}
            </pre>
          </div>
        </section>
      </section>
    );
  }
}

export default CustomArrowExample;

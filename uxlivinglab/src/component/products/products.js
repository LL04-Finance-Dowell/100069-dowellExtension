import "./products.css";
import { RxCross2 } from "react-icons/rx";

function Products() {
  return (
    <>
      <div className="products">
        <div className="elementor-text-editor elementor-clearfix">
          <p className="auth-button" style={{ textAlign: "center" }}>
            <b>
              <i style={{ color: "white", fontWeight: "bold" }}>Products</i>
            </b>
          </p>{" "}
        </div>
        <div className="items">
          <div className="it-1">
            {/* <div
            onMouseEnter={() => setIsvisible(true)}
            onMouseLeave={() => setIsvisible(false)}
          > */}
            <a
              href="#/"
              className="item1"
              // onMouseEnter={() => setIsvisible(true)}
              // onMouseLeave={() => setIsvisible(false)}
            >
              {/* {isvisible ? ( */}
              <div className="overlay-inner" style={{ display: "none" }}>
                {/* <div className="overlay-inner"> */}
                <p></p>
                <p>Workflow AI</p>
                <p>&nbsp;</p>
                <p>
                  <select id="mySelect">
                    <option>Portfolio 01</option>
                    <option>Portfolio 02</option>
                    <option>Portfolio 3</option>
                  </select>
                </p>
                <p>
                  <b>
                    <br />
                    <button>Connect</button>
                  </b>
                </p>
                <p></p> {/* </div> */}
              </div>
              {/* ) : null} */}
            </a>
            <a
              href="#/"
              className="item2"
              // onMouseEnter={() => setIsvisible2(true)}
              // onMouseLeave={() => setIsvisible2(false)}
            >
              {/* {isvisible2 ? ( */}
              <div className="overlay-inner" style={{ display: "none" }}>
                {/* <div className="overlay-inner"> */}
                <p></p>
                <p>Workflow AI</p>
                <p>&nbsp;</p>
                <p>
                  <select id="mySelect">
                    <option>Portfolio 01</option>
                    <option>Portfolio 02</option>
                    <option>Portfolio 3</option>
                  </select>
                </p>
                <p>
                  <b>
                    <br />
                    <button>Connect</button>
                  </b>
                </p>
                <p></p> {/* </div> */}
              </div>
              {/* ) : null} */}
            </a>
          </div>
          <div className="it-1">
            {/* <div
            onMouseEnter={() => setIsvisible(true)}
            onMouseLeave={() => setIsvisible(false)}
          > */}
            <a
              href="#/"
              className="item1"
              // onMouseEnter={() => setIsvisible(true)}
              // onMouseLeave={() => setIsvisible(false)}
            >
              {/* {isvisible ? ( */}
              <div className="overlay-inner" style={{ display: "none" }}>
                {/* <div className="overlay-inner"> */}
                <p></p>
                <p>Workflow AI</p>
                <p>&nbsp;</p>
                <p>
                  <select id="mySelect">
                    <option>Portfolio 01</option>
                    <option>Portfolio 02</option>
                    <option>Portfolio 3</option>
                  </select>
                </p>
                <p>
                  <b>
                    <br />
                    <button>Connect</button>
                  </b>
                </p>
                <p></p> {/* </div> */}
              </div>
              {/* ) : null} */}
            </a>
            <a
              href="#/"
              className="item2"
              // onMouseEnter={() => setIsvisible2(true)}
              // onMouseLeave={() => setIsvisible2(false)}
              // onClick={()}
            >
              {/* {isvisible2 ? ( */}
              <div className="overlay-inner" style={{ display: "none" }}>
                {/* <div className="overlay-inner"> */}
                <p></p>
                <p>Workflow AI</p>
                <p>&nbsp;</p>
                <p>
                  <select id="mySelect">
                    <option>Portfolio 01</option>
                    <option>Portfolio 02</option>
                    <option>Portfolio 3</option>
                  </select>
                </p>
                <p>
                  <b>
                    <br />
                    <button>Connect</button>
                  </b>
                </p>
                <p></p> {/* </div> */}
              </div>
              {/* ) : null} */}
            </a>
          </div>
          <div className="it-1">
            {/* <div
            onMouseEnter={() => setIsvisible(true)}
            onMouseLeave={() => setIsvisible(false)}
          > */}
            <a
              href="#/"
              className="item1"
              // onMouseEnter={() => setIsvisible(true)}
              // onMouseLeave={() => setIsvisible(false)}
            >
              {/* {isvisible ? ( */}
              <div className="overlay-inner" style={{ display: "none" }}>
                {/* <div className="overlay-inner"> */}
                <p></p>
                <p>Workflow AI</p>
                <p>&nbsp;</p>
                <p>
                  <select id="mySelect">
                    <option>Portfolio 01</option>
                    <option>Portfolio 02</option>
                    <option>Portfolio 3</option>
                  </select>
                </p>
                <p>
                  <b>
                    <br />
                    <button>Connect</button>
                  </b>
                </p>
                <p></p> {/* </div> */}
              </div>
              {/* ) : null} */}
            </a>
            <a
              href="#/"
              className="item2"
              // onMouseEnter={() => setIsvisible2(true)}
              // onMouseLeave={() => setIsvisible2(false)}
              // onClick={()}
            >
              {/* {isvisible2 ? ( */}
              <div className="overlay-inner" style={{ display: "none" }}>
                {/* <div className="overlay-inner"> */}
                <p></p>
                <p>Workflow AI</p>
                <p>&nbsp;</p>
                <p>
                  <select id="mySelect">
                    <option>Portfolio 01</option>
                    <option>Portfolio 02</option>
                    <option>Portfolio 3</option>
                  </select>
                </p>
                <p>
                  <b>
                    <br />
                    <button>Connect</button>
                  </b>
                </p>
                <p></p> {/* </div> */}
              </div>
              {/* ) : null} */}
            </a>
          </div>
        </div>
      </div>
      <div onClick={() => window.close()}>
        <RxCross2
          size={24}
          color="white"
          className="close"
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            marginTop: 150,
            marginLeft: 7,
          }}
        />
      </div>
    </>
  );
}
export default Products;
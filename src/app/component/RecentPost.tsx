import React from "react";
 function Recent() {
    return (
      <div>
        <div 
          style={{
            backgroundColor: "#F4E2E2",
            marginTop: "120px",
            display: "flex",
            justifyContent: "space-around",
            height: "85px",
            alignItems: "center",
          }}
        >
          <p className="hover:underline cursor-pointer"
            style={{
              fontSize: "21px",
              marginRight: "200px",
              fontWeight: "bold",
            }}
          >
            Recent Post
          </p>
         
            <p className="hover:underline cursor-pointer"
              style={{
                fontSize: "21px",
                color: "#F98585",
                marginLeft: "200px",
                fontWeight: "bold",
              }}
            >
              View all
            </p>
          
        </div>
        <div 
          style={{
            height: "417px",
            backgroundColor: "#F4E2E2",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div 
            style={{
              height: "356px",
              width: "483px",
              background: "white",
              marginLeft: "100px",
            }}
          >
            <h1
              style={{        
                fontWeight: "700",
                fontSize: "27px",
                margin: "30px",
              }}
            >
              Making a design system from
              <br />
              scratch
            </h1>
            <div
              style={{
                fontSize: "18px",
                color: "#000000B2",
                display: "flex",
                margin: "30px",
              }}
            >
              <p
                style={{
                  marginRight: "30px",
                }}
              >
                12 Feb 2020
              </p>
              |
              <p
                style={{
                  marginLeft: "30px",
                }}
              >
                Design , Pattern
              </p>
            </div>
            <p
              style={{
                fontSize: "16px",
                margin: "30px",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua
              <br />
              dolor do amet sint. Velit officia consequat duis enim
              <br />
              velit mollit. Exercitation veniam consequat sunt
              <br />
              nostrud amet.
            </p>
          </div>
          <div
            style={{
              height: "356px",
              width: "483px",
              background: "white",
              marginRight: "100px",
            }}
          >
            <h1
              style={{
                fontWeight: "700",
                fontSize: "27px",
                margin: "30px",
              }}
            >
              Making a design system from
              <br />
              scratch
            </h1>
            <div
              style={{
                fontSize: "18px",
                color: "#000000B2",
                display: "flex",
                margin: "30px",
              }}
            >
              <p
                style={{
                  marginRight: "30px",
                }}
              >
                12 Feb 2020
              </p>
              |
              <p
                style={{
                  marginLeft: "30px",
                }}
              >
                Design , Pattern
              </p>
            </div>
            <p
              style={{
                fontSize: "16px",
                margin: "30px",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua
              <br />
              dolor do amet sint. Velit officia consequat duis enim
              <br />
              velit mollit. Exercitation veniam consequat sunt
              <br />
              nostrud amet.
            </p>
          </div>
        </div>
      </div>
    );
  }
  export default Recent;


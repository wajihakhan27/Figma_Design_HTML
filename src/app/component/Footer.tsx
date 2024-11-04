function Footer() {
  return (
    <div style={{
      width: "1460px",
      height: "243px",
      marginTop: "200px",
      marginLeft: "auto",  // Centers horizontally
      marginRight: "auto", // Centers horizontally
      gap: "0px",
      opacity: "1",        // Use 1 instead of "0px" to make it visible
    }}>

      <div
        style={{
          width: "279px",
          height: "30px",
          top: "2288px",
          left: "578px",
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "auto",  // Centers horizontally
          marginRight: "auto", // Centers horizontally
          gap: "0px",
          opacity: "1",
        }}
      >


        <img src={"fb.png"} width={30} height={30} alt="facebook" />

        <img src={"insta.png"} width={30} height={30} alt="instagram" />

        <img src={"twite.png"} width={30} height={30} alt="twitter" />

        <img src={"Linkedin.png"} width={30} height={30} alt="linkdin" />

      </div>




      <div
        style={{
          width: "354px",
          height: "32px",
          top: "2354.67px",
          marginLeft: "auto",  // Centers horizontally
          marginRight: "auto", // Centers horizontally
          gap: "0px",
          opacity: "1",        // Use 1 instead of "0px" to make it visible
        }}
      >
        <p
          style={{
            fontFamily: "Heebo",
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "32.31px",
            textAlign: "center", // Centers text within the div
            marginTop: "60px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <b>Copyright ©2020 All rights reserved</b>
        </p>
      </div>

    </div>
  );
}


export default Footer
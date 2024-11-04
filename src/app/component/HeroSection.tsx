import Link from "next/link";

export default function Hero() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "120px",
            }}
        >
            <div>
                <h1
                    style={{
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "#21243D",
                    }}
                >
                    <b>
                        Hi, I am John,
                        <br />
                        Creative Technologist
                    </b>
                </h1>
                <p
                    style={{
                        fontSize: "17px",
                        marginTop: "35px",
                    }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    <br />
                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                    veniam
                    <br />
                    consequat sunt nostrud amet.
                </p>
                <Link href={"/"}>
                    <h3
                        style={{
                            backgroundColor: "#F98585",
                            color: "white",
                            height: "50px",
                            width: "205px",
                            fontSize: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "35px",
                            boxShadow: "0px 4px 5px 1px #808080",
                        }}
                    >
                        Download Resume
                    </h3>
                </Link>
            </div>

            <img src={"/hero-image.png"}
                style={{
                    marginRight: "70px",
                    width: "298px",
                    height: "308px",
                    top: "246px",
                    left: "963px",

                }} alt="Hero Image" />

        </div>
    );
}


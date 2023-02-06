import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Resume.css";

export default function Resume(props) {
  let params = useParams();
  console.log(params);
  let first;

  const data = localStorage.getItem("data");
  const s = JSON.parse(data);
  console.log(s);
  useEffect(() => {
    first = 0;
  }, []);
  console.log(data);
  // if (s.SecondCompanyName === "") {
  //   document.getElementById("SecondExp").style.display = "none";
  // }

  // if (s.TwelthBoardName !== "") {
  //   document.getElementById("ShowTwelth").style.display = "none";
  // }

  const Submit = () => {
    console.log("Submitted");
    let DownloadResume = (document.getElementById(
      "DownloadButton"
    ).style.display = "none");
    window.print({ DownloadResume });
  };
  console.log("objecttarun" + first);
  if (params.first !== undefined) {
    first = params.first;
  }
  if (first == "10") {
    return (
      <>
        <link
          href="https://fontgoogleapicom/css?family=Lato:400,300,700"
          rel="stylesheet"
          type="text/css"
        />
        <div className="container">
          <div className="header">
            <div className="full-name leading-normal">
              <span className="first-name">{s.FirstName}</span> &nbsp;
              <span className="last-name">{s.FatherName} </span> &nbsp;
              <span className="last-name">{s.LastName}</span>
            </div>
            <div className="contact-info">
              <span className="email">Email: </span>
              <span className="email-val">{s.email}</span>
              <span className="separator"></span>
              <span className="phone">Phone: </span>
              <span className="phone-val">{s.Contact}</span>
              <span className="separator"></span>
              <span className="phone">Mobile: </span>
              <span className="phone-val">{s.AlternateNumber}</span>
            </div>

            {/* Address */}

            <div className="about">
              <span className="position">Address </span>
              <span className="desc">{s.Address}</span>
            </div>
          </div>

          {/* Experiance */}
          <div className="details">
            {s.Fresher === "No" ? (
              <div className="section" id="Exp">
                <div className="section__title">Experience</div>
                <div className="section__list">
                  {/* First Experiance */}
                  <div className="section__list-item">
                    <div className="left">
                      <div className="name">{s.PrevCompany}</div>
                      <div className="addr">{s.Designation}</div>
                      <div className="duration">
                        {s.StartMonthandYear}
                        {s.StartMonthandYear !== "" ? " - " : " "}
                        {s.EndMonthandYear}
                      </div>
                    </div>
                    <div className="right">
                      <div className="name">{s.JobProfile}</div>
                      <div className="desc">{s.JobLocation}</div>
                    </div>
                  </div>
                  {/* Second Experience */}
                  {s.SecondPrevCompany !== "" ? (
                    <div className="section__list-item " id="SecondExp">
                      <div className="left">
                        <div className="name">{s.SecondPrevCompany}</div>
                        <div className="addr">{s.SecondDesignation}</div>
                        <div className="duration">
                          {s.Second_StartMonthandYear}
                          {s.Second_StartMonthandYear !== "" ? " - " : " "}
                          {s.Second_EndMonthandYear}
                        </div>
                      </div>
                      <div className="right">
                        <div className="name">{s.SecondJobProfile}</div>
                        <div className="desc">{s.SecondJobLocation}</div>
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  {/* End of Second Experience */}
                  {/* Start of Third Experiance */}
                  {/* Start : */}
                  {s.ThirdPrevCompany !== "" ? (
                    <div className="section__list-item">
                      <div className="left">
                        <div className="name">{s.ThirdPrevCompany}</div>
                        <div className="addr">{s.ThirdDesignation}</div>
                        <div className="duration">
                          {s.Third_StartMonthandYear}
                          {s.Third_StartMonthandYear !== "" ? " - " : " "}
                          {s.Third_EndMonthandYear}
                        </div>
                      </div>
                      <div className="right">
                        <div className="name">{s.ThirdJobProfile}</div>
                        <div className="desc">{s.ThirdJobLocation}</div>
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  {/* End of third experiance */}
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="section">
              <div className="section__title">Education</div>
              <div className="section__list">
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">{s.collegeName}</div>
                    <div className="duration">{s.PassingYear}</div>
                  </div>
                  <div className="right">
                    <div className="name">{s.UniversityName}</div>
                    <div className="desc">{s.CGPA}</div>
                  </div>
                </div>
                {/* For Diploma */}
                {/* ()? " ": " " */}
                {s.clgName !== "" ? (
                  <div className="section">
                    <div className="section__list">
                      <div className="section__list-item">
                        <div className="left">
                          <div className="name">{s.clgName}</div>
                          <div className="duration">
                            {s.PassingYearrDiploma}
                          </div>
                        </div>
                        <div className="right">
                          <div className="name">
                            {s.UniversityNameForDiploma}
                          </div>
                          <div className="desc">{s.diplomaCGPA}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  " "
                )}
                {/* For Twelth */}
                {s.TwelthBoardName !== "" ? (
                  <div className="section__list-item">
                    <div className="left">
                      {/* <div className="Tenth">12th :</div> */}
                      {/* {rs.Third_StartMonthandYea !== "" ? " - " : " "} */}

                      <div className="name">{s.TwelthBoardName}</div>
                      <div className="addr">{s.TwelthPassingYearr}</div>
                    </div>
                    <div className="right">
                      <div className="name">{s.TwelthSchool}</div>
                      <div className="desc">
                        <div className="duration">{s.TwelthPercentage}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  " "
                )}
                {/* For Tenth */}
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">{s.BoardName}</div>
                    <div className="addr">{s.PassingYearr}</div>
                  </div>
                  <div className="right">
                    <div className="name">{s.School}</div>
                    <div className="desc">
                      <div className="duration">{s.Percentage}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section__title">Personal Detail </div>
              <div className="skills">
                <div className="skills__item">
                  <div className="left">
                    <div className="name">
                      Date of Birth : &nbsp; &nbsp;
                      <span className="name">{s.DOB}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    Nationality : &nbsp; &nbsp;
                    <span className="name">{s.Nationality}</span>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    Gender : &nbsp; &nbsp;
                    <span className="name">{s.Gender}</span>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    Language : &nbsp; &nbsp;
                    <span className="name">{s.Language}</span>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    Maritial Status : &nbsp; &nbsp;
                    <span className="name">{s.MaritalStatus}</span>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    Skills : &nbsp; &nbsp;
                    <span className="name">{s.Skills}</span>
                  </div>
                </div>
              </div>
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    Hobbies : &nbsp; &nbsp;
                    <span className="name">{s.Hobbies}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}

        <div className="btn text-center my-6">
          <button
            className="Submit font-serif text-sm bg-[#337ab7] text-white px-10 py-2 text-center font-normal"
            id="DownloadButton"
            onClick={Submit}
          >
            Download
          </button>
        </div>
      </>
    );
  }
}

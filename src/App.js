import React, { useState, useEffect } from "react";
import "./App.css";
import Resume from "./components/Resume";
import { Add } from "@material-ui/icons";
import { Remove } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// font-family: 'Poppins', sans-serif;

function App(props) {
  const nav = useNavigate()
  function handleClick(e) {
    e.preventDefault();
    nav('/resume/10');
  }

  const [data, setData] = useState({
    FirstName: "john Doe",
    FatherName: "Shankar Doe",
    LastName: "Doe",
    Contact: "123456789",
    AlternateNumber: "98765421",
    email: "Example@gmail.com",
    Address: "F-1 B/block Random-Street",
    DOB: "17-08-2003",
    Nationality: "Indian",
    Gender: "Male",
    Language: "Hindi, English",
    MaritalStatus: "Single",
    Skills: "HTML, CSS, JavaScript",
    Hobbies: "Dancing",
    Fresher: "Yes",
    collegeName: "Some College of Arts & Commerce",
    UniversityName: "University",
    PassingYear: "2001",
    CGPA: "9.44",
    Edu: "Education",
    BoardName: "Gujarat Board (GHSEB)",
    School: "School Name",
    PassingYearr: "2013",
    Percentage: "95%",
    Strengths: "Strengths",
    ComputerSkill: "HTML, CSS, Java",
    PrevCompany: "Company Name",
    Designation: "San Fr, CA",
    JobProfile: "Your Profile",
    EndMonthandYear: "28-9-2013",
    StartMonthandYear: "28-9-2013",
    JobLocation: "USA",
    SecondPrevCompany: "",
    SecondDesignation: "",
    SecondJobProfile: "",
    Second_StartMonthandYear: "",
    Second_EndMonthandYear: "",
    SecondJobLocation: "",
    ThirdPrevCompany: "",
    ThirdDesignation: "",
    ThirdJobProfile: "",
    Third_StartMonthandYear: "",
    Third_EndMonthandYear: "",
    ThirdJobLocation: "",
    clgName: "",
    UniversityNameForDiploma: "",
    PassingYearrDiploma: "",
    diplomaCGPA: "",
    TwelthBoardName: "",
    TwelthSchool: "",
    TwelthPassingYearr: "",
    TwelthPercentage: "",
  });

  // Storing Data to Local Storage

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // Getting data from local Storage

  useEffect(() => {
    const Getdata = JSON.parse(localStorage.getItem('data'));
    if (Getdata) {
      setData(Getdata);
    }
  }, []);

  let name, value;
  const EventHandler = (event) => {
    // console.log(event);
    name = event.target.name;
    value = event.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // What to Display when user is Fresher or not

  if (data.Fresher === "No") {
    document.getElementById("SelectedNo").style.display = "initial";
  } else if (data.Fresher === "yes") {
    document.getElementById("SelectedNo").style.display = "none";
  }

  //When user clicks on Add Another Job Detail

  let Clicked_On_AddAnother_JobDetail = () => {
    document.getElementById("SecondExp").style.display = "initial";
    document.getElementById("Add_Another_Job").style.display = "none";
    document.getElementById("ClickedRemove").style.display = "initial";
  };

  //When user clicks on Add Another Job Detail Second time
  let Clicked_On_AddAnother_JobDetail_SecondTime = () => {
    document.getElementById("ThirdExp").style.display = "initial";
    document.getElementById("Add_sAnother_Job").style.display = "none";
    document.getElementById("ClickedRemoveSecondTime").style.display =
      "initial";
  };
  // When User Clicks on remove

  let ClickOnRemove = () => {
    document.getElementById("ClickedRemove").style.display = "none";
    document.getElementById("Add_Another_Job").style.display = "initial";
    document.getElementById("SecondExp").style.display = "none";
  };

  // When user Clicks on remove Second Time
  let ClickOnRemoveSecondTime = () => {
    document.getElementById("ThirdExp").style.display = "none";
    document.getElementById("Add_sAnother_Job").style.display = "initial";
    document.getElementById("ClickedRemoveSecondTime").style.display = "none";
  };

  // WHat to Display when User Choose his/her Education

  if (data.Edu === "Diploma") {
    document.getElementById("AfterDiploma").style.display = "initial";
    document.getElementById("Twelth").style.display = "none";
  } else if (data.Edu === "Twelth") {
    document.getElementById("AfterDiploma").style.display = "none";
    document.getElementById("Twelth").style.display = "initial";
  } else if (data.Edu === "Tenth") {
    document.getElementById("AfterDiploma").style.display = "none";
    document.getElementById("Twelth").style.display = "none";
  }
  return (
    <>
      <div className="Main-Container">
        <div
          className="Heading my-4 font-semibold leading-6 font-serif text-xl text-[#777777]  text-center md:leading-8
         md:text-2xl lg:text-2xl"
        >
          Make Your CV now
        </div>

        {/* Start of First Section */}

        <div className="First-Section-Input mx-4 md:mx-8">
          <div className="top-Three flex flex-col items-center md:flex-row md:justify-between md:py-4 lg:justify-around ">
            <div className="First-Name">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777] text-center">
                Enter your First Name{" "}
              </h3>
              <input
                onChange={EventHandler}
                type="text"
                value={data.FirstName}
                name="FirstName"
                placeholder="Enter Your Name"
                className="InputFields rounded-md"
              />
            </div>

            <div className="Father-Name">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
                Enter your Father's Name{" "}
              </h3>
              <input
                onChange={EventHandler}
                type="text"
                value={data.FatherName}
                name="FatherName"
                placeholder="Enter Your Name"
                className="InputFields rounded-md"
              />
            </div>

            <div className="Last-Name">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
                Enter your Last Name{" "}
              </h3>
              <input
                onChange={EventHandler}
                type="text"
                value={data.LastName}
                name="LastName"
                placeholder="Enter Your Name"
                className="InputFields rounded-md"
              />
            </div>
          </div>
          <div className="Second-Three flex flex-col items-center  md:flex-row md:justify-between md:pb-4 lg:flex-row lg:justify-around">
            <div className="contact ">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
                Contact Number{" "}
              </h3>
              <input
                onChange={EventHandler}
                type="number"
                value={data.Contact}
                name="Contact"
                placeholder="Enter Your Number"
                className="InputFields rounded-md"
              />
            </div>

            <div className="Alternate-Number">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
                {" "}
                Alternate Number{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.AlternateNumber}
                type="number"
                name="AlternateNumber"
                placeholder="Enter Your Name"
                className="InputFields rounded-md"
              />
            </div>

            <div className="E-mail">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
                Enter your E-mail
              </h3>
              <input
                onChange={EventHandler}
                value={data.email}
                type="email"
                name="email"
                placeholder="Your@Name.com"
                className="InputFields rounded-md"
              />
            </div>
          </div>

          <div className=" mx-4 flex flex-col items-center">
            <div className="adress">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777] text-center md:py-4 ">
                Enter your Address{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.Address}
                name="Address"
                type="text"
                placeholder="Enter Your Address"
                className="rounded-md Medium-InputFields "
              />
            </div>
          </div>
        </div>

        {/* End of First Section */}

        {/* Start of Second Section / Personal Detail */}

        <div className="Heading my-4 font-semibold leading-6 font-serif text-xl text-[#777777]  text-center lg:text-2xl">
          Personal Detail
        </div>

        <div className="Personal-Detail mx-4 flex flex-col items-center md:flex-row md:justify-between md:mx-8 md:py-4 lg:flex-row lg:justify-around">
          <div className="DOB">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777] text-center">
              Enter your Date of Birth{" "}
            </h3>
            <input
              onChange={EventHandler}
              value={data.DOB}
              type="date"
              name="DOB"
              placeholder="Enter Your Name"
              className="InputFields rounded-md"
            />
          </div>

          <div className="Nationality">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
              Nationality{" "}
            </h3>
            <input
              onChange={EventHandler}
              value={data.Nationality}
              type="text"
              name="Nationality"
              placeholder="Nationality"
              className="InputFields rounded-md"
            />
          </div>

          <div className=" Gender">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
              Gender{" "}
            </h3>
            <select
              name="Gender"
              id="Gender"
              className="InputFields rounded-md"
              value={data.Gender}
              onChange={EventHandler}
            >
              <option value="">Your Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div
          className="Second-section-of-personalDetail mx-4 flex flex-col items-center md:flex-row md:justify-between md:mx-8 md:pb-4 lg:flex-row lg:justify-around
        "
        >
          <div className="Language-Known ">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center ">
              Language Known{" "}
            </h3>
            <input
              onChange={EventHandler}
              value={data.Language}
              type="text"
              name="Language"
              placeholder="English/Hindi"
              className="InputFields rounded-md"
            />
          </div>

          <div className="Maritual-Status">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
              Marital Status{" "}
            </h3>
            <select
              name="MaritalStatus"
              id="GeMarital Statusnder"
              className="InputFields rounded-md"
              value={data.MaritalStatus}
              onChange={EventHandler}
            >
              <option value="" selected>
                MaritalStatus
              </option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
              <option value="Divorced">Divorced</option>
              <option value="Single">Single</option>
            </select>
          </div>

          <div className="Skills ">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
              Skills{" "}
            </h3>
            <input
              onChange={EventHandler}
              value={data.Skills}
              type="text"
              name="Skills"
              placeholder="Skills"
              className="InputFields rounded-md"
            />
          </div>
        </div>

        <div className="Hobbies mx-4 flex flex-col items-center">
          <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
            Hobbies
          </h3>
          <input
            onChange={EventHandler}
            value={data.Hobbies}
            type="text"
            name="Hobbies"
            placeholder="Hobbies"
            className="rounded-md Medium-InputFields"
          />
        </div>

        <div className="Are-you-Fresher mx-4 flex flex-col items-center">
          <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
            Are you a Fresher
          </h3>
          <select
            name="Fresher"
            id="Fresher"
            className="rounded-md Medium-InputFields"
            value={data.Fresher}
            onChange={EventHandler}
          >
            <option value selected>
              Are you a Fresher?
            </option>
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Show Only when user Selects No */}

        {/* First Experiance */}
        <div
          className=" mx-4 flex flex-col items-center md:flex-row md:justify-between md:mx-8 lg:flex-row"
          id="SelectedNo"
          style={{ display: "none" }}
        >
          <div className="selectedNo bg-slate-500 mx-4 md:mx-8">
            <div className="mx-4 flex flex-col items-center md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-around">
              <div>
                <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                  Previous Company Name
                </h3>
                <input
                  onChange={EventHandler}
                  value={data.PrevCompany}
                  type="text"
                  name="PrevCompany"
                  placeholder="Previous Company"
                  className="InputFields rounded-md"
                />
              </div>
              <div>
                <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                  City/Town{" "}
                </h3>
                <input
                  onChange={EventHandler}
                  value={data.Designation}
                  type="text"
                  name="Designation"
                  placeholder="e.g : San Fr, CA"
                  className="InputFields rounded-md"
                />
              </div>

              <div className="PrevJobLoc mx-4 flex flex-col items-center md:mx-0">
                <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                  Job Location{" "}
                </h3>
                <input
                  onChange={EventHandler}
                  value={data.JobLocation}
                  type="text"
                  name="JobLocation"
                  placeholder="State"
                  className="InputFields rounded-md"
                />
              </div>
            </div>

            <div className="mx-4 flex flex-col items-center md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-around">
              <div>
                <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                  Job Profile
                </h3>
                <input
                  onChange={EventHandler}
                  value={data.JobProfile}
                  type="text"
                  name="JobProfile"
                  placeholder="Enter Previous Company Profile"
                  className="InputFields rounded-md"
                />
              </div>
              <div>
                <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                  Start Month and year
                </h3>
                <input
                  onChange={EventHandler}
                  value={data.StartMonthandYear}
                  type="date"
                  name="StartMonthandYear"
                  placeholder="Skills"
                  className="InputFields rounded-md"
                />
              </div>
              <div>
                <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                  End Month and year{" "}
                </h3>
                <input
                  onChange={EventHandler}
                  value={data.EndMonthandYear}
                  type="date"
                  name="EndMonthandYear"
                  placeholder="Skills"
                  className="InputFields rounded-md"
                />
              </div>
            </div>
            <div className="AddExperiacne text-end md:py-4 md:px-2">
              <h3
                className="py-2 Experiance cursor-pointer font-bold"
                id="Add_Another_Job"
                onClick={Clicked_On_AddAnother_JobDetail}
              >
                <span>
                  {" "}
                  <Add />{" "}
                </span>
                Add another Job Details
              </h3>
            </div>
            <div className="AddExperiacne text-end md:py-4 md:px-2">
              <h3
                className="py-2 Experiance cursor-pointer font-bold"
                id="ClickedRemove"
                style={{ display: "none" }}
                onClick={ClickOnRemove}
              >
                <span>
                  {" "}
                  <Remove />{" "}
                </span>
                Remove
              </h3>
            </div>

            {/* Second Experiance */}

            <div id="SecondExp" style={{ display: "none" }}>
              <div className="selectedNo">
                <div className="mx-4 flex flex-col items-center  md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-around">
                  <div>
                    <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                      Previous Company Name
                    </h3>
                    <input
                      onChange={EventHandler}
                      value={data.SecondPrevCompany}
                      type="text"
                      name="SecondPrevCompany"
                      placeholder="Previous Company"
                      className="InputFields rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                      City/Town{" "}
                    </h3>
                    <input
                      onChange={EventHandler}
                      value={data.SecondDesignation}
                      type="text"
                      name="SecondDesignation"
                      placeholder="e.g : San Fr, CA"
                      className="InputFields rounded-md"
                    />
                  </div>
                  <div className="PrevJobLoc mx-4 flex flex-col items-center  md:mx-0">
                    <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                      Job Location{" "}
                    </h3>
                    <input
                      onChange={EventHandler}
                      value={data.SecondJobLocation}
                      type="text"
                      name="SecondJobLocation"
                      placeholder="Your Job Location"
                      className="InputFields rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="jobs flex flex-col justify-between md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-around">
                <div className="mx-4 flex flex-col items-center md:mx-0 ">
                  <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                    Job Profile{" "}
                  </h3>
                  <input
                    onChange={EventHandler}
                    value={data.SecondJobProfile}
                    type="text"
                    name="SecondJobProfile"
                    placeholder="Enter Previous Company Profile"
                    className="InputFields rounded-md"
                  />
                </div>
                <div className="mx-4 flex flex-col items-center md:mx-0 ">
                  <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                    Start Month and year{" "}
                  </h3>
                  <input
                    onChange={EventHandler}
                    value={data.Second_StartMonthandYear}
                    type="date"
                    name="Second_StartMonthandYear"
                    placeholder="Skills"
                    className="InputFields rounded-md"
                  />
                </div>
                <div className="mx-4 flex flex-col items-center md:mx-0 ">
                  <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                    End Month and year{" "}
                  </h3>
                  <input
                    onChange={EventHandler}
                    value={data.Second_EndMonthandYear}
                    type="date"
                    name="Second_EndMonthandYear"
                    placeholder="Skills"
                    className="InputFields rounded-md"
                  />
                </div>
              </div>

              <div className="AddExperiacne text-end md:mx-0 md:py-4 md:px-2 ">
                <h3
                  className="py-2 Experiance cursor-pointer font-bold"
                  id="Add_sAnother_Job"
                  onClick={Clicked_On_AddAnother_JobDetail_SecondTime}
                >
                  <span>
                    {" "}
                    <Add />{" "}
                  </span>
                  Add another Job Details
                </h3>
              </div>
              <div className="AddExperiacne text-end  md:py-4 md:px-2">
                <h3
                  className="py-2 Experiance cursor-pointer font-bold"
                  id="ClickedRemoveSecondTime"
                  style={{ display: "none" }}
                  onClick={ClickOnRemoveSecondTime}
                >
                  <span>
                    {" "}
                    <Remove />{" "}
                  </span>
                  Remove
                </h3>
              </div>
            </div>

            {/* Third Experiance */}

            <div id="ThirdExp" style={{ display: "none" }}>
              <div className="selectedNo">
                <div className="mx-4 flex flex-col items-center  md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-around ">
                  <div className="">
                    <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                      Previous Company Name
                    </h3>
                    <input
                      onChange={EventHandler}
                      value={data.ThirdPrevCompany}
                      type="text"
                      name="ThirdPrevCompany"
                      placeholder="Previous Company"
                      className="InputFields rounded-md"
                    />
                  </div>
                  <div className="">
                    <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center  ">
                      City/Town{" "}
                    </h3>
                    <input
                      onChange={EventHandler}
                      value={data.ThirdDesignation}
                      type="text"
                      name="ThirdDesignation"
                      placeholder="e.g : San Fr, CA"
                      className="InputFields rounded-md"
                    />
                  </div>
                  <div className="PrevJobLoc mx-4 flex flex-col items-center md:mx-0">
                    <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center ">
                      Job Location{" "}
                    </h3>
                    <input
                      onChange={EventHandler}
                      value={data.ThirdJobLocation}
                      type="text"
                      name="ThirdJobLocation"
                      placeholder="Your Job Location"
                      className="InputFields rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="jobs flex flex-col justify-between  md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-around">
                <div className="mx-4 flex flex-col items-center md:mx-0">
                  <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                    Job Profile{" "}
                  </h3>
                  <input
                    onChange={EventHandler}
                    value={data.ThirdJobProfile}
                    type="text"
                    name="ThirdJobProfile"
                    placeholder="Enter Previous Company Profile"
                    className="InputFields rounded-md"
                  />
                </div>
                <div className="mx-4 flex flex-col items-center  md:mx-0">
                  <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                    Start Month and year{" "}
                  </h3>
                  <input
                    onChange={EventHandler}
                    value={data.Third_StartMonthandYear}
                    type="date"
                    name="Third_StartMonthandYear"
                    placeholder="Skills"
                    className="InputFields rounded-md"
                  />
                </div>
                <div className="mx-4 flex flex-col items-center  md:mx-0">
                  <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#000000]  text-center">
                    End Month and year{" "}
                  </h3>
                  <input
                    onChange={EventHandler}
                    value={data.Third_EndMonthandYear}
                    type="date"
                    name="Third_EndMonthandYear"
                    placeholder="Skills"
                    className="InputFields rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End of third experiance */}
        </div>

        {/* End of Fresher-No section */}

        {/* Start of third Section / Education Detail */}

        <div className="ThirdEduDetail">
          <div className="heading py-4 font-semibold leading-6 font-serif text-xl text-[#777777]  text-center lg:text-2xl  lg:pt-8">
            Education Detail
          </div>
          <div className=" EducationDetails mx-4 flex flex-col items-center  md:flex md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-evenly lg:py-8">
            <div className="mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                College Name(For Degree){" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.collegeName}
                type="text"
                name="collegeName"
                placeholder="College Name"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                University Name(For Degree){" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.UniversityName}
                type="text"
                name="UniversityName"
                placeholder="University Name"
                className="Edu-InputFields rounded-md"
              />
            </div>

            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                Passing Year{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.PassingYear}
                type="text"
                name="PassingYear"
                placeholder="Passing Year"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                CGPA{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.CGPA}
                type="text"
                name="CGPA"
                placeholder="CGPA"
                className="Edu-InputFields rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="Second-section-of-personalDetail mx-4 flex flex-col items-center">
          <div className="Educationnn mb-8">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center">
              After tenth?{" "}
            </h3>
            <select
              name="Edu"
              id="Edu"
              className="Medium-InputFieldss rounded-md"
              value={data.Edu}
              onChange={EventHandler}
            >
              <option value="Tenth" selected>
                After 10th?
              </option>
              <option value="Diploma">Diploma</option>
              <option value="Twelth">Twelth</option>
            </select>
          </div>
        </div>

        {/* After diploma */}

        <div
          className="mainDiploma "
          id="AfterDiploma"
          style={{ display: "none" }}
        >
          <div className=" AfterDiplomaa mx-4 flex flex-col items-center md:flex md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-evenly lg:my-8">
            <div className=" mx-4 flex flex-col items-center  md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                College Name(For Diploma){" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.clgName}
                type="text"
                name="clgName"
                placeholder=" Board Name"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0 ">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                University Name(For Diploma)
              </h3>
              <input
                onChange={EventHandler}
                value={data.UniversityNameForDiploma}
                type="text"
                name="UniversityNameForDiploma"
                placeholder="University Name"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center  md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                Passing Year{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.PassingYearrDiploma}
                type="text"
                name="PassingYearrDiploma"
                placeholder="Passing Year"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center   md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                CGPA{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.diplomaCGPA}
                type="text"
                name="diplomaCGPA"
                placeholder="CGPA"
                className="Edu-InputFields rounded-md"
              />
            </div>
          </div>
        </div>

        {/*After Twelth  */}

        <div className="AfterTwelth" id="Twelth" style={{ display: "none" }}>
          <div className="firstName AfterTwelthR  mx-4 flex flex-col items-center md:flex md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-evenly lg:my-8">
            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                12th Education Board Name{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.TwelthBoardName}
                type="text"
                name="TwelthBoardName"
                placeholder=" Board Name"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                School Name
              </h3>
              <input
                onChange={EventHandler}
                value={data.TwelthSchool}
                type="text"
                name="TwelthSchool"
                placeholder="School Name"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                Passing Year{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.TwelthPassingYearr}
                type="text"
                name="TwelthPassingYearr"
                placeholder="Passing Year"
                className="Edu-InputFields rounded-md"
              />
            </div>
            <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0">
              <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
                Percentage{" "}
              </h3>
              <input
                onChange={EventHandler}
                value={data.TwelthPercentage}
                type="text"
                name="TwelthPercentage"
                placeholder="
                Percentage"
                className="Edu-InputFields rounded-md"
              />
            </div>
          </div>
        </div>

        {/* After 10th */}

        <div
          className="mx-4 flex flex-col items-center md:flex md:flex-row md:justify-between md:mx-8 lg:flex-row lg:justify-evenly lg:my-8"
          id="AfterTenth"
        >
          <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0 ">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
              10th Education Board Name{" "}
            </h3>
            <input
              onChange={EventHandler}
              value={data.BoardName}
              type="text"
              name="BoardName"
              placeholder=" Board Name"
              className="Edu-InputFields rounded-md"
            />
          </div>
          <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0 ">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
              School Name
            </h3>
            <input
              onChange={EventHandler}
              value={data.School}
              type="text"
              name="School"
              placeholder="School Name"
              className="Edu-InputFields rounded-md"
            />
          </div>
          <div className=" mx-4 flex flex-col items-center md:mx-2 lg:mx-0 ">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
              Passing Year{" "}
            </h3>
            <input
              onChange={EventHandler}
              value={data.PassingYearr}
              type="text"
              name="PassingYearr"
              placeholder="Passing Year"
              className="Edu-InputFields rounded-md"
            />
          </div>
          <div className=" mx-4 flex items-center flex-col md:mx-2 lg:mx-0 ">
            <h3 className="py-4 font-semibold leading-6 font-serif text-sm text-[#777777]  text-center md:text-[10px] lg:text-sm">
              Percentage{" "}
            </h3>
            <input
              onChange={EventHandler}
              value={data.Percentage}
              type="text"
              name="Percentage"
              placeholder="
                Percentage"
              className="Edu-InputFields rounded-md"
            />
          </div>
        </div>
      </div>
      {/* End of third Section / Education Detail */}

      <div className="btn text-center my-8 no-underline">
        <Link
          onClick={handleClick}
          to={"/resume/10"}
          className="Submit font-serif text-sm bg-[#337ab7] text-white px-10 py-2 text-center font-normal rounded-md"
        >
          Get Resume
        </Link>
      </div>

      <div className="Resume" style={{ display: "none" }}>
        <Resume
          fName={data.FirstName}
          fatherName={data.FatherName}
          lName={data.LastName}
          email={data.email}
          phoneNumber={data.Contact}
          AlternateNumber={data.AlternateNumber}
          Address={data.Address}
          CompanyName={data.PrevCompany}
          JobAddress={data.Designation}
          StartMonth={data.StartMonthandYear}
          EndMonth={data.EndMonthandYear}
          Title={data.JobProfile}
          location={data.JobLocation}
          SecondCompanyName={data.SecondPrevCompany}
          SecondJobAddress={data.SecondDesignation}
          SecondStartDate={data.Second_StartMonthandYear}
          SecondEndDate={data.Second_EndMonthandYear}
          SecondTitle={data.SecondJobProfile}
          SecondLocation={data.SecondJobLocation}
          ThirdPrevCompany={data.ThirdPrevCompany}
          ThirdDesignation={data.ThirdDesignation}
          Third_StartMonthandYear={data.Third_StartMonthandYear}
          Third_EndMonthandYear={data.Third_EndMonthandYear}
          ThirdJobProfile={data.ThirdJobProfile}
          ThirdJobLocation={data.ThirdJobLocation}
          collegeName={data.collegeName}
          clgDate={data.PassingYear}
          clgCGPA={data.CGPA}
          UniversityName={data.UniversityName}
          After10Board={data.BoardName}
          SchoolName={data.School}
          SchoolPassingYear={data.PassingYearr}
          tenthPercentage={data.Percentage}
          DiplomacollegeName={data.clgName}
          DiplomaUniversityName={data.UniversityNameForDiploma}
          DiplomaclgDate={data.PassingYearrDiploma}
          DiplomaclgCGPA={data.diplomaCGPA}
          TwelthBoard={data.TwelthBoardName}
          TwelthSchoolName={data.TwelthSchool}
          TwelthtenthPercentage={data.TwelthPercentage}
          TwelthSchoolPassingYear={data.TwelthPassingYearr}
          DOB={data.DOB}
          Nationality={data.Nationality}
          Gender={data.Gender}
          Language={data.Language}
          MaritialStatus={data.MaritalStatus}
          Skills={data.Skills}
          Hobbies={data.Hobbies}
        />
      </div>
    </>
  );
}

export default App;

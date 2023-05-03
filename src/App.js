import { useEffect, useState } from "react";
import "./App.css";
import { Input, Progress, Checkbox, Tooltip, DatePicker } from "antd";
import dayjs from "dayjs";

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

function App() {
  const [bookingDetails, setBookingDetails] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [activeBtn, setActiveBtn] = useState("all");
  const [startDate, setStartDate] = useState("01/05/2023");
  const [endDate, SetEndDate] = useState("15/05/2023");

  const calculatePercentage = (x, y) => {
    return ((x / y) * 100).toFixed(0);
  };

  const renderCardsDetails = (status) => {
    const final_details = [];
    setActiveBtn(status);
    bookingDetails.forEach((elm) => {
      if (status === "all") {
        final_details.push(elm);
      } else if (elm.status === status) {
        final_details.push(elm);
      }
    });
    setCardDetails(final_details);
  };

  useEffect(() => {
    fetch("https://mocki.io/v1/a6e2a076-028e-4711-a0c2-0490e80d3aad")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setBookingDetails(res?.booking_details);
        setCardDetails(res?.booking_details);
        setStartDate(res?.date_started);
        SetEndDate(res?.date_ended);
      });
  }, []);

  return (
    <div className="App container">
      <header className="App-header p-4">
        <div className="d-flex align-items-center justify-content-between">
          <i className="bi bi-chevron-left system-default-icon"></i>
          <h3>Bookings</h3>
          <Tooltip title="Notifications">
            <i className="bi bi-bell system-default-icon primary-color"></i>
          </Tooltip>
        </div>
      </header>

      <div className="my-4">
        <Input
          size="large"
          placeholder="Search Anything"
          prefix={
            <i className="bi bi-search system-default-icon mx-3 color-muted"></i>
          }
          className="customized-input"
        />
      </div>

      <div className="customized-card d-flex align-items-center justify-content-between my-4">
        <div className="colored-text">
          <DatePicker
            defaultValue={dayjs(startDate, dateFormatList[0])}
            format={dateFormatList}
            bordered={false}
            placeholder="Start Date"
            className="colored-text p-0"
          />
        </div>
        <div>
          <i className="bi bi-arrow-right system-default-icon"></i>
        </div>
        <div className="colored-text d-flex align-items-center">
          <DatePicker
            defaultValue={dayjs(endDate, dateFormatList[0])}
            format={dateFormatList}
            bordered={false}
            placeholder="End Date"
            className="colored-text p-0"
          />
          <Tooltip title="Slider">
            <i className="bi bi-sliders system-default-icon mx-2 color-muted"></i>
          </Tooltip>
        </div>
      </div>

      <div className="my-4">
        <div
          className="btn-group d-flex align-items-center justify-content-between"
          role="group"
          aria-label="Basic example"
        >
          <div className="">
            <button
              type="button"
              className={`btn btn-outline group-btn ${
                activeBtn === "all" ? "active_btn" : ""
              }`}
              autoFocus={true}
              onClick={() => renderCardsDetails("all")}
            >
              All
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className={`btn btn-outline group-btn ${
                activeBtn === "upcoming" ? "active_btn" : ""
              }`}
              onClick={() => renderCardsDetails("upcoming")}
            >
              Upcoming
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className={`btn btn-outline group-btn ${
                activeBtn === "checked_in" ? "active_btn" : ""
              }`}
              onClick={() => renderCardsDetails("checked_in")}
            >
              Check-in
            </button>
          </div>
        </div>
      </div>

      {cardDetails.map((data, idx) => {
        return (
          <div className="customized-card my-4" key={`key_${idx}`}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="">
                <img src={data.img_url} alt="IMG" className="profile-img" />
                <span className="ms-3">{data.pets_name}</span>
              </div>
              {data.status === "upcoming" && (
                <div className="upcoming_tag py-sm-2 px-sm-4 py-1 px-2">
                  Upcoming
                </div>
              )}
            </div>

            <div className="d-flex align-items-center justify-content-between my-4">
              <div className="color-muted">
                <DatePicker
                  defaultValue={dayjs(data.start_date, dateFormatList[0])}
                  format={dateFormatList}
                  bordered={false}
                  className="colored-text p-0"
                />
              </div>
              <div>
                <i className="bi bi-arrow-right system-default-icon app-icons"></i>
              </div>
              <div className="colored-text">
                <DatePicker
                  defaultValue={dayjs(data.end_date, dateFormatList[0])}
                  format={dateFormatList}
                  bordered={false}
                  className="colored-text p-0"
                />
              </div>
            </div>

            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-lg-10 col-md-9 col-sm-8 col-7">
                <Progress
                  percent={calculatePercentage(
                    data.completed_task,
                    data.total_task
                  )}
                />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-5 text-end">
                <span className="color-muted">{data.completed_task}</span>/
                <span>{data.total_task} Tasks</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between my-4">
              {data.status === "checked_in" ? (
                <Tooltip title="Checked In">
                  <Checkbox className="check-in-cb" checked={true}>
                    Check-In
                  </Checkbox>
                </Tooltip>
              ) : (
                <Checkbox className="check-in-cb">Check-In</Checkbox>
              )}
              <Checkbox className="check-out-cb">Check-Out</Checkbox>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
